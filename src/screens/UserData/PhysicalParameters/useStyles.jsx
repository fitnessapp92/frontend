import React from "react";
import { useTheme } from "@ui-kitten/components";
import { styles } from "styles/screens/UserData/PhysicalParameters";

export const useStyles = (gender) => {
  const theme = useTheme();

  const btnStyles = (type) => [
    styles.genderBtn,
    gender !== type && {
      backgroundColor: theme["inactive-button-background"],
      ...styles.genderrInActiveBtn
    }
  ];

  const textStyles = (type) => [
    { color: theme["inactive-button-text"] },
    gender !== type && styles.genderInActiveText
  ];

  return {
    maleBtn: btnStyles("male"),
    maleText: textStyles("male"),
    femaleBtn: btnStyles("female"),
    femaleText: textStyles("female")
  };
};
