class ApiError extends Error{
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack =  ""
  ){
    super(message)
    this.statusCode= statusCode   // http status (404, 500, 400)
    this.data = null
    this.message = message  // error message
    this.sucess = false;
    this.errors= errors    //extra validation error


    if(stack)
    {
      this.stack = stack
    }else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}