import { View } from "react-native";

const HStack = (props: any) => {
  const { children } = props;
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>{children}</View>
  );
};

export default HStack;
