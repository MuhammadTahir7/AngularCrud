import { config } from 'rxjs';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDg6H42fTzchNZ9jDlQDPAwtFxyCAhNlWw",
    authDomain: "crud-45c8e.firebaseapp.com",
    databaseURL: "https://crud-45c8e.firebaseio.com",
    projectId: "crud-45c8e",
    storageBucket: "crud-45c8e.appspot.com",
    messagingSenderId: "1053269248780"
  }

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
