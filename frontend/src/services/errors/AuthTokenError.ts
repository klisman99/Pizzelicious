export class AuthTokenError extends Error {
	constructor() {
		super("The authentication token is invalid")
	}
}