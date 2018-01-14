// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBAyEv5tw2GcQR5yyHW4gFXwvwhVrgEkRY",
    authDomain: "firestore-crud1.firebaseapp.com",
    databaseURL: "https://firestore-crud1.firebaseio.com",
    projectId: "firestore-crud1",
    storageBucket: "firestore-crud1.appspot.com",
    messagingSenderId: "553891293478"
  }
};
