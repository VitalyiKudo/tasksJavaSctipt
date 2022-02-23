export const data20 = [
    {
        heading: [
            '1. Создайте класс `Customers` который умеет работать с механизмом `for of`',
            'Класс `Customers` содержит метод `add` который принимает объект в качестве параметра',
            'У этого объекта есть обязательное поле `name` и необязательное поле `verified`',
            'У этого объекта есть обязательное поле `name` и необязательное поле `verified`',
        ],
        solutionJS: ` 
        class Customers {
            constructor() {
                this.customersArr = []
            }
        
            add(obj) {
                if (obj.verified) {
                    this.customersArr.push(obj)
                }
            }
        
            [Symbol.iterator]() {
                const limit = this.customersArr.length
                const $this = this.customersArr
            
                let counter = 0

                return {
                    next() {
                        if (counter < limit) {
                            return {
                                value: $this[counter++],
                                done: false
                            }
                        }
                        return {
                            done: true
                        }
                    }
                }
            }

        } 
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '2. Улучшите класс `Customers` добавив функцию генератор',
            'Класс `Customers` после этого должен работать **идентично** предыдущей задаче',
        ],
        solutionJS: ` 
        class Customers {
            constructor() {
                this.customers = []
            }
            add(object) {
                this.customers.push(object)
            }
            *[Symbol.iterator]() {
                const verifiedCutomers = this.customers.filter(customer => customer.verified)
                for (const item of verifiedCutomers) {
                    yield item
                }
            }
        }
        `,
        solutionTS: '',
        example:    '',
    },
];
