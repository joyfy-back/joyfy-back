export type Result<T> = {
  success: boolean;
  message: string;
  data: T[] | [];
};
