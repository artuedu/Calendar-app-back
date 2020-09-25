const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        //Conexión a base de datos
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar db');
    }

}

module.exports = {
    dbConnection
}