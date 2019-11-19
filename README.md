# College Metrics Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It provides an easy way to spin up a react front end.

## Development

1. You need to have node 12.10 or later installed
1. Install dependencies with `yarn` or `npm install`
1. Run start with `npm start` or `yarn start`

## Deployment

By default, the app builds to run from the root of a server. To change this you will want to add the homepage property to the package.json:

`"homepage": "http://mywebsite.com/relativepath",`

To enable Google Analytics you should create a .env file in the root of the project with `REACT_APP_GA_ID=` as a variable. This will replace it everywhere it should in the index.html

Then run `npm run build`.

Everything in the build directory can be copied into the directory on the server you would like to serve the app from.

## Available Scripts

In the project directory, you can run:

### `node ./scripts/convert-excel-to-json.js`

This script is used to update the data in constants/data.js from the research spreadsheet. The spreadhsheet file should be named data.xlsx.

If you need to add new parameters in the future, you will need to update the schema variable with the new parameters for it to grab them out of the sheet.

If you have problems running the script, check to make sure the page names still match the sheetname strings in the switch statement.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
