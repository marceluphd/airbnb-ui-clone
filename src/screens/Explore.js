import React, { Component } from "react";
import { View, Text } from "react-native";

class Explore extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text> Explore </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Explore;