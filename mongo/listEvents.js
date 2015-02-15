module.exports = function(app) {

    app.get('/events/list/', function(req, res) {
        var events = app.db.get('events')
        events.find(
            { },
            { limit: 20 },
            function(err, events) {
                res.render('eventList.jade', {
                    events: events,
                })
            }
        )
    })
}
