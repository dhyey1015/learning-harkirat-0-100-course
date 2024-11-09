
const app = express()

enum ResponseStatus{
    Success = 200,
    NotFound = 404,
    Error = 500,
}

app.get('/' function(req, res){
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({})
    }

    res.status(ResponseStatus.Error).json({})
})