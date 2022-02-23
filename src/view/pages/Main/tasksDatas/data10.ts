export const data10 = [
    {
        heading: [
            '1 Напишите имплементацию функции Function.prototype.bind()',
            'Наша собственная функция bind() должна задавать контекст выполнения целевой функции и возвращать новую, привязанную версию целевой функции',
            'Функция bind() должна обладать следующими параметрами',
            'Первый параметр — это функция, контекст выполнения которой мы хотим привязать',
            'Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра',
            'Третий и все остальные параметры — это аргументы для вызова функции из первого параметра',
        ],
        solutionJS: ` 
        const bind = (func, obj, ...arg) => {
            if (typeof func !== "function") {
              throw new Error("first parameter must be a function");
            }
            if (typeof obj !== "object") {
              throw new Error("second parameter must be a object");
            }
            if (Array.isArray(obj)) {
              throw new Error("second parameter cant be a array");
            }
            return () => func.apply(obj, arg);
          };     
        `,
        solutionTS: '',
        example:    `
        function getName(greeting, message) {
            return this.name;
        }
        const oliver = { name: 'Oliver' };
        const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');
        boundedGetName()
        `,
    },
    {
        heading: [
            '2 Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций',
            'При запуске calculate() последовательно запускает коллбек-функции из аргументов',
            'Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция',
            'То есть возвращаемое значение каждой коллбек-функции из цепочки становится доступным из параметра следующей коллбек-функции в цепочке',
            'Первая коллбек-функция не принимает параметров',
            'После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции',
        ],
        solutionJS: ` 
        const calculate = (...func) => {
            if (!func.every((el) => typeof el === "function")) {
              throw new Error("all parameters must be a functions");
            }
            return func.reduce((acc, cur) => {
              if (!cur(acc)) {
                throw new Error("expected value from all functions");
              }
              return cur(acc);
            }, 0);
          };
        `,
        solutionTS: '',
        example:    `
        calculate(
            () => {
                return 7;
            },
            prevResult => {
                return prevResult + 4;
            },
            prevResult => {
                return prevResult * 5;
            },
        );
        
        `,
    },
    {
        heading: [
            '3 Улучшите имплементацию функции calculate() и назовите её calculateAdvanced()',
            'Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её',
            'После отлова ошибки перейдите к выполнению следующего коллбека',
            'Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`',
            'свойство `value` содержит результат вычисления всех функций из цепочки',
            'свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами',
            '- index — индекс коллбека, на котором ошибка была возбуждена',
            '- name — имя ошибки',
            '- message — сообщение ошибки',
            'Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт',
            'Поэтому, для продолжения цепочки выполнения необходимо брать результат последней успешно выполненной функции-коллбека',
        ],
        solutionJS: ` 
        const calculateAdvanced = (...func) => {
            if(!func.every(fc => typeof fc === "function")) {
              throw new Error("all parameters must be a functions")
            }
          
            const result = {
              value: 0,
              errors: [],
            };
          
            const final = []
            result.value = func.reduce((acc, cur, index) => {
              try {
                  if (typeof cur(acc) === "number") {
                      final.push(cur)
                  }
                  if (typeof cur(acc) === "undefined") {
                      result.errors.push({message: "callback at index" + index + "did not return any value", name: "Error", index: index})
                  }
              } catch (error) {
                result.errors.push({message: error.message, name: error.name, index: index});
              }
            }, 0);
            result.value = final.reduce((acc, cur, index) => {
                return cur(acc);
            },0)
          
            return result;
          };
        `,
        solutionTS: '',
        example:    `
        calculateAdvanced(
            () => {},
            () => {
                return 7;
            },
            () => {},
            prevResult => {
                return prevResult + 4;
            },
            () => {
                throw new RangeError('Range is too big.');
            },
            prevResult => {
                return prevResult + 1;
            },
            () => {
                throw new ReferenceError('ID is not defined.');
            },
            prevResult => {
                return prevResult * 5;
            },
        );
        `,
    },
    {
        heading: [
            '4 Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций',
            'При запуске compose() последовательно запускает коллбек-функции из аргументов',
            'Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА',
            'Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция',
            'То есть возвращаемое значение каждой коллбек-функции из цепочки становится доступным из параметра следующей коллбек-функции в цепочке.',
            'Функция compose() возвращает ещё одну функцию с одним параметром',
            'Значение, переданное этой функции в качестве аргумента должно стать параметром первой коллбек-функции в цепочке выполнения функции compose()',
            'Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`',
        ],
        solutionJS: ` 
        const compose = (...func) => {
            if(!func.every(fc => typeof fc === "function")) {
              throw new Error("all parameters must be a functions")
            }
          
            return function(startValue) {
              if (!startValue) {
                startValue = 0
              }
              return func.reduceRight((acc, cur) => {
                if(!cur(acc)) {
                  throw new Error("expect value from all functions")
                }
                return cur(acc)
              },startValue)
            }
          }  
        `,
        solutionTS: '',
        example:    `
        compose(
            prevResult => prevResult + 'o',
            prevResult => prevResult + 'l',
            prevResult => prevResult + 'l',
            prevResult => prevResult + 'e',
        )('h');
        `,
    },
];
