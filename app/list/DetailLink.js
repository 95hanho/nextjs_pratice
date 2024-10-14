"use client";

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink({ bId }) {
	let router = useRouter();
	// console.log(bId);

	let a = usePathname();
	let b = useSearchParams();
	let c = useParams();
	// console.log(a, b, c);

	return (
		<button
			onClick={() => {
				// router.prefetch("/detail/dsds");
				router.prefetch(`/detail/${bId}`);
				router.push(`/detail/${bId}`);
				// prefetch : 미리 페이지 로드해놓음
			}}
		>
			상세보기
		</button>
	);
}
