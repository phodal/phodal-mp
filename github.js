let GitHubApi = require('github');

let github = new GitHubApi({});

github.search.repos({
  q: 'github' + '+user:phodal',
  sort: 'stars',
  order: 'desc'
}, function (err, res) {
  if (err) throw err;
  console.log(JSON.stringify(res))
});
