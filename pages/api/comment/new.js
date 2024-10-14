import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
	const session = await getServerSession(요청, 응답, authOptions);
	const db = (await connectDB).db("forum");

	if (요청.method === "POST") {
		const data = 요청.body;
		if (!session) {
			응답.status(400).json("로그인안됨");
		} else if (!data.comment) {
			응답.status(400).json("댓글을 입력하셈");
		} else {
			const result = await db.collection("comment").insertOne({
				content: data.comment,
				author: session.user.email,
				parent: new ObjectId(data._id),
			});
			console.log(result);
			응답.status(200).json("성공");
		}
	}
}
