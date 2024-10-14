"use client";

import { signIn, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function LoginBtn({ user }) {
	let router = useRouter();
	let path = usePathname();

	return (
		<>
			{!user ? (
				<>
					<button onClick={signIn}>로그인</button>
					&nbsp;
					{path !== "/register" && <button onClick={() => router.push("/register")}>회원가입</button>}
				</>
			) : (
				<button onClick={signOut}>로그아웃</button>
			)}
		</>
	);
}
