"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ bId }) {
	let router = useRouter();
	console.log(bId);

	// let a = usePathname();
	// let b = useSearchParams();
	// let c = useParams();

	return (
		<button
			onClick={() => {
				console.log(123312312);
				// router.prefetch("/detail/dsds");
				router.prefetch(`/detail/${bId}`);
				router.push(`/detail/${bId}`);
				// prefetch : 미리 페이지 로드해놓음
			}}
		>
			버튼
		</button>
	);
}
