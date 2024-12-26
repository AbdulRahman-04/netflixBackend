import mongoose from "mongoose"

let userSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

let userModel = mongoose.model("users", userSchema, "users");

export default userModel