export default class FetchData {
    startUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote';

    // запрос данных с сервера
    getResource = async url => {
        // await - пока не получим ответа , не запишем результат в переменную res
        const response = await fetch(url);
        // у fetch есть результат ok
        if (!response.ok) {
            throw new Error(`Произошла ошибка ${response.status}`);
        }

        return await response.json();
    };

    getJoke = async () => await this.getResource(this.startUrl);
}
