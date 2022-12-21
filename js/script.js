'use strict';

// allusers
const allUsers = [];

// users
function User(name, email, password) {

    this.name = name;
    this.email = email;
    this.password = password;
    allUsers.push(this)
}

// data
let user1 = new User("abdullah", "a@gmail.com", 21312);
let user2 = new User("bdullah", "b@gmail.com", 21312);
let user3 = new User("dullah", "c@gmail.com", 21312);
let user4 = new User("ullah", "d@gmail.com", 21312);

//get user info
let userForm = document.getElementById('userForm');
userForm.addEventListener("submit", addNewUser);

// add new user function
function addNewUser(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    
    check(name, email, password)

    

}

// check if it already subscribes

function check(name, email, password){

    for(let i = 0 ; i < allUsers.length ; i++){

        if(allUsers[i].email === email){
            break;
        }
        else if (i === allUsers.length-1 && allUsers[i].email !== email){
            new User(name, email, password);
        }
    }
}





