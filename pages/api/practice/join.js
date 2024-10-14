import { connectDB } from "@/util/database";

// 연습문제: 회원가입
export default async function handler(요청, 응답) {
	if (요청.method === "POST") {
		const db = (await connectDB).db("forum");

		if (!요청.body.id || !요청.body.pwd) {
			return 응답.status(500).json("아이디/비번을 입력해주세요.");
		}
		const dupl = await db.collection("user").findOne({ id: 요청.body.id });
		if (dupl) {
			return 응답.status(500).json("중복 회원 있음");
		} else {
			await db.collection("user").insertOne(요청.body);
			return 응답.status(200).json("회원가입 완료");
		}
	}
}
