# React-Native Workshop



## Setting-up environment
Complete set up is [here](https://reactnative.dev/docs/environment-setup).

1. Create a new React-Native project.
```nodejs
npx react-native init ReactNativeItemsList
```
In case of using macOS run `cd ios && pod install && cd ..`.

2. Add [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) and [babel-plugin-import-glob](https://github.com/novemberborn/babel-plugin-import-glob) for handle imports more easy.
```
yarn add babel-plugin-module-resolver babel-plugin-import-glob
```

3. Add some folders and files to give a semantic structure.
```bash
src
├───app
│   │   index.js
│   │
│   ├───assets
│   ├───components
│   └───screens
├───config
├───constants
│       colors.js
│
├───context
└───services
```

4. Start service in a terminal using `yarn start --reset-cache` . We add the flag --reset-cache to have a clean development enviroment.
In another terminal run `yarn run android` to try app in Android.