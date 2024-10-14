"use client";

import { $http } from "@/api";
import { getBoard, getComments } from "@/api/board";
import { useEffect, useState } from "react";

export default function Comments({ _id }) {
	const [comment, set_comment] = useState("");
	const [commentList, set_commentList] = useState([]);

	const init = () => {
		getComments(_id)
			.then(({ data }) => {
				console.log(data);
				set_commentList(data);
			})
			.catch((err) => {
				console.log(err);
			});

		// getBoard("66a2f502e166d9b8dad60159").then(({ data }) => {
		// 	console.log(data);
		// });
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<div>
			<h4>댓글</h4>
			<div>
				{commentList.length > 0
					? commentList.map((v, i) => (
							<p key={i}>
								{v.author}: {v.content}
							</p>
					  ))
					: "댓글없음"}
			</div>
			<input value={comment} onChange={(e) => set_comment(e.target.value)} />
			<button
				onClick={() => {
					// console.log(comment);
					$http
						.post(`/api/comment/new`, {
							comment,
							_id,
						})
						.then((res) => {
							console.log(res);
							if (res.status == 400) {
								alert("댓글을 입력해주세요.");
							} else {
								set_comment("");
								init();
							}
						})
						.catch((err) => {
							console.log(err);
						});
				}}
			>
				댓글전송
			</button>
		</div>
	);
}
