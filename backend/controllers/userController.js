const asyncHandler = require('express-async-handler')

//@desc     Register a New User
//@route    /api/users
//@access   Public
const registerUser = asyncHandler(async(req, res) => {

   const {nombre, apellido, password} = req.body

   if(!nombre || !apellido || !password) {
      return res.status(400)
      json({message: 'Por favor, complete todos los campos'})
   }

   res.send('Register Route')
})

//@desc     Login a user
//@route    /api/users/login
//@access   Public
const loginUser = asyncHandler(async(req,res) => {
   res.send('Login route')
})

module.exports = {
   registerUser,
   loginUser
}