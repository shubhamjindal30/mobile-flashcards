import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

const ShowMessage: React.FC = ({ children }) => (
  <View style={styles.container}>
    <Title style={styles.topHeading}>{children}</Title>
  </View>
);

export default ShowMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topHeading: {
    margin: 10
  }
});
