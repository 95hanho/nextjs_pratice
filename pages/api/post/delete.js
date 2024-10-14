import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
	const db = (await connectDB).db("forum");
	if (요청.method === "DELETE") {
		await db.collection("post").deleteOne({
			_id: new ObjectId(요청.body),
		});
		응답.status(200).json("삭제완료");
	}
}
