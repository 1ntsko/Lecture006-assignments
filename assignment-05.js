function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};
let rabbit = new Rabbit('Rabbit');

/*
    1) rabbit.sayHi() => Rabbit კონსტრუქტორ ფუნქციას Prototypal Inheritance-თ მინიჭებული აქვს მეთოდი sayHi,
    რომელიც შემდგომში აბრუნებს კონსტრუქტორ ფუნქციის name ფროფერთის (პარამატერად რასაც გადავცემთ).
    let rabbit = new Rabbit('Rabbit'); - შექმნის ახალ ობიექტს კონსტრუქტორ ფუნქციაზე დაყრდნობით, rabbit.sayHi() კი დააბრუნებს პარამეტრად გადაცემულ
    'Rabbit' სტრინგს (name ფროფერთის). 
*/

/* 
    2) Rabbit.prototype.sayHi() => კონსტრუქტორ ფუნქციაზე გამოძახებული sayHi() მეთოდი დააბრუნებს undefined-ს რადგან this.name რომელსაც მეთოდი
    აბრუნებს არანაირი მნიშვნელობა არ აქვს. მნიშვნელობა მიენიჭება მაშინ, როდესაც ახალ ობიქეტს შევქმნით და მას პარამეტრს გადავცემთ,
    მაგ:  let rabbit = new Rabbit('Rabbit'); => this.name = 'Rabbit'
*/

/*
    3) Object.getPrototypeOf(rabbit).sayHi() => undefined.
       Object.getPrototypeOf(rabbit).sayHi => () => { console.log(this.name); }.
*/

/*
    4) rabbit.__proto__.sayHi() => undefined
       rabbit.__proto__.sayHi => () => { console.log(this.name); }
*/
