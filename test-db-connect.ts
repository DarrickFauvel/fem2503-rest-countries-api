import { MongoClient } from 'mongodb';

// Replace the following with your MongoDB connection string
const uri = Bun.env.DB_URI

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to MongoDB!');
    
    // Perform operations on the database here
    const database = client.db('sample_database');
    const collection = database.collection('sample_collection');
    
    // Example: Find one document
    const document = await collection.findOne({});
    console.log('Found document:', document);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

connectToMongoDB();
