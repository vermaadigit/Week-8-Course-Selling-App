
function createUserRoutes(app)
{
    app.post('/user/signup', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    app.post('/user/signin', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    app.get('/user/purchases', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
}

module.exports = createUserRoutes;