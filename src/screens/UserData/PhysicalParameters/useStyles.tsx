import { useTheme } from "@ui-kitten/components";
import { styles } from "styles/screens/UserData/PhysicalParameters";

import { Gender } from "./types";

export const useStyles = (gender: Gender) => {
  const theme = useTheme();

  const btnStyles = (type: Gender) => [
    styles.genderBtn,
    gender !== type && {
      backgroundColor: theme["inactive-button-background"],
      ...styles.genderrInActiveBtn
    }
  ];

  const textStyles = (type: Gender) => [
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
