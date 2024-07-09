// import mongoose from 'mongoose';
// import { generatePseudoTransactions } from '@/lib/actions/transations.action'; // Adjust the import path as needed

// const email = 'harsh062004@gmail.com'; // Use the desired email for generating transactions

// const mongoURI = process.env.MONGO_URI || "your-mongo-db-connection-string"; // Ensure you have your MongoDB connection string here

// (async () => {
//   try {
//     mongoose.set("strictQuery", true);
//     await mongoose.connect(mongoURI);
//     console.log('Connected to MongoDB');

//     await generatePseudoTransactions(email);

//     console.log('Pseudo transactions generated successfully');
//   } catch (error) {
//     console.error('Error generating pseudo transactions:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// })();

