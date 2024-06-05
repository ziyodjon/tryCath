export default class MyError extends Error {

    constructor(message, errorCode) {
        super(message);
        this.name = 'MyError';  // Устанавливаем имя ошибки
        this.errorCode = errorCode;   // Добавляем свойство errorCode
    }

}