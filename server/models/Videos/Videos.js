import mongoose from "mongoose"

let videoSchema = new mongoose.Schema({
    videoname : {
        type: String,
        require: true,
        unique: true,
        maxlength: 50,
        minlength: 3
    },
    videolength: {
        type: Number,
        require: false
    },
    videoplaylist: {
        type: String,
        require: false,
        maxlength: 100,
        minlength: 0
    },
    videocreator: {
        type: String,
        maxlength: 50,
        minlength: 3
    },
    videocategory: {
        type: String,
        require: false
    }

});

let videoModel = mongoose.model("videos", videoSchema, "videos");

export default videoModel