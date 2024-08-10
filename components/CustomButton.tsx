import { TouchableOpacity, Text } from "react-native";
import { twMerge } from "tailwind-merge";
interface ButtonInterface {
  onPress: () => void;
  title: string;
  containerStyle?: string;
  textStyle?: string;
}
function CustomButton({
  onPress,
  title,
  containerStyle = "",
  textStyle = "",
}: ButtonInterface) {
  return (
    <TouchableOpacity
      className={twMerge("bg-white py-3 px-4 rounded-xl", containerStyle)}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text className={twMerge("text-center text-lg font-semibold", textStyle)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
