import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        default:0
    },
    status:{
        type: Boolean,
        default:true
    },
    avatar:{
        type:String,
        default:"https://i.pinimg.com/736x/57/fb/31/57fb3190d0cc1726d782c4e25e8561e9.jpg"
    }
},{timestamps:true})


UserSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password, salt)
        this.password = passwordHash
        next();
    } catch (error) {
        console.log(error)
    }
})
UserSchema.methods.isValidPasssword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password)
    } catch (error) {
        console.log(error)
    }
}


export default mongoose.model("User",UserSchema)