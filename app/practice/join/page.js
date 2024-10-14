export default function Join() {
	return (
		<div className="p-20">
			<h4>회원가입</h4>
			<form action="/api/practice/join" method="POST">
				<input type="text" name="id" placeholder="아이디" />
				<input type="password" name="pwd" placeholder="비번" />
				<button type="submit">제출</button>
			</form>
		</div>
	);
}
