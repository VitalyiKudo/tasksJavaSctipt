export const data4 = [
    {
        heading: [
            '1 Создайте объект `person` у которого будет одно свойство `salary`    ',
            'При чтении этого свойства должна возвращаться строка с текстом.',
            'Если до конца месяца осталось больше чем 20 дней — возвращается строка`good salary`, а если нет — `bad salary`',
        ],
        solutionJS: ` 
            const person1 = {
                get salary() {
                      const date = new Date()
                      const yearNow = date.getFullYear();
                      const monthNow = date.getMonth() + 1;
                      const dayNow = date.getDate();
                      const finalDate = new Date(yearNow,monthNow,0).getDate();
                
                      return finalDate - dayNow > 20 ? "good salary" : "bad salary" 
                } 
            }
        `,
        solutionTS: `
            const person:object = {
                get salary():string {
                      const date = new Date()
                      const yearNow = date.getFullYear();
                      const monthNow = date.getMonth() + 1;
                      const dayNow = date.getDate();
                      const finalDate = new Date(yearNow,monthNow,0).getDate();
                
                      return finalDate - dayNow > 20 ? "good salary" : "bad salary" 
                } 
            }
        `,
        example: '',
    },
    {
        heading: [
            '2 Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`',
            'Свойство `rate` можно читать и записывать, но нельзя удалять',
            'также это свойство не должно участвовать в перечислении всех свойств при переборе',
            'Свойство `salary` можно читать, но нельзя менять',
            'При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце',
            'Если rate не установлен — возвращаем число 0',
        ],
        solutionJS: ` 
            person2 = Object.create(Object.prototype, {
                rate: {
                  value: null,
                  writable: true,
                },
                salary : {    
                  enumerable: true,
                  configurable: false,
                  get: ()=> {
                    const date = new Date()
                    if(!person2.rate) {
                      return 0
                    }
                    return person2.rate * date.getDay()
                  }
                },
              })
        `,
        solutionTS: `
            interface person {
                rate: number | null
            }  
            const person2:person = Object.create(Object.prototype, {
              rate: {
                value: null,
                writable: true,
              },
              salary : {    
                enumerable: true,
                configurable: false,
                get: ()=> {
                  const date = new Date()
                  if(!person2.rate) {
                    return 0
                  }
                  return person2.rate * date.getDay()
                }
              },
            })
        `,
        example: '',
    },
];
