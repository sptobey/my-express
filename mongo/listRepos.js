module.exports = function(app) {

    app.get('/repos/list', function(req, res) {
        var repos = app.db.get('repos')
        repos.find(
            { 'name': { $ne: "" } },
            { },    // no limit
            function(err, repos) {
                res.render('repoList.jade', {
                    repos: repos,
                })
            }
        )
    })
}
