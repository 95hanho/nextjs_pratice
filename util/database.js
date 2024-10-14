import { MongoClient } from "mongodb";
const url = "mongodb+srv://apple:A1jpo3v9!@forum.udqabs0.mongodb.net/forum?retryWrites=true&w=majority&appName=forum";
const options = {};
let connectDB;

if (process.env.NODE_ENV === "development") {
	if (!global._mongo) {
		global._mongo = new MongoClient(url, options).connect();
	}
	connectDB = global._mongo;
} else {
	connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
