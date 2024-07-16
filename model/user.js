import mongoose from "../config/db.js";

const UserSchema = mongoose.Schema({
    "username": {
        type: String
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)
export default User;