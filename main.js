//  --- What I Learn

// Target month to leran this core javascript

//Varible
//Data Types
//Convertion Data
//Control Flow
//Function
//Array
//Object
//DOM - Document Object Modal JavaScript
//Work JavaScript Behind
//Work Call Stack
//async and sync in javascript work
//API
//OOP
//Promise, try, catch, error

// --- What I Return Learn this Topics are:

// ====== Basic

//  1. String Manipulation - (length, slice(), substring(), replace(), etc.)
//  2. Array Methods Like - (push(), pop(), shift(), unshift(), map(), filter(), etc.)

// ====== Control Flow

//  1. if else, else if, switch
//  2. Loop - (for, while, do...while)
//  3. break and continue statements

// ====== Function

// 1. Higher-order Functions (functions as arguments or returned from another function)
// 2. Closures and Scoping

// ===== Objects

// 1. Object Creation (Object Literals, new Object())
// 2. Accessing and Modifying Object Properties
// 3. this keyword
// 4. Object Methods
// 5. Object Destructuring
// 6. JSON (parsing and stringifying)

// ===== DOM Manipulation

//  1. Event Listeners (click, input, keypress)
//  2. Creating and Appending Elements (createElement(), appendChild())

// ===== DOM Manipulation


//this are simple interviwe quetions
// console.log("A" - 1);
// console.log("yusuf" + "100");
// console.log('2' + 2 + '2');
// console.log('2' + 2 - '2');


//Concept of Object of Object



// const a = {}

// const b = {
//     name: "yusuf"
// }

// const c = {
//     name: 'arman'
// }

// console.log(a[c])


// a[c] = {
//     name: "Rahul"
// }


// a[b] = {
//     name: "Rehan"
// }







// const y = "ysuf"
// const z = false

// console.log(y == z)//fal
// console.log(y === z)//tr


const showData = document.querySelector('.btn1');
const showUserData = document.querySelector('.client-data-used');

const user1 = {
    diskUsageCost: 47500,
    bandwidthUsageCost: 33333,
    serviceCost: 30000
}
const user2 = {
    diskUsage: 31666,
    bandwidthUsage: 240000,
    serviceCost: 30000
}
const user3 = {
    diskUsage: 23750,
    bandwidthUsage: 16666,
    serviceCost: 30000
}



console.log(user1.diskUsageCost + user1.bandwidthUsageCost + user1.serviceCost)


showData.addEventListener('click', function(){
    showUserData.innerHTML = `

    <div class="used-data-continer">
    
    <h4>User Data:</h4>

    <div class="record-storage">

    <div class="storage">
    <b>User Disk Usage</b><br><br>
    <span>-12656.GB / 38000.GB</span> <br><br>
    <span>Used Cost: </span>
    </div>
    <div class="bandwidth">
    <b>User Bandwidth Usage</b><br><br>
    <span>-44.56 M / 200000 M</span> <br> <br>
    <span>Used Cost: </span>
    </div>
    
    </div>


    <div class="user-cost">
    

    <b> User Total Costs:</b>


    </div>



    </div>
    `
})

