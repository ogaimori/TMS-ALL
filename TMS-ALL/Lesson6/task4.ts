/*

Вывести в консоль слово красный и синий*/

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
    console.log(colors["ru pum pu ru rum"].blue)
    console.log(colors["ru pum pu ru rum"].red)