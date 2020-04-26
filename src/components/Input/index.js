import React from "react";
import PropTypes from "prop-types";
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from "react-native";

import { Text, useTheme } from "@ui-kitten/components";

import BaseInput from "./BaseInput";

export class Madoka extends BaseInput {
  static defaultProps = {
    borderColor: "#7A7593",
    animationDuration: 250,
    labelHeight: 24,
    inputPadding: 16,
    height: 48,
    accessoryRight: null
  };

  render() {
    const {
      label,
      style: containerStyle,
      height: inputHeight,
      inputPadding,
      labelHeight,
      inputStyle,
      labelStyle,
      borderColor,
      accessoryRight
    } = this.props;
    const { width, focusedAnim, value } = this.state;

    return (
      <View
        style={[containerStyle, { height: inputHeight + labelHeight + 8 }]}
        onLayout={this._onLayout}
      >
        <View
          style={[styles.inputContainer, { borderBottomColor: borderColor }]}
        >
          <View style={[styles.inputWrapper, width]}>
            <TextInput
              ref={this.input}
              {...this.props}
              style={[
                styles.textInput,
                inputStyle,
                {
                  height: inputHeight,
                  paddingHorizontal: inputPadding
                }
              ]}
              value={value}
              onBlur={this._onBlur}
              onChange={this._onChange}
              onFocus={this._onFocus}
              underlineColorAndroid={"transparent"}
            />
            <Animated.View
              style={[
                styles.switch,
                {
                  height: inputHeight - 2,
                  opacity: focusedAnim
                }
              ]}
            >
              {accessoryRight}
            </Animated.View>
          </View>

          {/* right border */}
          <Animated.View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 2,
              height: focusedAnim.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, inputHeight, inputHeight]
              }),
              backgroundColor: borderColor
            }}
          />
          {/* top border */}
          <Animated.View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: 2,
              width: focusedAnim.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 0, width, width]
              }),
              backgroundColor: borderColor
            }}
          />
          {/* left border */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 2,
              height: focusedAnim.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [0, 0, inputHeight]
              }),
              backgroundColor: borderColor
            }}
          />
        </View>
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                width,
                height: labelHeight,
                bottom: focusedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [labelHeight + inputPadding, 0]
                }),
                left: inputPadding
              }
            ]}
          >
            <Animated.Text
              style={[
                styles.label,
                labelStyle,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 14]
                  })
                }
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 2
  },
  labelContainer: {
    position: "absolute"
  },
  label: {
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "#6a7989"
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end"

    // alignItems: "flex-start",
    // width:
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    width: "62%"
  },
  switch: {
    width: "38%",
    flex: 1,
    flexDirection: "column-reverse"
    // alignItems: "stretch",

    // justifyContent: "flex-end"
  }
});
