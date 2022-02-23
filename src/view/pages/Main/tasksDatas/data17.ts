export const data17 = [
    {
        heading: [
            'Напишите функцию postpone, которая выводит в консоль счетчик с задержкой',
            'Функция принимает 3 параметра:',
            '- Первый параметр `start` — число, c которого начнется отсчет',
            '- Второй параметр `end` — верхний порог, до которого будет идти отсчет',
            '- Третий параметр `delay` — это время в `мс` между выводами',
            'Условия:',
            '- Функция принимает три параметра;',
            '- Функция содержит валидацию входных параметров на тип number',
            '- Обязательно использование таймера setTimeout и цикла for',
            '- Функция должна уметь считать в обе стороны',
        ],
        solutionJS: ` 
        const postpone = (start, end, deley) => {
            return (function iterate(start) {
              setTimeout(function () {
                console.log(start);
                if (start < end) {
                  iterate(start + 1);
                }
                if (start > end) {
                  iterate(start - 1);
                }
              }, deley);
            })(start);
          }; 
        `,
        solutionTS: '',
        example:    '',
    },
];
