// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDjJbM5H7vcFR6Gm0p0U8-nqe_6fNUssIU",
    authDomain: "ng-mochate.firebaseapp.com",
    databaseURL: "https://ng-mochate.firebaseio.com",
    projectId: "ng-mochate",
    storageBucket: "ng-mochate.appspot.com",
    messagingSenderId: "1059854966048"
  };
};
