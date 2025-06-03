
// Generic class which is used to create a responses from the api and return by creating its object

class ApiResponse{
    constructor(
        statusCode,
        message='Success',
        data=null
    ){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = true
    }
}

module.exports = ApiResponse