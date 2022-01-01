# Google search clone

This project hopes to replicate the working of the google search page. It uses the Google's [custom search API](https://developers.google.com/custom-search/v1/overview) to get the search results. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is created to explore custom designs on one of the most visited pages in the internet, the google landing page. It is strictly for learning.

## Working 

The project consists of a front-end and a backend. The front end, created using React is used to shows all the screens that display the landing page and search result page.

The backend, created using express, acts as a proxy that makes the api call.

## Prerequisites

There are a few prerequisited before one can run this application locally. The application makes use of Google's custom search API, which requires an API key. You can generate your API key from [here](https://developers.google.com/custom-search/v1/overview#api_key)

We also need to create a [Programmable Search Engine](https://developers.google.com/custom-search/docs/tutorial/creatingcse#defining_a_programmable_search_engine_in_control_panel), which can be done from [here](https://programmablesearchengine.google.com/controlpanel/all). You can `Add` a new engine, select `search the entire web` and `create`. Once that is created, click on `Customize` button. You will get redirected to the legacy console, from where you have to `Copy to clipboard` the `Search engine ID`.

We will need to store these two pieces of information in a `.env`
The `.env` file would have two variables :
```
 REACT_APP_SEARCH_API_KEY="<YOUR-API-KEY>"

 REACT_APP_BROWSER_CONTEXT_KEY="<YOUR-BROWSER-CONTEXT-KEY>"
```

## How to run the project

To install necessary packages: `npm i`

`npm start:backend` followed by `npm start:frontend` to run the app (from the project root directory).

In the project directory, you can run:

#### `npm start:backend`

Runs the app's backend in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view console errors if any in the browser. The frontend will be making calls to the backend to get the search results. 

#### `npm start:frontend`

Runs the app's frontend in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Other *create-react-app* native scripts.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<a name="scripts"/>
## Available Scripts