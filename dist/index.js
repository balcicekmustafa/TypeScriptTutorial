"use strict";
/*
type Person = {
  name: string;
  age: number;
};
const person: Person = {
    name:"John",
    age: 30
}
console.log(person.name);

function greet(name: string): string {
  return `Merhaba, ${name}`;
}
console.log(greet("Dunya"));
*/
/*
let person: {
    name: string; age: number; isMarried: boolean; hobbies: string[]
}
let nameP: string = "Ali";
let age: number = 25;
let isMarried: boolean = true;
let hobbies: string[] = ["Film", "Dizi", "Kitap"];
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;
person = {
    name: nameP,
    age: age,
    isMarried: isMarried,
    hobbies: hobbies
}
console.log(person);
console.log(favoriteColor);
*/
/*
function greet(name: string): string { // buradaki ikinci string dönüş tipi
    return `Merhaba, ${name}`;
}
console.log(greet("Dunya"));

function logMessage(message: string): void {
    console.log(message);
}

function greetUser(name:string, age?: number): string {
    if (age){
        return `Merhaba, ${name}, Yaşın ${age}.`;

    }else {
        return `Merhaba, ${name}.`;
    }
}
console.log("Ali")
console.log(greetUser("Ayşe", 25));

function greetWithDefault(name:string="Ziyaretçi"):string {
    return `Merhaba, ${name}.`;

}
console.log(greetWithDefault());
console.log(greetWithDefault("Ali"));*/
/*
//normal Fonksiyon
function add(a: number, b: number): number {
    return a + b;
}
//arrow fonksiyon
const addArrow=(a:number,b:number):number => a+b;

//Callback Fonksiyon
function processNumbers(a:number,b:number,callback:(result:number)=>void):void {
    let sum = a+b;
    callback(sum);
}
processNumbers(5,10,(result) => {
    console.log("Toplam:",result);
});*/
//interface fonk.
/*
interface MathOperation {
    (a:number,b:number):number;
}
const multiply:MathOperation = (a,b) => a*b;
console.log(multiply(5,10));
*/
/*interface Person {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
}
const user: Person = {
    name: "Ali",
    age: 25,
    isMarried: true,
    hobbies: ["Film", "Dizi", "Kitap"]
}*/
// Interface ile Opsiyonel ve Readonly Kullanımı
/*interface Employee {
    name: string;
    position?: string; // "?" burada opsiyonel özelliği taşır
}
const emp1: Employee={name: "Ali"};
const emp2: Employee={name:"Ayşe", position: "Yazılım Geliştirme"}
interface Car {
 readonly brand: string; // "readonly" değiştirilemez kod çalışırsa hata verir.
 model:string;
}
const myCar: Car = {brand: "BMW", model: "X5"};*/
// GENERİCS İLE ESNEK TİPLER
/*function identity<T>(value:T):T {
    return value;
}
console.log(identity<string>("Dunya"));
console.log(identity<number>(5));
console.log(identity<boolean>(true));
//GENERİCS & INTERFACE
interface Box <T>{
    content: T;
}
const numberBox: Box<number> = {
    content: 5
}
const stringBox: Box<string> = {
    content: "Dunya"
}
console.log(numberBox);
console.log(stringBox);*/
/*
interface User{
    id: number;
    name: string;
    age: number;
   email: string;
}
const user: User = {
    id: 1,
    name: "Ali",
    age: 25,
    email: "ali@gmail.com"
}
console.log(user);

function add(a: number, b: number): number {
    return a + b;
}
function substract(a: number, b: number): number {
    return a - b;
}
function multiply(a: number, b: number): number {
    return a * b;
}
function divide(a: number, b: number): number {
    return a / b;
}
//✅ 5. Generics kullanarak bir fonksiyon yaz (getFirstElement<T>, bir dizinin ilk elemanını döndürsün).
function getFirstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

// String dizisiyle test edelim
const names = ["Ali", "Ayşe", "Mehmet"];
console.log(getFirstElement(names)); // "Ali"

// Sayı dizisiyle test edelim
const numbers = [10, 20, 30];
console.log(getFirstElement(numbers)); // 10

// Boolean dizisiyle test edelim
const flags = [true, false, true];
console.log(getFirstElement(flags)); // true

// Boş dizi ile test
console.log(getFirstElement([])); // undefined
*/
// TEMEL CLASS
/*
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
                }
     greet():void {
        console.log(`Merhaba, benim adım ${this.name} ve ${this.age} yaşındayım.`);
     }
}
const person = new Person("Ali", 25);
person.greet();*/
// ACCESS MODIFIERS (public, private)
/*
class Employee{

    public name: string;
    private salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
    public getSalary(): number {
        return this.salary;
    }
}
const emp1= new Employee("Ali", 1000);
console.log(emp1.name);
console.log(emp1.getSalary());*/
//INHERITANCE && SUPER
/*class Animal{
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    makeSound(): void {
        console.log("Ses çıkarıyor...");

    }
}
class Dog extends Animal{
    breed :string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log("Hav! Hav!");
    }
}
const dog = new Dog("Karabaş", "Pitbull");
console.log(dog.name);
dog.makeSound();*/
// GETTERS && SETTERS
/*
class BankAccount{
    private _balance: number=0;

    get balance(): number {
        return this._balance;
    }
    set balance(amount: number) {
        if (amount < 0) {
            console.log("Negatif miktar girilemez.");
        }else {
            this._balance = amount;
        }
    }
}
const account = new BankAccount();
account.balance=1000;
console.log(account.balance);
account.balance=-500;
*/
// ABSTRACT CLASSES
/*
abstract class Vechile{
    abstract drive(): void;

}
class Car extends Vechile{
    drive() {
        console.log("Araba Sürülüyor...");
    }
}
const myCar = new Car();
myCar.drive();
*/
// STATIC MEMBERS
/*
class MathUtils{
    static PI: number = 3.14;
    static square(x: number): number {
        return x * x;
    }
    static calculateCircleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));
*/
// DEPENDENCY INJECTİON && SOLID Principles
/*
interface ILogger {
    log (message: string): void;
}
class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

class UserService{
    private logger: ILogger;
    constructor(logger:ILogger) {
        this.logger = logger;
    }
    createUser(name: string): void {
        this.logger.log(`User ${name} created`)

    }
}
const logger =new ConsoleLogger();
const userService = new UserService(logger);
userService.createUser("Ali");
*/
/*
abstract class Vechile{
    abstract drive(): void;

}
class Car extends Vechile{
    drive() {
        console.log("Araba Sürülüyor...");
    }
    accelerate(): void {
        console.log("Araba Hızlandı...")
    }
}
const myCar = new Car();
myCar.drive();
myCar.accelerate();

class Person{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Teacher extends Person{
    constructor(name: string) {
        super(name);
    }

}
class Student extends Person{
    constructor(name: string) {
        super(name);
    }
}
*/
/*
class BankAccount{
    private _balance: number=0;
    add(amount: number): void {
        this._balance += amount;
    }
    subtract(amount: number): void {
        this._balance -= amount;
    }
    get balance(): number {
        return this._balance;
    }
    set balance(amount: number) {
        if (amount < 0) {
            console.log("Negatif miktar girilemez.");
        }else {
            this._balance = amount;
        }
    }
}
function createPerson(person: Person): void {}
const account = new BankAccount();
account.balance=1000;
account.add(500);
account.subtract(200);
console.log(account.balance); */
/*
class MathLibrary{
    static add(a: number, b: number): number {
        return a + b;
    }
    static multiply(a: number, b: number): number {
        return a * b;
    }
    static substract(a: number, b: number): number {
        return a - b;
    }
    static divide(a: number, b: number): number {
        return a / b;
    }
    static square(a: number): number {
        return a * a;
    }
    static cube(a: number): number {
        return a * a * a;
    }
    static getPi(): number {
        return Math.PI;
    }
}
console.log(MathLibrary.add(5,10));
console.log(MathLibrary.multiply(5,10));*/
// EXPORT in math_File_for_Export
/*
export function add (a: number, b: number): number {
    return a + b;
}
export function multiplu (a: number, b: number): number {
    return a * b;
}
 */
// IMPORT FROM math_File_for_Export and Run
/*
import { add, multiplu } from "./math_File_for_Export";
console.log(add(5,10));
console.log(multiplu(5,10));
*/
// Export default in logger.ts
/*
export default function logMessage(message: string): void {
    console.log("LOG:", message);
}*/
// Import from logger.ts
/*
import logMessage from "./logger";
logMessage("Error!");
*/
// MOVE TO tsconfig.json for Typscript Build Progress
