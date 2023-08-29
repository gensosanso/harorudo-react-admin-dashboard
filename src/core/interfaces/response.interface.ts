interface IResponseData<TDATA = unknown, TERROR = Error> {
  error?: TERROR | null;
  data?: TDATA | null;
  count?: number;
  status: 'SUCCESS' | 'ERROR' | 'WARNING';
  message: string;
}

export default IResponseData;
