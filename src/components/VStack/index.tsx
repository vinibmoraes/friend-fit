import { View } from "react-native";

const VStack = (props: any) => {
  const { children } = props;
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>{children}</View>
  );
};

export default VStack;
