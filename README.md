<!-- https://docs.expo.dev/get-started/installation/ -->
- npm install --global expo-cli
- expo init project-name # creates a new project
- choose blank project
- git init
- git add .
- git commit -m "Initial commit"
- git remote add origin https://github.com/edithbdev/React-native.git
- git branch -M main
- git push -u origin main
<!-- https://docs.expo.dev/get-started/create-a-new-app/ -->
- expo start
- Application Expo Go
- expo login
<!-- https://docs.expo.dev/guides/customizing-metro/ -->
- npm i @expo/metro-config
<!-- https://docs.nativebase.io/install-expo --> Existing project
- npm install native-base
- expo install react-native-svg
- expo install react-native-safe-area-context

```
import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
```
<!-- https://reactnavigation.org/docs/getting-started/ -->
- npm install @react-navigation/native
- expo install react-native-screens
- npm install @react-navigation/native-stack

<!-- https://www.npmjs.com/package/react-native-countdown-circle-timer -->
- npm i react-native-countdown-circle-timer

<!-- https://docs.nativebase.io/form-control -->
