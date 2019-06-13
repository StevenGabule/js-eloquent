var john = {
    name: 'John Paul',
    yearOfBirth: 1980,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

var john1 = new Person('John', 1809, 'teacher');

