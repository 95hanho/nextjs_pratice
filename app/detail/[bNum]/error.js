"use client";

export default function Error({ error, reset }) {
	console.log(error);

	return (
		<div>
			<h4>에러남</h4>
			<button onClick={reset}>다시새로고침</button>
		</div>
	);
}
