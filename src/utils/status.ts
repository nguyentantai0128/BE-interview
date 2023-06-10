import httpStatus from "http-status";

const resStatus = (statusCode: number, message: string) => {
	return {
		code: statusCode,
		message,
	};
};

export const resStatusSuccess = () =>
	resStatus(httpStatus.OK, httpStatus["200_MESSAGE"]);

export const resStatusInputFailure = () =>
	resStatus(httpStatus.UNPROCESSABLE_ENTITY, httpStatus["422_MESSAGE"]);

export const resStatusInternalSever = () =>
	resStatus(httpStatus.INTERNAL_SERVER_ERROR, httpStatus["500_MESSAGE"]);

export const resStatusUnAuthorize = () =>
	resStatus(httpStatus.UNAUTHORIZED, httpStatus["401_MESSAGE"]);

export const resStatusAccessDenied = () =>
	resStatus(httpStatus.FORBIDDEN, httpStatus["403_MESSAGE"]);

export const resStatusBadRequest = () =>
	resStatus(httpStatus.BAD_REQUEST, httpStatus["400_MESSAGE"]);
export const resStatusNotFound = () =>
	resStatus(httpStatus.NOT_FOUND, httpStatus["404_MESSAGE"]);
