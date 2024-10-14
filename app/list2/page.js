import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";

export const revalidate = 30;

export default async function List() {
	const db = (await connectDB).db("forum");
	let result = await db.collection("post").find().toArray();
	console.log(result);

	let list = result.map((v) => ({
		...v,
		_id: v._id.toString(),
	}));

	return (
		<div className="list-bg">
			<ListItem result={list} />
			{/* {result.map((v, i) => (
				<div key={i} className="list-item">
					<Link prefetch={false} href={`/detail/${v._id}`}>
						<h4>{v.title}</h4>
					</Link>
					<DetailLink bId={v._id.toString()} />
					<p>{v.content}</p>
					<Link href={`/edit/${v._id}`}>📌</Link>
				</div>
			))} */}
			<div>
				<Link href={`/write`}>작성</Link>
			</div>
		</div>
	);
}
