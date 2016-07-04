
React Hot Boilerplate
=====================

The minimal dev environment to enable live-editing React components. This project comes with Redux and Semantic-UI.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### About Semantic-UI
Semantic-UI needs a compilation step with gulp. To simplify things, I precompiled it and included the minified files in the index.html. However, if you wish to recompile it by yourself (in the aim to change the current Font for example), you can go here :
[official doc](http://semantic-ui.com/introduction/getting-started.html)


### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)


