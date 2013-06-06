var Person = {
    init: function (fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
};

var Student = Person.extend({
    init: function (fname, lname, age, grade) {
        Person.init.apply(this, arguments);
        this.grade = grade;
    },
    introduce: function () {
        var intro = "";
        for (var prop in this) {
            if (!(this[prop] instanceof Function)) {
                intro += prop + ":" + this[prop] + ", ";
            }
        }
        return intro;
    }
});

var Teacher = Person.extend({
    init: function (fname, lname, age, specialty) {
        Person.init.apply(this, arguments);
        this.specialty = specialty;
    },
    introduce: function () {
        var intro = "";
        for (var prop in this) {
            if (!(this[prop] instanceof Function)) {
                intro += prop + ":" + this[prop] + ", ";
            }
        }
        return intro;
    }
});

var Class = {
    init: function(className, capacity, students, formTeacher){
        this.className = className;
        this.capacity = capacity;
        this.students = students;
        this.formTeacher = formTeacher;
    }
};

var School = {
    init: function (schoolName, town, classes) {
        this.schoolName = schoolName;
        this.town = town;
        this.classes = classes;
    }
};