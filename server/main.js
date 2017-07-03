import {Meteor} from 'meteor/meteor';
import {College} from './../imports/api/college';


Meteor.startup(() => {
 /*   class Person{
        constructor(name = 'Anonymous',age = 18){
            this.name = name;
            this.age = age;
        }
        getGreeting(){
            return  `Welcome ${this.name}`;
        }
        getPerson(){
            return `${this.name} is ${this.age} year(s) old.`;
        }
    }

    class Programmer extends Person{
        constructor(name,age,language){
            super(name,age);
            this.language = language;
        }
        getGreeting(){
            if(this.language){
                return `Welcome ${this.name}.You are a ${this.language} Developer.`;
            }else{
                return super.getGreeting();
            }
        }
    }

    let me = new Programmer('Kaushik');
    console.log(me.getGreeting());

    let karthik = new Programmer('Karthik',21,'JAVA');
    console.log(karthik.getGreeting());
*/


/*Object Spread operator and object property shorthand*/

// var home = {
//     bedroom: 2,
//     bathroom:1.5,
// }
// var built = 2008;

// var newHome = {
//     ...home,
//     bedroom:5,
//     built,
//     flooring:'carpet'
// }

// console.log(newHome);

});