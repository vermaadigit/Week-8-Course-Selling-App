
function createCourseRoutes(app)
{
    app.get('/course/purchase', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    app.get('/courses', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
}

module.exports = {
    createCourseRoutes : createCourseRoutes
}