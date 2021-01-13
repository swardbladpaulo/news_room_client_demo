import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Articles from "../modules/Articles";
import ArticleIndexDetails from "./ArticleIndexDetails";

const MainScreen = () => {
  const { articles } = useSelector((state) => state);
  debugger
  useEffect(() => {
    Articles.index();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleIndexDetails article={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MainScreen;
