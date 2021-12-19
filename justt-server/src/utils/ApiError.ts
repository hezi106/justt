interface IApiError {
  statusCode: string;
  isOperational: boolean;
}

class ApiError extends Error implements IApiError {
  statusCode: any;
  constructor(statusCode: any, message: string | undefined, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  isOperational: boolean;
}

export default ApiError;
