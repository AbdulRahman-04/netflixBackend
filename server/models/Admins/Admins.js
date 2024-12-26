import mongoose from "mongoose"

let adminSchema = new mongoose.Schema({
    adminname : {
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

let adminModel = mongoose.model("admins", adminSchema, "admins");

export default adminModel