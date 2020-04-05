import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

export default function Workout({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <ListItem
          key="high_stepping"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping1"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks1"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats1"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping2"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks2"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats2"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping3"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks3"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats3"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping4"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks4"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats4"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping5"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks5"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats5"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="high_stepping6"
          title="High Stepping"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="butt_kicks6"
          title="Butt Kicks"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
        <ListItem
          key="squats6"
          title="Squats"
          subtitle={"maybe there will be some text"}
          containerStyle={styles.item}
          bottomDivider
        />
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  scroll: {
    flexDirection: "column",
    width: "100%",
  },
  contentContainerStyle: {
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  item: {
    width: "100%",
  },
});
