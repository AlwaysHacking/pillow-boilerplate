class HelloService {
  constructor($http) {
    this.$http = $http
    this.apiURLs = {
      AngularJS: 'https://api.github.com/repos/angular/angular.js/commits?per_page=3&sha=master',
      Webpack: 'https://api.github.com/repos/webpack/webpack/commits?per_page=3&sha=master'
    }
  }

  getApis() {
    return this.apiURLs
  }

  fetchCommits(library) {
    return this.$http.get(this.apiURLs[library])
  }
}

export default ['$http', HelloService]
