import React, { useEffect } from "react"; // Importing useEffect from "react"
import { SafeAreaView, View, Text } from "react-native";
import WebView from "react-native-webview";
import WebViewComponent from "./components/webview";
import { request, PERMISSIONS } from "react-native-permissions";

const App = () => {
  useEffect(() => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        console.log('Location Permission', result);
      })
      .catch((error) => {
        console.log('Location Permission Error', error);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,
                           backgroundColor: 'red', 
                           marginTop: 20, 
                           borderWidth: 5, 
                           borderColor: 'blue', 
                           padding: 10 }}>
      <View style={{ flex: 1, backgroundColor: 'grey' }}></View>

      <View style={{ flex: 95, backgroundColor: 'pink' }}>
        <WebViewComponent />
        <Text>I love you Tharaphunaing.</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
