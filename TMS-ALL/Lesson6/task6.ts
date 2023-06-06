/*Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.  */

type myUser = {
    userLogin: string,
    userPassword: string
}
function signUp(login: string, pass: string): myUser {
    const signUpUser: myUser ={
        userLogin: login,
        userPassword: pass
    }
    return signUpUser;
}
function validate(login: string, pass: string, signUpUser: myUser): void{
    if(login === signUpUser.userLogin && signUpUser.userPassword === pass){
        console.log ('Добро пожаловать');
    } else {
        console.log ('Неверные данные');
    }
}  
const newUser = signUp('Yehor','1234567890');
console.log(newUser);
validate('Yehor','1234567890', newUser);

