module.exports = function(app) {
    
    app.get('/repos/view/:id', function(req, res) {
        var repos = app.db.get('repos')
        repos.findOne(
            { 'id': parseInt(req.params.id) }, 
            function(err, repo) {
                res.render('repoView.jade', {
                    repo: repo,
                })
            }
        )
    })
}
