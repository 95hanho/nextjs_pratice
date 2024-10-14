"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
	return (
		<>
			{result.map((v, i) => (
				<div key={i} className="list-item">
					<Link prefetch={false} href={`/detail/${v._id}`}>
						<h4>{v.title}</h4>
					</Link>
					<DetailLink bId={v._id.toString()} />
					<button
						onClick={(e) => {
							// fetch("/api/practice/deleteBoard", {
							fetch(`/api/post/${v._id}`, {
								method: "DELETE",
							})
								.then((res) => {
									// console.log(res);
									return res.json();
									// location.reload();
								})
								.then((res) => {
									console.log(res);

									// e.target.parentElement.style.opacity = 0;
									// setTimeout(() => {
									// 	e.target.parentElement.style.display = "none";
									// }, 1000);
								});
							// fetch(`/api/test?name=한호성&age=30`);
							// fetch(`/api/abc/어쩌구`);
						}}
					>
						🗑
					</button>
					<p>{v.content}</p>
					<Link href={`/edit/${v._id}`}>📌</Link>
				</div>
			))}
		</>
	);
}
