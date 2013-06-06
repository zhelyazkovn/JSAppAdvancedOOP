var Person = Class.create({
    init: function (fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    },
    introduce: function () {
        return this.firstName + " " + this.lastName + ", " + this.age;
    }
});

var Student = Class.create({
    init: function (fname, lname, age, grade) {
        this._super = new this._super(arguments);
        this._super.init(fname, lname, age);
        this.grade = grade;
    },
    introduce: function () {
        var intro = this._super.introduce() + ", " + this.grade;
        return intro;
    }
});
Student.inherit(Person);

var Teacher = Class.create({
    init: function (fname, lname, age, specialty) {
        this._super = new this._super(arguments);
        this._super.init(fname, lname, age);
        this.specialty = specialty;
    },
    introduce: function () {
        var intro = this._super.introduce() + ", " + this.specialty;
        return intro;
    }
});
Teacher.inherit(Person);

var SchoolClass = Class.create({
    init: function (className, capacity, students,formTeacher) {
        this.className = className;
        this.cpacity = capacity;
        this.students = students;
        this.formTeacher = formTeacher;
    }
});

var School = Class.create({
    init: function (schoolName, town, classes) {
        this.schoolName = schoolName;
        this.town = town;
        this.classes = classes;
    }
});