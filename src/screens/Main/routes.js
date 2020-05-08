import Home from "./Home";
import Motivation from "./Motivation";
import Settings from "./Settings";
import Report from "./Report";

import Workouts from "./Workouts";
import Workout from "./Workout";

export const routes = {
  screens: [
    {
      name: "Workouts",
      title: "Workouts",
      component: Workouts
    },
    {
      name: "Workout",
      title: "Workout",
      component: Workout
    }
  ],
  tabs: [
    {
      name: "Home",
      title: "Home",
      component: Home,
      icon: {
        library: "FontAwesome",
        name: "home"
      }
    },
    {
      name: "Motivation",
      title: "Motivation",
      component: Motivation,
      icon: {
        library: "FontAwesome5",
        name: "fist-raised"
      }
    },
    {
      name: "Report",
      title: "Report",
      component: Report,
      icon: {
        library: "MaterialCommunityIcons",
        name: "account-circle"
      }
    },
    {
      name: "Settings",
      title: "Settings",
      component: Settings,
      icon: {
        library: "MaterialIcons",
        name: "settings"
      }
    }
  ]
};
