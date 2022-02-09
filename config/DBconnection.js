const mongoose = require('mongoose');


const DBconnection= async ()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log('DB connected')
    } catch (error) {
        console.log({msg : 'DB not connected',error})
    }
    
}

module.exports = DBconnection;