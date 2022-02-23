export const data5 = [
    {
        heading: [
            '1 Напишите функцию upperCaseFirst(string).',
            'Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку',
        ],
        solutionJS: ` 
            const upperCaseFirst = (string) => {
                if (typeof string !== "string") {
                    throw new Error("parameter must be a string")
                }
                const newString = string[0].toUpperCase() + string.slice(1)
            
                return newString
            }
        `,
        solutionTS: `
            const upperCaseFirst = (value:string) :string => {
                const newString = value[0].toUpperCase() + value.slice(1)
            
                return newString
            }
        `,
        example: 'upperCaseFirst("my string")',
    },
    {
        heading: [
            '2 Напишите функцию checkSpam(source, example)',
            'Функция возвращает true, если строка source содержит подстроку spam. Иначе — false',
        ],
        solutionJS: ` 
            const checkSpam = (source, example) => {
                if (typeof source !== "string" || typeof example !== "string") {
                    throw new Error("all parameters must be a string")
                }
                return source.toLocaleLowerCase().includes(example.toLocaleLowerCase())
            }
        `,
        solutionTS: `
            const checkSpam = (source:string, example:string) :boolean => {
                return source.toLocaleLowerCase().includes(example.toLocaleLowerCase())
            }
        
        `,
        example: 'checkSpam("for source !", "for")',
    },
    {
        heading: [
            '3 Создайте функцию truncate(string, maxLength)',
            'Функция проверяет длину строки string',
            'Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength',
            'Результатом функции должна быть (при необходимости) усечённая строка',
        ],
        solutionJS: ` 
            const truncate = (string, maxLength) => {
                if (typeof string !== "string") {
                    throw new Error("firs parameter must be a string")
                }
                if (typeof maxLength !== "number") {
                    throw new Error("second parameter must be a string")
                }
            
                if(string.length > maxLength - 3) {
                   return string.slice(0,(maxLength - string.length - 3)) + "..." 
                }
            }
        `,
        solutionTS: `
            const truncate = (value:string, maxLength:number) :string => {
                if (typeof value !== "string") {
                    throw new Error("firs parameter must be a string")
                }
                if (typeof maxLength !== "number") {
                    throw new Error("second parameter must be a string")
                }
            
                if(value.length > maxLength) {
                   return value.slice(0,(maxLength - value.length - 3)) + "..." 
                } else {
                    return value 
                }
            }
        `,
        example: 'truncate("Hello", 4)',
    },
    {
        heading: [
            '4 Дана стоимость в виде строки: `"$120"`',
            'Первый символ — валюта, затем – число',
            'Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120',
            'Обратите внимание что нужно возвращать не строку 120 а именно число 120',
        ],
        solutionJS: ` 
            const extractCurrencyValue = (source) => {
                if (typeof source !== "string") {
                    throw new Error("parameter must be a string")
                }
            
                const result = parseInt(source.replace(/[^\d]/g, ''))
            
                if(isNaN(result)) {
                    return source
                } else {
                    return result
                }
            }    
        `,
        solutionTS: `
            const extractCurrencyValue = (source:string) :number | string => {
                const result = parseInt(source.replace(/[^\d]/g, ''))
            
                if(isNaN(result)) {
                    return source
                } else {
                    return result
                }
            }    
        `,
        example: 'extractCurrencyValue("$120")',
    },
];
