export const data6 = [
    {
        heading:    [ '1 Вручную создать имплементацию функции `forEach`' ],
        solutionJS: ` 
        const forEach = (array, func) => {
            if (array === undefined || func === undefined) {
                throw new Error("expect two parameters")
            }
            if (!Array.isArray(array)) {
                throw new Error("first parameter must be array")
            }
            if (typeof func !== "function") {
                throw new Error("second parameter must be a function")
            }
        
            for (let i = 0; i < array.length; i++) {
                func(array[i], i, array)
            }
            
        } 
        `,
        solutionTS: `
        const forEach = (array:Array<any>, func:Function) :void => {
            for (let i = 0; i < array.length; i++) {
                func(array[i], i, array)
            }
        }
        `,
        example: '',
    },
    {
        heading:    [ '2 Вручную создать имплементацию функции `filter`' ],
        solutionJS: ` 
        const filter = (array, func) => {
            if (array === undefined || func === undefined) {
                throw new Error("expect two parameters")
            }
            if (!Array.isArray(array)) {
                throw new Error("first parameter must be array")
            }
            if (typeof func !== "function") {
                throw new Error("second parameter must be a function")
            }
            
            const result = []
            for (let i = 0; i < array.length; i++) {
                if(func(array[i], i, array)) {
                    result.push(array[i])
                }
            }
            return result
        }
        `,
        solutionTS: `
        const filter = (array:Array<any>, func:Function) :Array<any> => {
            const result = []
            for (let i = 0; i < array.length; i++) {
                if(func(array[i], i, array)) {
                    result.push(array[i])
                }
            }
            return result
        }
        `,
        example: '',
    },
    {
        heading:    [ '3 Вручную создать имплементацию функции `every`' ],
        solutionJS: ` 
        const every = (array, func) => {
            if (array === undefined || func === undefined) {
                throw new Error("expect two parameters")
            }
            if (!Array.isArray(array)) {
                throw new Error("first parameter must be array")
            }
            if (typeof func !== "function") {
                throw new Error("second parameter must be a function")
            }
            for (let i = 0; i < array.length; i++) {
                if(!func(array[i], i, array)) {
                    return false
                } 
            }
            return true
        }
        `,
        solutionTS: `
        const every = (array:Array<any>, func:Function) :boolean => {
            for (let i = 0; i < array.length; i++) {
                if(!func(array[i], i, array)) {
                    return false
                } 
            }
            return true
        }
        `,
        example: '',
    },
    {
        heading:    [ '4 Вручную создать имплементацию функции `some`' ],
        solutionJS: ` 
        const some = (array, func) => {
            if (array === undefined || func === undefined) {
                throw new Error("expect two parameters")
            }
            if (!Array.isArray(array)) {
                throw new Error("first parameter must be array")
            }
            if (typeof func !== "function") {
                throw new Error("second parameter must be a function")
            }
            for (let i = 0; i < array.length; i++) {
                if(func(array[i], i, array)) {
                    return true
                } 
            }
            return false
        }
        `,
        solutionTS: `
        const some = (array:Array<any>, func:Function) :boolean => {
            for (let i = 0; i < array.length; i++) {
                if(func(array[i], i, array)) {
                    return true
                } 
            }
            return false
        }
        `,
        example: '',
    },
    {
        heading:    [ '5 Вручную создать имплементацию функции `reduce`' ],
        solutionJS: ` 
        const reduce = (array, func, initial) => {
            if (array === undefined || func === undefined) {
                throw new Error("expect minimum two parameters")
            }
            if (!Array.isArray(array)) {
                throw new Error("first parameter must be array")
            }
            if (typeof func !== "function") {
                throw new Error("second parameter must be a function")
            }
            if (initial !== undefined && typeof initial !== "number") {
                throw new Error("initial must be a number")
            }
        
            let result = initial ? initial : 0 
            for (let i = 0; i < array.length; i++) {
                result = func(result,array[i], i, array)
            }
            return result
        }
        `,
        solutionTS: `
        const reduce = (array:Array<any>, func:Function, initial: any) => {
            let result = initial ? initial : 0 
            for (let i = 0; i < array.length; i++) {
                result = func(result,array[i], i, array)
            }
            return result
        }
        
        `,
        example: '',
    },
];
