interface IHttpException extends Error {
  status: number;
  message: string;
}

export default IHttpException;
