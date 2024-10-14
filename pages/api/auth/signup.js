import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
	if (요청.method === "POST") {
		console.log(요청.body);
		if (!요청.body.name || !요청.body.email || !요청.body.password) {
			console.log("빈 칸이 없이 입력해주세요.");
			return 응답.status(400).json("빈 칸이 없이 입력해주세요.");
		} else {
			let hash = await bcrypt.hash(요청.body.password, 10);
			요청.body.password = hash;
			const db = (await connectDB).db("forum");
			let user = await db.collection("user_cred").findOne({ email: 요청.body.email });
			console.log(user);
			if (user) {
				return 응답.status(200).json("같은 이메일이 존재합니다.");
			} else {
				await db.collection("user_cred").insertOne({ ...요청.body, role: "user" });
				return 응답.status(200).json("가입성공");
			}
		}
	}
}
