export const data3 = [
    {
        heading:    [ ' 1 Создайте функцию `f`, которая возвращает куб числа.' ],
        solutionJS: ` 
            const exponentiation = (value) => {
                if ((typeof value === "number")) {
                    return Math.pow(value, 3)
                } else {
                    throw new Error("parameter is not a number type")
                }
            }
        `,
        solutionTS: `
            const exponentiation = (value:number) :number => {
                return Math.pow(value, 3)
            }
        `,
        example: 'exponentiation(3)',
    },
    {
        heading:    [ ' 2 Создайте функцию `f`, которая возвращает сумму всех параметров.' ],
        solutionJS: ` 
            const sum = (...values) => {
                let sum = 0
                const result = values.forEach(value => {
                    if (typeof value === "number") {
                        sum = sum + value
                    } else {
                        throw new Error("all parameters should be a Number type")
                    }
                })
                return sum
            }
        `,
        solutionTS: `
            const sum = (...values:Array<number>) :number => {
                let sum = 0
                const result = values.forEach(value => {
                    sum = sum + value
                })
                return sum
            }
        `,
        example: 'sum(5,5,5)',
    },
    {
        heading:    [ '3 Создайте функцию, которая отнимает от первого параметра второй и делит на третий' ],
        solutionJS: ` 
            const someMath = (fistValue, secondValue, thirdValue) => {
                if (typeof fistValue === "number" &&
                    typeof secondValue === "number" &&
                    typeof thirdValue === "number" )
                    {
                    return (fistValue - secondValue) / thirdValue
                } else {
                    throw new Error("all parameters should be a Number type")
                }
            }
        `,
        solutionTS: `
            const someMath = (fistValue:number, secondValue:number, thirdValue:number) :number => {
                return (fistValue - secondValue) / thirdValue
            }
        `,
        example: 'someMath(30,10,2)',
    },
    {
        heading:    [ '  Сделайте функцию, которая принимает параметром число от 1 до 7 а затем возвращает день недели' ],
        solutionJS: ` 
            const getWeekDay = (value) => {
                if (typeof value === "number") {
                    if (value >= 1 && value <= 7) {
                        switch (value) {
                            case 1:
                                return "Monday"
                            case 2: 
                                return "Tuesday"
                            case 3:
                                return "Wednesday"
                            case 4: 
                                return "Thursday"
                            case 5: 
                                return "Friday"
                            case 6: 
                                return "Saturday"
                            case 7:
                                return "Sunday"              
                            default:
                                break;
                        }
                    } else {
                        throw new Error("parameter should be in the range of 1 to 7")
                    }
                } else {
                    throw new Error("parameter is not a number type")
                }
            }   
        `,
        solutionTS: `
            const getWeekDay = (value:number) :string | void => {
                if (value >= 1 && value <= 7) {
                    switch (value) {
                        case 1:
                            return "Monday"
                        case 2: 
                            return "Tuesday"
                        case 3:
                            return "Wednesday"
                        case 4: 
                            return "Thursday"
                        case 5: 
                            return "Friday"
                        case 6: 
                            return "Saturday"
                        case 7:
                            return "Sunday"              
                        default:
                            break;
                    }
                } else {
                    throw new Error("Invalid number")
                }
            }
        `,
        example: 'getWeekDay(2)',
    },
    {
        heading: [
            '5 Дан массив с числами  [1, 2, -4, 3, -9, -1, 7]',
            'Создайте из него новый массив, где останутся только положительные числа [1, 2, 3, 7]',
            'Создайте для этого вспомогательную функцию isPositive(-3)',
            'которая параметром будет принимать число и возвращать true',
            'если число положительное, и false — если отрицательное',
        ],
        solutionJS: ` 
            const toPositive = (array) => {
                if (typeof array !== "object") throw new Error("parameter is not array")
            
                const isPositive = (value) => {
                    return value > 0
                }
            
                const result = []
                array.forEach(value => {
                    if(typeof value === "number") {
                        if (isPositive(value)) result.push(value)
                    } else {
                        throw new Error("all parameters should be a Number type")
                    }
                })
                return result
            }        
        `,
        solutionTS: `
            const toPositive = (array:Array<number>) :Array<number> => {
                if (typeof array !== "object") throw new Error("parameter is not array")
            
                const isPositive = (value:number) :boolean => {
                    return value > 0
                }
            
                const result:Array<number> = []
                array.forEach(value => {
                    if(typeof value === "number") {
                        if (isPositive(value)) result.push(value)
                    } else {
                        throw new Error("all parameters should be a Number type")
                    }
                })
                return result
            }
        `,
        example: 'toPositive([1,2,-4,3,-9,-1,7])',
    },
    {
        heading: [
            '6 Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет',
            'Если чётное — функция возвращает`true`, если нечётное — `false`',
        ],
        solutionJS: ` 
            const isEven = (value) => {
                if ((typeof value === "number")) {
                    return value % 2 === 0
                } else {
                    throw new Error("parameter is not a number type")
                }
            }
        `,
        solutionTS: `
            const isEven = (value:number) :boolean => {
                return value % 2 === 0
            }
        `,
        example: 'isEven(5)',
    },
    {
        heading: [
            '7 Сделайте функцию `isEvenArray`, которая параметром принимает число и возвращает массив его делителей',
            'Если чётное — функция возвращает true, если нечётное — false',
        ],
        solutionJS: ` 
            const isEvenArray = (value) => {
                const result = []
            
                if (typeof value !== "number") {
                    throw new Error("parameter is not a number type")
                }
                if (value < 0) {
                    throw new Error("parameter can't be less than 0")
                }
            
                for (let i = 0; i < value + 1; i++) {
                    if (value % i === 0) {
                        result.push(i)
                    }
                }
            
                return result
            }
        `,
        solutionTS: `
            const isEvenArray = (value:number) :Array<number> => {
                const result = []
            
                if (value < 0) {
                    throw new Error("parameter can't be less than 0")
                }
            
                for (let i = 0; i < value + 1; i++) {
                    if (value % i === 0) {
                        result.push(i)
                    }
                }
            
                return result
            }
        `,
        example: 'isEvenArray(10)',
    },
    {
        heading: [
            '8 Дан массив с числами `[1, 2, 3]`.',
            'Создайте функцию`f`, которая принимает массив в качестве параметра',
            'затем последовательно выводит на экран его элементы',
        ],
        solutionJS: ` 
            const f = (array) => {
                if (!Array.isArray(array)) {
                    throw new Error('parameter type should be an array');
                } else if (!array.length) {
                    throw new Error("parameter can't be an empty");
                }
            
                let temp = array
            
                const logger = () => {
                    const splicedArr = temp.splice(0, 1)
                    const value = splicedArr[0]
                
                    console.log(value)
                
                    if (temp.length) {
                        logger()
                    }
                }
            
                logger()
            
                return null
            }
        `,
        solutionTS: `
            const f = (array:Array<number>) :void => {
                if (!array.length) {
                    throw new Error("parameter can't be an empty");
                }
            
                let temp = array
            
                const logger = () => {
                    const splicedArr = temp.splice(0, 1)
                    const value = splicedArr[0]
                
                    console.log(value)
                
                    if (temp.length) {
                        logger()
                    }
                }
            
                logger()
            }
        `,
        example: '',
    },
];
