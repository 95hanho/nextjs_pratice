import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit({ params }) {
	const bNum = params.bNum;
	console.log(bNum);
	const db = (await connectDB).db("forum");
	const result = await db.collection("post").findOne({ _id: new ObjectId(bNum) });
	console.log(result);

	return (
		<div className="p-20">
			<h4>수정페이지</h4>
			{/* <form action="/api/practice/updateBoard" method="POST"> */}
			<form action="/api/post/edit" method="POST">
				<input type="hidden" name="_id" defaultValue={result._id.toString()} />
				제목 : <input name="title" placeholder="글제목" defaultValue={result.title} />
				<br />
				내용 : <input name="content" placeholder="글내용" defaultValue={result.content} />
				<br />
				<button type="submit">수정</button>
			</form>
		</div>
	);
}
