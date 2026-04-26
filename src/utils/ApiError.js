class ApiError extends Error {

  constructor (
    statuscode,
    message = "Something went wrong",
    error = [],
     stack = ""


  ){
    super(message)
    this.statusCode = statuscode
    this.data = null
    this.message = message
    this.success = false;
    this.error = this.error

    if( stack){
      this.stack = this.stack
    } else {
      Error.captureStackTrace(this, this.Constructor)
    }
}
}
export{ApiError}