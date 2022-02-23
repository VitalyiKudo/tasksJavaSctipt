export const data2 = [
    {
        heading:    [ '1 Перепишите код, заменив оператор `if` на тернарный оператор `?`' ],
        solutionJS: ` 
            const a = 2;
            const b = 1;
            let result = null;
    
            result = a + b < 4 ? true : false;
        `,
        solutionTS: `
            const a:number = 2;
            const b:number = 1;
            let result:boolean | null = null;
            
            result = a + b < 4 ? true : false;    
        `,
        example: '',
    },
    {
        heading:    [ '2 Перепишите `if..else` с использованием нескольких операторов `?`' ],
        solutionJS: ` 
            let login
            let message =
                login === "Piter"
                    ? "Hi"
                    : login === "Owner"
                    ? "Hello"
                    : login === ""
                    ? "unknown"
                    : "";
        `,
        solutionTS: `
            let login:string = ""
            let message:string =
                login === "Piter"
                    ? "Hi"
                    : login === "Owner"
                    ? "Hello"
                    : login === ""
                    ? "unknown"
                    : "";
        `,
        example: '',
    },
    {
        heading:    [ '2 Перепишите `if..else` с использованием нескольких операторов `?`' ],
        solutionJS: ` 
            let login
            let message =
                login === "Piter"
                    ? "Hi"
                    : login === "Owner"
                    ? "Hello"
                    : login === ""
                    ? "unknown"
                    : "";
        `,
        solutionTS: `
            let login:string = ""
            let message:string =
                login === "Piter"
                    ? "Hi"
                    : login === "Owner"
                    ? "Hello"
                    : login === ""
                    ? "unknown"
                    : "";
        `,
        example: '',
    },
    {
        heading:    [ '3 Перепишите код, заменив оператор `switch` на оператор `if..else`:' ],
        solutionJS: ` 
            const getValue = (value) => {
                if (value === "a") {
                    return "a"
                } else if (value === "b" || value === "c" || value === "d" || value === "e") {
                    return "others"
                } else {
                    return "unknown"
                }
            }
        `,
        solutionTS: `
            const getValue = (value:string) :string => {
                if (value === "a") {
                    return "a"
                } else if (value === "b" || value === "c" || value === "d" || value === "e") {
                    return "others"
                } else {
                    return "unknown"
                }
            }
        `,
        example: '',
    },
    {
        heading:    [ '4 Перепишите код с использованием одной конструкции `switch`:' ],
        solutionJS: ` 
            const getValueFromSwitch = (value) => {
                switch (value) {
                    case 0:
                        return 0
                    case 1:
                        return 1
                    case 2:
                    case 3:
                        return 2,3 
                    default:
                        return "unknown"
                }
            }
        `,
        solutionTS: `
            const getValueFromSwitch = (value:number) :string | number | Array<number> => {
                switch (value) {
                    case 0:
                        return 0
                    case 1:
                        return 1
                    case 2:
                    case 3:
                        return [2,3]
                    default:
                        return "unknown"
                }
            } 
        `,
        example: '',
    },
    {
        heading:    [ '5 Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.' ],
        solutionJS: ` 
            const getNumbers = (number) =>  {
                while (number < 3) {
                    console.log("number" + number + "!")
                    number++
                }
                return null
            }
        `,
        solutionTS: `
            const getNumbers = (value:number) :void =>  {
                while (value < 3) {
                    console.log("number" + value + "!")
                    value++
                }
            }
        `,
        example: '',
    },
    {
        heading:    [ '6 Написать код который посчитает сумму всех элементов в массиве.' ],
        solutionJS: ` 
            const arraySum = (array) => {
                let sum = 0
                for (let i = 0 ; i < array.length ; i++) {
                    sum = sum + array[i]
                }
                return sum
            }
        `,
        solutionTS: `
            const arraySum = (value:Array<number>) :number => {
                let sum = 0
                for (let i = 0 ; i < value.length ; i++) {
                    sum = sum + value[i]
                }
                return sum
            }
        `,
        example: '',
    },
    {
        heading:    [ '7 Напишите код, который посчитает сумму всех парных элементов в массиве.' ],
        solutionJS: ` 
            const arrayEvenSum = (array) => {
                let sum = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 === 0) {
                       sum = sum + array[i]
                    }
                }
                return sum
            }
        `,
        solutionTS: `
            const arrayEvenSum = (value:Array<number>) :number => {
                let sum = 0
                for (let i = 0; i < value.length; i++) {
                    if (value[i] % 2 === 0) {
                       sum = sum + value[i]
                    }
                }
                return sum
            }
        `,
        example: '',
    },
    {
        heading: [
            'Напишите код, который посчитает сумму всех парных элементов в массиве.',
            'В суммировании участвуют только элементы больше 3.',
        ],
        solutionJS: ` 
            const arrayEvenSumPlus = (array, condition) => {
                let sum = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 === 0 && array[i] > condition) {
                        sum = sum + array[i]
                    }
                }
                return sum
            }
        `,
        solutionTS: `
            const arrayEvenSumPlus = (value:Array<number>, condition:number) :number => {
                let sum = 0
                for (let i = 0; i < value.length; i++) {
                    if (value[i] % 2 === 0 && value[i] > condition) {
                        sum = sum + value[i]
                    }
                }
                return sum
            }
        `,
        example: '',
    },
    {
        heading:    [ '9 Отсортируйте массив по убыванию.' ],
        solutionJS: ` 
            const arrayDescending = (array) => {
                let result = []
                let max = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > max) {
                        max = array[i]
                        result.unshift(array[i])
                    } else {
                        result.push(array[i])
                    } 
                }
                return result
            }
        `,
        solutionTS: `
            const arrayDescending = (value:Array<number>) :Array<number> => {
                let result = []
                let max = 0
                for (let i = 0; i < value.length; i++) {
                    if (value[i] > max) {
                        max = value[i]
                        result.unshift(value[i])
                    } else {
                        result.push(value[i])
                    } 
                }
                return result
            }
        `,
        example: '',
    },
    {
        heading:    [ '10 Отсортируйте массив по возрастанию.' ],
        solutionJS: ` 
            const arrayAscending = (array) => {
                let result = []
                let max = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > max) {
                        max = array[i]
                        result.push(array[i])
                    } else {
                        result.unshift(array[i])
                    } 
                }
                return result
            }
        `,
        solutionTS: `
            const arrayAscending = (value:Array<number>) :Array<number> => {
                let result = []
                let max = 0
                for (let i = 0; i < value.length; i++) {
                    if (value[i] > max) {
                        max = value[i]
                        result.push(value[i])
                    } else {
                        result.unshift(value[i])
                    } 
                }
                return result
            }
        `,
        example: '',
    },
    {
        heading:    [ '11 С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.' ],
        solutionJS: ` 
            const logArray = (array, firstCondition, secondCondition) => {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > firstCondition && array[i] < secondCondition) {
                        console.log(array[i])       
                    }
                }
                return null
            }
        `,
        solutionTS: `
            const logArray = (firstCondition:number = 3, secondCondition:number = 10) :void => {
                for (let i = firstCondition ; i < secondCondition ; i++ ) {
                    console.log(i)
                }
            }
        `,
        example: '',
    },
    {
        heading:    [ '12 Найдите сумму положительных элементов массива' ],
        solutionJS: ` 
            const sumOfPositive = (array) => {
                let sum = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > 0) {
                        sum = sum + array[i] 
                    }
                }
                return sum
            }
        `,
        solutionTS: `
            const sumOfPositive = (value:Array<number>) :number => {
                let sum = 0
                for (let i = 0; i < value.length; i++) {
                    if (value[i] > 0) {
                        sum = sum + value[i] 
                    }
                }
                return sum
            }
        `,
        example: '',
    },
    {
        heading: [
            '13 С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4',
            'Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо',
        ],
        solutionJS: ` 
            const isHasValue = (array, value) => {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === value) {
                        return "Has"
                    } else if (array[i] !== value && i === array.length - 1) {
                        return null
                    }    
                }
            }
        `,
        solutionTS: `
            const isHasValue = (value:Array<number>, condition:number = 4) :string | void => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === condition) {
                        return "Has"
                    } else if (value[i] !== condition && i === value.length - 1) {
                        break
                    }    
                }
            }
        `,
        example: '',
    },
    {
        heading: [
            '14 Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50.',
            'Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла)',
            'и запишите его в переменную `num`',
        ],
        solutionJS: ` 
            const finalFunction = (number, finalValue) => { 
                let result = number
                let iters = 0
                while (result > finalValue) {
                    result = result / 2
                    iters++
                }
                return {'result:': result, 'iterations': iters}
            }
        `,
        solutionTS: `
            const finalFunction = (value:number = 1000, finalValue:number = 50) :object => { 
                let result = value
                let iters = 0
                while (result > finalValue) {
                    result = result / 2
                    iters++
                }
                return {'result:': result, 'iterations': iters}
            }
        `,
        example: '',
    },
];
