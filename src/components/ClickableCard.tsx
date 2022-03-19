import {
  TouchableHighlight,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle
} from 'react-native';
import { Card } from 'react-native-paper';

interface ClickableCardProps {
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ children, style, onPress }) => {
  return (
    <TouchableHighlight style={Object.assign({}, styles.card, style)} onPress={onPress}>
      <Card>
        <Card.Content>{children}</Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default ClickableCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden'
  }
});
