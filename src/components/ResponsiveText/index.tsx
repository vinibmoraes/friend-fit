import React from "react";
import { Text, TextStyle } from "react-native";
import useResponsiveValue from "../../hooks/useResponsiveValue";

type Variant = "title" | "instruction" | "description";

interface Props {
  text: string;
  variant?: Variant;
  style?: TextStyle;
  bold?: boolean;
  fontWeight?: TextStyle;
}

const ResponsiveText: React.FC<Props> = ({
  text,
  variant = "description",
  style,
}) => {
  const getFontSize = () => {
    if (variant === "title") {
      return { xs: 15, sm: 19, md: 23 };
    }

    if (variant === "instruction") {
      return { xs: 14, sm: 18, md: 22 };
    }

    return { xs: 10, sm: 12, md: 14 };
  };

  const fontSize = useResponsiveValue(getFontSize());

  const color = "#833ab4";

  return (
    <Text style={[{ fontSize, color, textAlign: "center" }, style]}>
      {text}
    </Text>
  );
};

export default ResponsiveText;
