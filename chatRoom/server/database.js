import Dotenv from 'dotenv';
Dotenv.config();

import { MongoClient, ServerApiVersion } from 'mongodb';
const url = process.env.DB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export { client as databaseClient };