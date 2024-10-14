import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
	console.log("댓글조회");
	console.log("메서드", 요청.method);
	console.log(요청.query);
	const db = (await connectDB).db("forum");
	const result = await db
		.collection("comment")
		.find({
			parent: new ObjectId(요청.query.bId),
		})
		.toArray();
	console.log("result", result);
	return 응답.status(200).json(result);
}
