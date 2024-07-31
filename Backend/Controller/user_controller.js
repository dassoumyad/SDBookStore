import User from '../modal/user_modal.js';

import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Basic validation
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully",user:{
        id:newUser._id,
        fullname:newUser.fullname,
        email:newUser.email
    } });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login=async (req,res)=>{
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
          return res.status(400).json({ message: "All fields are required" });
          
        }
         // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
     // Check if password matches
     const isMatch =await bcrypt.compare(password,user.password)
     if (!isMatch) {
       return res.status(400).json({ message: "Invalid email or password" });
     }
     res.status(200).json({  message: "Login successful",user:{
        id:user._id,
        fullname:user.fullname,
        email:user.email
     } });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
