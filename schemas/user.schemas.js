var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolesValidos = [

    'ADMIN_ROLE',
    'USER_ROLE'

]

var UserSchema = new Schema({
    fullName: { type: String, required: true, maxlength: 40 },
    email: { type: String, required: true, unique: true, maxlength: 40 },
    password: { type: String, required: true },
    active: { type: Boolean, default: false },

    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }

});

module.exports = mongoose.model('User', UserSchema)