import style from './welcome.css'
import angularLogo from './assets/angularjs-logo.png'
import webpackPlusNpmLogo from './assets/webpack-plus-npm-logo.png'

const template = () => (
  `
    <div class="${style.hello}">
      <img src="${angularLogo}" alt="AngularJS Logo">
      <br>
      <img src="${webpackPlusNpmLogo}" alt="Webpack plus npm Logo">
      <h1>{{ msg }}</h1>
      <h2>Example</h2>
      <ul>
        <li><a ui-sref="example">GitHub Commits Example</a></li>
      </ul>
      <h2>Awesome List</h2>
      <ul>
        <li><a href="https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md" target="_blank">AngularJS Style Guide</a></li>
        <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
        <li><a href="https://github.com/angular-ui/ui-router" target="_blank">Angular UI Router</a></li>
      </ul>
    </div>
  `
)

const controller = function welcomeCtrl($scope) {
  $scope.msg = 'Welcome to Your Modernized AngularJS App'
}

export default {
  template: template(),
  controller: ['$scope', controller]
}
