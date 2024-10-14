"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
	return (
		<>
			{result.map((v, i) => (
				<div key={i} className="list-item">
					<Link prefetch={false} href={`/detail/${v._id}`}>
						<h4>제목 : {v.title} -&gt; 상세보기</h4>
					</Link>
					<DetailLink bId={v._id.toString()} />
					<button
						onClick={(e) => {
							// fetch("/api/practice/deleteBoard", {
							fetch(`/api/post/${v._id}`, {
								method: "DELETE",
							})
								.then((res) => {
									console.log(res.status);
									if (res.status === 200) return res.json();
									else if (res.status === 400) alert("자신의 글만 삭제가능");
									else if (res.status === 402) alert("로그인 후 가능합니다.");
									return;
									// location.reload();
								})
								.then((res) => {
									if (res) {
										console.log(res);
										alert(res);
										e.target.parentElement.style.opacity = 0;
										setTimeout(() => {
											e.target.parentElement.style.display = "none";
										}, 1000);
									}
								});
							// fetch(`/api/test?name=한호성&age=30`);
							// fetch(`/api/abc/어쩌구`);
						}}
					>
						🗑
					</button>
					<p>{v.content}</p>
					<p>작성자 : {v.author}</p>
					<Link href={`/edit/${v._id}`}>삭제하기📌</Link>
				</div>
			))}
		</>
	);
}
