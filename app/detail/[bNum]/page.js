import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comments from "./Comment";
import { notFound } from "next/navigation";
import { getBoard } from "@/api/board";
import Link from "next/link";
import DetailBtn from "./DetailBtn";

export default async function Detail({ params }) {
	const bNum = params.bNum;
	// const db = (await connectDB).db("forum");
	// let result = await db.collection("post").findOne({ _id: new ObjectId(bNum) });
	// result._id = result._id.toString();

	// let result = null;
	// await getBoard(bNum);

	const result = await getBoard(bNum).then(({ data }) => data);

	if (result)
		return (
			<div>
				<h4>상세페이지</h4>
				<h4>title: {result.title}</h4>
				<p>content: {result.content}</p>
				<p>author: {result.author}</p>
				<Link href="/list">목록으로</Link>
				<DetailBtn />
				<hr />
				<Comments _id={result._id} />
			</div>
		);
	else {
		// return <div>404 없는 페이지 입니다.</div>;
		return notFound();
	}
}
