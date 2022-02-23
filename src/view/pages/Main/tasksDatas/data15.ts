export const data15 = [
    {
        heading: [
            '1 Добавьте всем функциям в прототип метод delay(ms)',
            'При вызове этого метода, функция, на которой этот метод вызывают,',
            'должна быть вызвана отложено, через указанное количество миллисекунд',
            'Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,',
            'то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms)',
            'func.delay(1000)(`value 1`, `value 2`)',
            'В примере выше аргументы `value 1` и `value 2` станут первым и вторым аргументами для функции func',
            'Условия:',
            '- количество миллисекунд указывается в первом аргументе метода delay(ms)',
            '- возвращаемая методом delay функция должна быть необязательной',
            '- в реализации метода delay(ms) обязательно использовать setTimeout',
        ],
        solutionJS: ` 
        Function.prototype.deley = function (ms) {
            const func = this
            if(!ms) {
                return null
            }
            if (func.length === 0) {
                setTimeout(func, ms)
            } else {      
                return function time(...values) {
                    setTimeout(function(){return func(...values)},ms)
                }
            }
        } 
        `,
        solutionTS: '',
        example:    '',
    },
    {
        heading: [
            '2 Дан класс Developer',
            'У класса два свойства:',
            '- completedTasks — массив с выполненными задачами',
            '- completeTask — метод для пополнения массива с выполненными задачами новой выполненной задачей',
            'При создании двух экземпляров класса Developer, если выполнил задачу – почему-то эта-же задача',
            'считается выполненной и вторым вторым разработчиком',
            'Исправьте этот пример так, чтобы при выполнении задачи одним разработчиком',
            'массив completedTasks второго разработчика никак не менялся',
            'Нужно, чтобы у каждого разработчика был свой независимый массив completedTasks',
            'Условия:',
            '- Решить задачу в стиле прототипного наследования JavaScript',
        ],
        solutionJS: ` 
        function Developer() {
            this.completedTasks = []
        }
        Developer.prototype.completeTask = function(task) {
            this.completedTasks.push(task);
        };
        `,
        solutionTS: '',
        example:    '',
    },
];
