/**
 * GitHub Commits example
 * This demo is referenced from Vue example https://vuejs.org/v2/examples/commits.html
 */

import style from './example.css'

const template = () => (
  `
  <div class=${style.example}>
    <h1>Latest {{ data.currentLibrary }} Commits</h1>
    <label ng-repeat="library in data.libraries">
      <input type="radio" ng-model="data.currentLibrary" ng-value="library" id="library" name="library">
      {{ library }}
    </label>
    <p>{{ data.currentLibrary }}@master branch</p>
    <ul>
      <li ng-repeat="record in commits">
        <a href="{{ record.html_url }}" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        - <span class="${style.message}">{{ formatter.truncate(record.commit.message) }}</span><br>
        by <span class="${style.author}"><a href="{{ record.author.html_url }}" target="_blank">{{ record.commit.author.name }}</a></span>
        at <span class="${style.date}">{{ formatter.date(record.commit.author.date) }}</span>
      </li>
    </ul>
  </div>
  `
)

const controller = function exampleCtrl($http, $scope, ExampleService) {
  $scope.formatter = {
    date: (s) => s.replace(/T|Z/g, ' '),
    truncate: (s) => {
      const newline = s.indexOf('\n')
      return newline > 0 ? s.slice(0, newline) : s
    }
  }

  $scope.data = {
    libraries: ['AngularJS', 'Webpack'],
    currentLibrary: 'AngularJS'
  }

  $scope.$watch('data["currentLibrary"]', (library) => {
    ExampleService.fetchCommits(library).then(response => {
      $scope.commits = response.data
    })
  })
}

export default {
  template: template(),
  controller: ['$http', '$scope', 'ExampleService', controller]
}
