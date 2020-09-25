const { Schema, model, modelNames } = require('mongoose');

const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email requerido']
    },
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    }
});

module.exports = model('Usuario', UsuarioSchema);