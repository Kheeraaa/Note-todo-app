module.exports = function(app) {

    // Get 
    app.get('/todo', function(req,res) {
        res.render('todo')
    });

    app.post('/todo', function(req,res) {
        res
    });
 
}