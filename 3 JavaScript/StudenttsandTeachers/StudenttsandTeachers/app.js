'use strict';

var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
]

/*Create a program that outputs:
Michael Jordan
John Rosales
Mark Guillen
KB Tonel*/
for (var i = 0; i < students.length; i++) {
    console.log(students[i].first_name + " " + students[i].last_name);
}

//given:
var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

/*
Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
*/
console.log(" ");
console.log("Students");
for (var i = 0; i < users.Students.length; i++) {
    var str = users.Students[i].first_name + users.Students[i].last_name;    
    console.log(i + 1 + " - " + users.Students[i].first_name + " " + users.Students[i].last_name + ' - ' + str.length);
}
console.log(" ");
console.log("Instructors");
for (var i = 0; i < users.Instructors.length; i++) {
    var str = users.Instructors[i].first_name + users.Instructors[i].last_name;
    console.log(i + 1  + " - " + users.Instructors[i].first_name + " " + users.Instructors[i].last_name + ' - ' + str.length);
}
