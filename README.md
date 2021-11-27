# Leaderboard

The Leaderboard is a javascript App that displays scores submitted by different players. It is developed using webpack and ES6 features. It allows you to submit scores of players to the scoreboard and all data is preserved to the external Leaderboard API. 

## Built With

- Webpack
- HTML and CSS
- Javascript

## Live Demo

[Live Preview of my website](https://tumworobere.github.io/Leaderboard/)

## Getting Started

To get a local copy up and running follow these simple example steps.

- Clone this repo to your local machine, run git clone and paste the url of the repository
  `git clone https://github.com/Tumworobere/Leaderboard.git` in your command prompt

### Setup
- Set up a new project with webpack 
#### Install Webpack
- Follow the instructions from the [getting started](https://webpack.js.org/guides/getting-started/#basic-setup) guide to set up the basics. Implement all the steps from *Basic Setup* to *NPM Scripts*.
- The next step is to add html file :
    Follow the instructions from the [setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin) guide
Then
```
npm run build
```
- Create a **/src/index.html** for writing the project

- Then modify **webpack.config.js** to point HtmlWebpackPlugin towards your template file:
```javascript
plugins: [
  new HtmlWebpackPlugin({
-   title: 'Output Management',
+   template: './src/index.html'
  }),
],
```
- Run `npm run build` to update the **/dist/index.html**.
- Then it is time to add some style to the project:
Follow the steps in [loading CSS](https://webpack.js.org/guides/asset-management/#loading-css) guide.
Next, execute `npm run build` and check if the HTML body style has changed.
#### Setup local dev server
- Finally,follow the [using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) guide and set it up on your local machine.

## Authors

👤 **Tumworobere Annah**

- GitHub: [@tumworobere](https://github.com/tumworobere)
- Twitter: [@Tannah2090](https://twitter.com/Tannah2090)
- LinkedIn: [LinkedIn](www.linkedin.com/in/annah-tumworobere-6258b443)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Tumworobere/gitflow/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse

## 📝 License

This project is [MIT](./MIT.md) licensed.
