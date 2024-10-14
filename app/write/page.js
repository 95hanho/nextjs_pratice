import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
	let session = await getServerSession(authOptions);
	console.log(session);

	if (!session) {
		return <div>로그인을 해주세요.</div>;
	} else {
		return (
			<div className="p-20">
				<h4>글작성</h4>
				<form action="/api/post/new" method="POST">
					제목 : <input name="title" placeholder="글제목" />
					<br />
					내용 : <input name="content" placeholder="글내용" />
					<br />
					<button type="submit">버튼</button>
				</form>
			</div>
		);
	}
}
