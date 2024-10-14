export default function handler(request, response) {
	if (request.method === "GET") {
		response.status(200).json(new Date());
	}
}
