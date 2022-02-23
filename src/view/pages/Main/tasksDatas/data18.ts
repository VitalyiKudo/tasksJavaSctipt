export const data18 = [
    {
        heading: [
            '1 Создать класс `DB` который будет имплементировать `CRUD` модель',
            'В качестве структуры данных использовать `Map`',
            'Метод `create`:',
            '-   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку',
            '-   возвращает `id`',
            '-   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`',
            'Метод `read`:',
            '-   принимает идентификатор пользователь',
            '-   если такого пользователя нет возвращать `null`',
            '-   если есть — возвращать объект пользователя с полем `id` внутри объекта',
            '-   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку',
            'Метод `readAll`:',
            '-   возвращает массив пользователей',
            '-   генерировать ошибку если в метод `readAll` передан параметр',
            'Метод `update`:',
            '-   обновляет пользователя',
            '-   принимает 2 обязательных параметра',
            '-   генерирует ошибку если передан несуществующий `id`',
            '-   генерирует ошибку если передан `id` с типом не строка',
            '-   генерирует ошибку если второй параметр не валидный',
            'Метод `delete`:',
            '-   удаляет пользователя',
            '-   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`',
        ],
        solutionJS: ` 
        class DB  {
            constructor() {
                this.users = new Map()
            }
            create(object) {
                if(typeof object !== "object" || Array.isArray(object)) {
                    throw new Error("method expect object")
                }
                const id = new Date().getMilliseconds() 
                this.users.set(id, object)
                object.id = i
                return object.id
            }
            read(id) {
                if(typeof id !== "number") {
                    throw new Error("id must be a number")
                }
                if(!this.users.has(id)) {
                    return null
                }
                return this.users.get(id)
            }
            readAll(arg) {
                if (arg) {
                    throw new Error("method cannot have parameters")
                }
                const usersArray = []
                this.users.forEach(user => usersArray.push(user))
                if(!usersArray.length) {
                    return null
                }
                return usersArray
            }
            udate(id, value) {
                if(typeof id !== "number") {
                    throw new Error("id must be a number")
                }
                if(typeof value !== "object" || Array.isArray(value)) {
                    throw new Error("second parameter must be an object")
                }
                this.users.delete(id) 
                this.users.set(id,value)
                value.id = id
                return this.users.get(id)
            }
            delete(id) {
                if(typeof id !== "number") {
                    throw new Error("id must be a number")
                }
                if(!this.users.has(id)) {
                    throw new Error("user is not found")
                }
                this.users.delete(id)
                return null
            }
        }  
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '2 Улучшить класс `DB` из предыдущей задачи.',
            'Добавить метод `find`, который будет возвращать массив пользователей',
            'которые удовлетворяют условие переданное в качестве параметра',
            'Генерировать ошибку, если query не валидный',
            'Поля `name` и `country` ищут 100% совпадение',
            'Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них',
            'Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса',
        ],
        solutionJS: ` 
        class DBplus {
            constructor() {
            this.users = new Map()
        }
        // old methods
        create(object) {
            if(typeof object !== "object" || Array.isArray(object)) {
                throw new Error("method expect object")
            }
            const id = new Date().getMilliseconds() 
            this.users.set(id, object)
            object.id = id
            return object.id
        }
        read(id) {
            if(typeof id !== "number") {
                throw new Error("id must be a number")
            }
            if(!this.users.has(id)) {
                return null
            }
            return this.users.get(id)
        }
        readAll(arg) {
            if (arg) {
                throw new Error("method cannot have parameters")
            }
            const usersArray = []
            this.users.forEach(user => usersArray.push(user))
            if(!usersArray.length) {
                return null
            }
            return usersArray
        }
        udate(id, value) {
            if(typeof id !== "number") {
                throw new Error("id must be a number")
            }
            if(typeof value !== "object" || Array.isArray(value)) {
                throw new Error("second parameter must be an object")
            }
            this.users.delete(id) 
            this.users.set(id,value)
            value.id = id
            return this.users.get(id)
        }
        delete(id) {
            if(typeof id !== "number") {
                throw new Error("id must be a number")
            }
            if(!this.users.has(id)) {
                throw new Error("user is not found")
            }
            this.users.delete(id)
            return null
        }
        // new method
        find(query) {
            const usersSet = new Set()
            const filtedUsers = []
            const {
                country,
                name,
                age,
                salary,
            } = query
            this.users.forEach(user => {
                if(
                    country === user.country && name === user.name && 
                    ((age.min <= user.age && age.max >= user.age) || (age.min <= user.age) || (age.max >= user.age))  &&
                    ((salary.min <= user.salary && salary.max >= user.salary) || (salary.min <= user.salary) || (salary.max >= user.salary))
                   ) 
                   {
                    usersSet.add(user)
                } 
            })
            usersSet.forEach(user => filtedUsers.push(user))
            return filtedUsers
        }
    }
    
        `,
        solutionTS: '',
        example:    '',
    },
];
