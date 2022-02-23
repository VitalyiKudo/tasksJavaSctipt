export const data11 = [
    {
        heading: [
            '1 Создайте функцию createNumberGenerator(), которая вернёт ещё одну функцию',
            'каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (не включая само число 100)',
            '- Числа не должны повторяться',
            '- Задачу нужно решить с помощью замыкания',
        ],
        solutionJS: ` 
        const createNumberGenerator = () => {
            const uniq = []
            return function finalFunc() {
                const number =  Math.floor(Math.random() * 99)
                if (!uniq.includes(number)) {
                    uniq.push(number)
                    return number
                } else {
                    return finalFunc()
                }
            }
        }   
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '2 Создайте функцию createFibonacciGenerator() которая вернёт ещё одну функцию',
            'каждый вызов которой будет возвращать число из последовательности Фибоначчи',
            '- Задачу нужно решить с помощью замыкания',
        ],
        solutionJS: ` 
        createFibonacciGenerator = ( () => {
            let arr = [0, 1];
        
            return function() {
                let num = arr[arr.length - 1]
                let len = arr.length
                arr.push(arr[len - 1] + arr[len - 2])
                return num 
            }
        })(); 
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '3 Улучшите функцию createFibonacciGenerator() из предыдущего примера.',
            'Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода',
            '- print — возвращает число из последовательности Фибоначчи',
            '- reset — обнуляет последовательность и ничего не возвращает',
        ],
        solutionJS: ` 
        const createFibonacciGeneratorr = {
            arr: [0,1],
            get print() {
                let num = this.arr[this.arr.length - 1]
                let len = this.arr.length
                this.arr.push(this.arr[len - 1] + this.arr[len - 2])
                return num
            }, 
            get reset() {
                this.arr = [0,1]
                return null
            }
        } 
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '4 Напишите функцию createLogger, которая возвращает объект с двумя методами: call и print',
            'Метод call обладает одним обязательным параметром с типом function',
            'Вызов метода call вызывает функцию, переданную методу call в качестве первого аргумента',
            'Все остальные аргументы метода call, кроме первого (который функция)',
            'передаются функции из его первого аргумента в качестве аргументов',
            'Результат каждого вызова функции из первого аргумента метода call нужно сохранять',
            'Вызовы должны сохранятся в массиве',
            '                                                                                     ',
            'Каждый вызов должен быть объектом с тремя обязательными свойствами',
            '- name — это название функции',
            '- in — хранит массив входящих параметров',
            '- out — хранит то, что функция возвращает',
            '                                                                                     ',
            'Метод print возвращает массив с историей вызовов функций из первого аргумента метода `call`',
            '- Если метод call кроме коллбека в первом аргументе не принимает больше ничего, то в свойство in нужно записать пустой массив',
            '- Если функция ничего не возвращает то в out записывается undefined',
        ],
        solutionJS: ` 
        const createLogger = () => {
            return {
                value: [],
                call(func,...arg) {
                    if (typeof func !== "function") {
                        throw new Error("call argument must be a function")
                    }
                    let result = func(...arg)
                    this.value.push({name: func.name, in: arg, out: result})
                    return result
                },
                print() {
                    return this.value
                }
            }
        }        
        `,
        solutionTS: '',
        example:    '',
    },
];
