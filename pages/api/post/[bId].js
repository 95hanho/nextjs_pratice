import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
	let session = await getServerSession(요청, 응답, authOptions);

	console.log(session);
	if (session) {
		const email = session.user.email;
		const db = (await connectDB).db("forum");
		if (요청.method === "DELETE") {
			const result = await db.collection("post").findOne({ _id: new ObjectId(요청.query.bId) });
			console.log(email, result.author);
			if (session.user.role === "admin") {
				await db.collection("post").deleteOne({
					_id: new ObjectId(요청.query.bId),
				});
				응답.status(200).json("관리자 권한으로 삭제완료");
			} else if (email === result.author) {
				await db.collection("post").deleteOne({
					_id: new ObjectId(요청.query.bId),
				});
				응답.status(200).json("삭제완료");
			} else {
				응답.status(400).json("자신의 글만 삭제가능");
			}
		}
	} else {
		응답.status(402).json("로그인 후 가능합니다.");
	}
}
