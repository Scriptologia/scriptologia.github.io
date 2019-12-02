/**
 *
 * @param {string} name
 * @param {number}age
 * @constructor
 */
/*function Person(name,age) {
    this.name = name
    this.age = age

    this.sayHellow = () => {
        console.log(`Меня зовут ${this.name}. Возраст ${this.age}`)
    }
}
Person.prototype.car="ggg"
let person = new Person('Вася',40)

person.sayHellow()
var g = [];
console.log (g);*/

/*
function Person(name,familia) {
    // let self = this;
   let name1 = name;
   this.familia = familia;
   this.FN= function () {return FullName(a=this)

   };
   function FullName (a) {
       return name1+' ' +a.familia
   }
   }
   /!*Person.prototype.FullName=function () {
    return this.name+' ' +this.familia
   }*!/
let Per = new Person('Алексей','Лебедев');
*/

// let Count = i => (i > 0) ? i + Count(i - 1) : i;


// console.log(Count(5));
/*let objc = Object.create({},
    {
        name: {
            value: 'alex',
            enumerable: true,
            configurable: true,
            writable: true
        },
        age: {
            get() {
                return console.info('Это гет"')
            },
            set(val) {
                document.body.style.background = val;
                enumerable: true
            }
        }
    })
objc.__proto__.toString = function() {
    return "Имя " + this.name
    }*/
/*function Ar (args){
    return console.log ( ...args,args)
}*/
/*let famField='family'
let Ar = {
    name: 'alex',
    country: 'Russia',
    [famField]: 'Lebedev',
    concat: function () {
        return `Имя- ${this.name} Страна-${this.country}`
    },
    tim: {
        get () {console.log(this.name)}
    }
    }*/
// let {name,...args}=Ar
// let cop ={...Arr,name:'Vasya',pole:'123'}
/*class Blok {
    static sum () {
        return console.log('Static')
    }
}
Blok.sum()*/
/*
var Ar = []
for (var i = 1; i < 5; i++) {//console.log (i);
    function bbb (j){Ar.push(function() {
        console.log(j)
    })
     }
bbb(i)}
Ar[3]()*/
/*Object.prototype.sayHellow=function () {
    console.log('Hellow')
}
let str = 'stroka'*/
/*const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
            console.log('Timeout 1000ms');
            let vari = function () {
                return '2+2=' + (2 + 2)
            }
            // resolve(vari)
            reject(vari)
        }
        , 1000);
}).then(dat => console.log(dat()))
    .catch(dat => console.error('Ошибка:',dat()))
    .finally(()=>console.log('Конец:'))*/

/*
let aaa = {
    name: 'vasya',
    age: 45
}
console.log(aaa)*/
/*
const animal = {
    name:'vasya',
     age: 25
   }
let op = new Proxy (animal, {
    has (target,prop) {
        return ['age'].includes(prop)
    }
})*/
const requestURL = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()
xhr.open('GET',requestURL)
xhr.responseType = 'json'
xhr.onload = ()=> {
    console.log(xhr.response)
    localStorage.setItem('card',JSON.stringify(xhr.response))
}
xhr.send()

