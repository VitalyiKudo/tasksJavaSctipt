export const data21 = [
    {
        heading: [
            '1. Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность',
            'Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`',
            '- Функция `isCustomerVerified` должна возвращать промис',
            '- В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет true',
            '- В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`',
        ],
        solutionJS: ` 
        const isCustomerVerified = (obj) => {
            return new Promise((resolve, reject) => {
                if (obj.verified) {
                    resolve(obj)
                } else {
                    reject('Customer is not verified')
                }
            })
        }
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '2. Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами',
            'Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`',
            '- Функция `getCustomers` должна возвращать промис',
            '- В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится',
            '  с текстом `We dont have information about country for this customer: $ {customer.name}`',
            '- Склеивание происходит **только** для объектов с флагом `verified: true`',
        ],
        solutionJS: ` 
        const getCustomers = (arrCustomers, arrCountries) => {
        
            return new Promise((resolve, reject) => {
                let arr = []
                let wrongId = 0
                for (customer of arrCustomers) {
                    wrongId = 0
                    for (let country of arrCountries) {
                        if (customer.verified && country.id === customer.id) {
                            arr.push({...customer, ...country})
                        } 
                        if (customer.verified && country.id !== customer.id) {
                            wrongId++
                        }
                    }
                    if (wrongId >= arrCountries.length) {
                        reject('We dont have information about country for this customer: $ {customer.name}')
                    }
                }
                resolve(arr)
            })
        }
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '3. Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию',
            '- Функция `send` должна возвращать промис',
            '- Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)',
            '- Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром',
            '  аргументом для которого будет массив который содержит список объектов-стран',
            '- В том случае если сервер ответил статус кодом не `200` промис **должен**',
            '  реджектится с текстом We have error, status code: $ {statusCode}',
        ],
        solutionJS: ` 
        const send = (url) => {
            return new Promise((resolve, reject) => {
                get(url, function(error, meta, body) {
                    if (meta.status === 200) {
                        resolve(body.toString())
                    }
                    reject('We have error, status code: $ {meta.status}')
                });
            })
        }
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '4. Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом',
            'У класса `Countries` должен быть один метод `send` который должен возвращать промис',
            'А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`',
            '- Метод `send` должен возвращать промис',
            '- Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран',
            '- В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: $ {statusCode}`',
            '- Генерировать ошибку если `url` по типу не строка',
            '- Генерировать ошибку если методу `send` передать по типу не число.',
        ],
        solutionJS: ` 
        const get = require('fetch').fetchUrl;

        class Countries {
            constructor() {
                this.url = url
            }

            send(num) {
                if (typeof num !== 'number') {
                    throw new Error('Send method must have a typeof number parameter')
                }
            
                return new Promise((resolve, reject) => {
                    if (typeof this.url !== 'string') {
                        throw new TypeError('Url must be a string')
                    }
                    get(this.url, function(error, meta, body) {
                        if (meta.status === 200) {
                            resolve(body.toString())
                        }
                        reject('We have error, status code: $ {meta.status}')
                    });
                })
            }
        }
        `,
        solutionTS: '',
        example:    '',
    },
];
