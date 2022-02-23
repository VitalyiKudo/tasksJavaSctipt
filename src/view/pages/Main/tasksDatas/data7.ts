export const data7 = [
    {
        heading: [
            '1 Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента и возвращать новый массив',
            'Этот новый массив должен содержать исключительно длины строк, которые были в переданном массиве',
            'Если строк в переданном массиве не было — нужно вернуть пустой массив',
        ],
        solutionJS: ` 
        const inspect = (array) => {
            if (!array) {
                throw new Error("expect parameter")
            }
            if (!Array.isArray(array)) {
                throw new Error("parameter must be array")
            }
        
            return  array.filter(el => typeof el === "string").map(el => el.length)
        }
        `,
        solutionTS: `
        const inspect = (value:Array<any>) => {
            return  value.filter(el => typeof el === "string").map(el => el.length)
        }
        `,
        example: 'inspect(["hello","sun",5,10])',
    },
    {
        heading: [
            '2 Напишите функцию `collect`, которая будет принимать массив в качестве аргумента, и возвращать число',
            'Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым',
            'Число, которое возвращает функция должно быть суммой всех элементов на всех уровнях всех вложенных массивов',
            'Если при проходе всех уровней не было найдено ни одного числа, то функция должна возвращать число 0',
        ],
        solutionJS: ` 
        const collect = (array) => {
            if (!array) {
                throw new Error("expect parameter")
            }
            if (!Array.isArray(array)) {
                throw new Error("parameter must be array")
            }
        
            const flattedArray = array.flat(Infinity)
        
            if (flattedArray.length === 0) {
                return 0
            }
        
            return flattedArray.reduce(function(prev,current) {
                if (typeof prev !== "number" || typeof current !== "number") {
                    throw new Error("expect only numbers")
                } else {
                    return prev + current
                }
            })
        }
        `,
        solutionTS: `
        const collect = (value:Array<any>) => {
            const flattedArray = value.flat(Infinity)
        
            if (flattedArray.length === 0) {
                return 0
            }
        
            return flattedArray.reduce(function(prev:number,current:number) :number {
                if (typeof prev !== "number" || typeof current !== "number") {
                    throw new Error("expect only numbers")
                } else {
                    return prev + current
                }
            })
        }
        `,
        example: 'collect([[2],3,[4],[[[5]]]])',
    },
    {
        heading: [
            '1 3 Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.',
            'Первым параметром функция принимает значение, которым заполнять массив',
            'А вторым — количество элементов, которое должно быть в массиве',
        ],
        solutionJS: ` 
        const createArray = (value, number) => {
            if (value === undefined || number === undefined) {
                throw new Error("expect two parameters")
            }
            if (typeof value !== "number" && typeof value !== "string" && typeof value !== "object" && !Array.isArray(value)) {
                throw new Error("not supported parameter type")
            }
            if(typeof number !== "number") {
                throw new Error("second parameter must be a number")
            }
        
            const result = new Array(number).fill(value)
        
            return result
        }    
        `,
        solutionTS: `
        const createArray = (value: number | string | Array<any> | object, number:number) : Array<any> => {
            const result = new Array(number).fill(value)
        
            return result
        }  
        `,
        example: 'createArray("a",5)',
    },
];
