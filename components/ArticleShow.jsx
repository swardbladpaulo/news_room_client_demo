import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
const ArticleShow = (props) => {
  const {article}= props.route.params
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

export default ArticleShow

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: "Dimensions.get('window').width",
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "white",
    fontSize: 36,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },
  image: {
    height: 250,
    width: "Dimensions.get('window').width",
  },
});
