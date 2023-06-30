const User = require('../models/model');




const getAllUser = (async(req, res, next)=>{
    let users;
    try {
        users =await User.find();
        
    } catch (error) {
        console.log(error)
        
    }

    if(!users) {
        return res.status(404).json({message: "No Users found"})
    }
    return res.status(200).json({users});

});

const signup = (async(req, res, next) => {
    const {name, email, password} = req.body;

    let existingUser;

    try {
        existingUser= await User.findOne({email});

        
    } catch (error) {
      return console.log(error);
        
    }
    if(existingUser){
        return res.status(400).json({message:"user already esisted,login instead"})
    }

    const hashedPassword = bcrypt.hashSync(password);


    const user = new User({
        name,
        email,
        password,hashedPassword,
        blogs:[],
    });
    try {
       await user.save();
        
    } catch (error) {
       return console.log(error)
        
    }
    return res.status(201).json({ user })
});

const login = (async(req, res, next) => {
    const { email, password} = req.body;
    let existingUser;

    try {
        existingUser= await User.findOne({email});

        
    } catch (error) {
      return console.log(error);
        
    }
    if(existingUser){
        return res.status(404).json({message:"couldnt find User By this email"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.passsword);
    if(!isPasswordCorrect){
        return res.status(200).json({message:"incorrect password"})
    }
    return res.status(200).json({message: "login successfully"})


   
})





module.exports = {
    getAllUser,
    signup,
    login
}