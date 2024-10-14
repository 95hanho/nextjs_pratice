import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
	const bNum = 요청.query.bNum;

	const db = (await connectDB).db("forum");
	let result = await db.collection("post").findOne({ _id: new ObjectId(bNum) });
	result._id = result._id.toString();

	응답.status(200).json(result);
}
