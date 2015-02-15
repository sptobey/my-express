module.exports = function(app) {
    
    app.get('/events/view/:id', function(req, res) {
        var events = app.db.get('events');
        events.findOne(
            { 'id': req.params.id },    // parseInt causes problems
            function(err, event) {
                res.render('eventView.jade', {
                    event: event
                })
            }
        )
    })
}
