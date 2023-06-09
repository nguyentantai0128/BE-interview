export default class ApiError extends Error {
	statusCode: number;

	message: string;

	stack: string;

	constructor(statusCode: number, message: string, stack = "") {
		super(message);
		this.statusCode = statusCode;
		this.message = message;
		if (stack) {
			this.stack = stack;
		} else {
		}
	}
}
