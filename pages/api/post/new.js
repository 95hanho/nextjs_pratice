import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
	let session = await getServerSession(request, response, authOptions);
	// console.log(session);

	if (session) {
		request.body.author = session.user.email;
	}

	if (request.method === "POST") {
		console.log(request.body);
		if (request.body.title == "") {
			return response.status(500).json("저 제목 왜 안씀");
		}
		try {
			const db = (await connectDB).db("forum");
			const result = await db.collection("post").insertOne(request.body);
			return response.status(200).redirect("/list");
		} catch (err) {
			return response.status(500).json("DB 오류남...");
		}
	}
}
