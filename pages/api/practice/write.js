import { connectDB } from "@/util/database";

export default async function handler(request, response) {
	if (request.method === "POST") {
		console.log(request.body);
		console.log(request.body.title);
		console.log(request.body.content);
		const db = (await connectDB).db("forum");
		const result = await db.collection("post").insertOne({
			title: request.body.title,
			content: request.body.content,
		});
		console.log(result);
		return response.status(200).json("확인중");
	}
}
