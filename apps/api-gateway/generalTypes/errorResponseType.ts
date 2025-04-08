export type Result<T = any> = {
  success: boolean; // Флаг успешности
  message: string; // Сообщение (ошибка или успех)
  data: T[] | []; // Данные (массив или пустой массив)
};
