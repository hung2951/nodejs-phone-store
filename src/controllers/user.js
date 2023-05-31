import { createToken, verifyToken } from "../middleware/JWT";
import User from "../models/user";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  const { email } = req.body;
  try {
    const existEmail = await User.findOne({ email }).exec();
    if (existEmail) {
      res.status(404).json({ message: "Email đã tồn tại" });
    } else {
      const user = await new User(req.body).save();
      res.status(200).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
          avatar: user.avatar,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    // return console.log(user);

    if (!user) {
      res.status(400).json({ message: "Tài khoản không tồn tại" });
    } else {
      const correctPassword = await user.isValidPasssword(password);
      if (!correctPassword) {
        res.status(400).json({ message: "Mật khẩu sai" });
      } else {
        const token = createToken({ _id: user._id }, "hungtv2951", {
          expiresIn: "1h",
        });
        res.json({
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const decodeAuth = async (req, res) => {
  const { token } = req.body;
  try {
    const idUser = verifyToken(token, "hungtv2951");
    let user = await User.findOne({ _id: idUser }).exec();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAll = async (req,res)=>{
    try {
        const users = await User.find().exec()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}

export const getOne = async (req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.id}).exec()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

export const update = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export const remove = async (req,res)=>{
    try {
        const user = await User.findOneAndRemove({_id:req.params.id}).exec()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
