// Importer mongoose
//const mongoose = require('mongoose');
import mongoose from 'mongoose';


const connectdb = async ()=>{
    try{
    const connect = await mongoose.connect('mongodb+srv://MedKad:1qfeUR1yJ4K0fs69@cluster0.glpnejf.mongodb.net');
    console.log("connected!!!");

    
}catch(err){
    console.error(err.message);
    process.exit(1);
}
}

export default connectdb;