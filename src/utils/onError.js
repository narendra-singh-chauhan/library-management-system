export const onError = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
}