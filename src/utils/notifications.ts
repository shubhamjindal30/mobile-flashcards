import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'mobile-flashcards:notifications';
const QUIZ_NOTIFICATION_HOUR = 20;

export const createNotificationContent = (title: string, body?: string) => {
  const notification: Notifications.NotificationContentInput = {
    title,
    sound: true,
    priority: 'high',
    sticky: false
  };
  if (body) notification.body = body;

  return notification;
};

export const clearAllLocalNotifications = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (error) {
    console.log(`There was an error in clearing notifications: ${error}`);
  }
};

export const setDailyNotificationForQuiz = async () => {
  try {
    const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const dataJSON = data ? JSON.parse(data) : null;

    if (dataJSON) return;

    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') return;

    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: createNotificationContent(
        `Complete your quiz!`,
        `👋🏻 Don't forget to complete your quiz today.`
      ),
      trigger: {
        hour: QUIZ_NOTIFICATION_HOUR,
        minute: 0,
        second: 0,
        repeats: true
      }
    });

    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
  } catch (error) {
    console.log(`There was an error scheduling quiz notification: ${error}`);
  }
};
