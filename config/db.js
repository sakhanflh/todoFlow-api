import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); 
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err)
    })

export default mongoose;