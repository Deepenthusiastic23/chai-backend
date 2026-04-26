 const asyncHandler = () => {
     (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).
      catch((err) => next(err))
    }

 }




  export {asyncHandler}

  // const asyncHandler = ()  => {}

  // const  asyncHandler = (fn) => () => {
    
  // }

  