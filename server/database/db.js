import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ,
            
            {
                serverSelectionTimeoutMS: 5000, // 5 seconds timeout
                socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
                connectTimeoutMS: 30000, // 30 seconds to establish connection
            });
            // {
            //     ssl: true,                    // Enabling SSL for connection
            //     tls: true,                    // Enabling TLS for connection
            //     tlsAllowInvalidCertificates: false  // Ensures the certificates are valid
            // });

        console.log('MongoDB Connected');
    } catch (error) {
        console.log("error occured", error); 
    }
}
export default connectDB;