// Konstruktor funkcji

// var john = {
//    name: 'john',
//    yearOfBirth: 1990,
//    job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
// };

// Person.prototype.calculateAge = function(){
//    console.log(2016 - this.yearOfBirth)
// };

// Person.prototype.lastName = 'Smith';


// var jane = new Person('Jane', 1990, 'driver');
// var john = new Person('John', 1988, 'teacher');
// var robert = new Person('Robert', 1960, 'retired');

// john.calculateAge();
// jane.calculateAge();
// robert.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(robert.lastName);

//Tworzenie obiektu

var personProto = {
   calculateAge: function() {
      console.log(2018 = this.yearOfBirth);
      
   }
};

var john = Object.create(personProto);








