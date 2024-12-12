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

// const showData = document.querySelector(".btn1");
// const showUserData = document.querySelector(".client-data-used");
// const closeBtn = document.querySelector('.btn1-close')

// const user1 = {
//   diskUsageCost: 47500,
//   bandwidthUsageCost: 33333,
//   serviceCost: 30000,
// };
// const user2 = {
//   diskUsage: 31666,
//   bandwidthUsage: 240000,
//   serviceCost: 30000,
// };
// const user3 = {
//   diskUsage: 23750,
//   bandwidthUsage: 16666,
//   serviceCost: 30000,
// };

// const monthlyUserData =
//   user1.diskUsageCost + user1.bandwidthUsageCost + user1.serviceCost;
// const yearlyUserData = monthlyUserData * 12;
// const totalUser1Amount = monthlyUserData + yearlyUserData;

// showData.addEventListener("click", function () {

//   const show1 = showUserData.innerHTML = `
//     <div class="used-data-continer">
//     <h4 class="haeding4">User Data:</h4>
//     <div class="record-storage">
//     <div class="storage">
//     <b>User Disk Usage</b><br><br>
//     <span>-29,656.GB / 30,000.GB</span> <br><br>
//     <span>Used Cost: ₹${user1.diskUsageCost}</span>
//     </div>
//     <div class="bandwidth">
//     <b>User Bandwidth Usage</b><br><br>
//     <span>-44.56 M / 20000 M</span> <br> <br>
//     <span>Used Cost: ₹${user1.bandwidthUsageCost}</span>
//     </div>
//     </div>
//     <div class="user-cost">
//     <b> User Month Costs: <span> ₹${monthlyUserData} </span> </b><br>
//     <b> User Yearly Costs: <span> ₹${yearlyUserData}  </span> </b><br><br>
//     <b> User Total Costs: <span> ₹${totalUser1Amount} </span> </b>
//     </div>
//     </div>
//     `;

//     // const returnAgain =  document.createElement('showUserData')
//     // const btnAgain = document.querySelector(".btn1")
//     // returnAgain.appendChild(returnAgain)
    
//   showUserData.style.display="block";


  
// // showData.addEventListener('click', function(){
// //   showUserData
// // })
// });

// // closeBtn.addEventListener('click', function(){
// //   showUserData.remove();
// // })

// closeBtn.addEventListener('click', function(){
//   showUserData.style.display="none"
// })









// // User 2

// const showData2 = document.querySelector(".btn2");
// const showUserData2 = document.querySelector(".client-data-used2");
// const closeBtn2 = document.querySelector('.btn2-close')
// const monthlyUserData2 =
//   user2.diskUsage + user2.bandwidthUsage + user2.serviceCost;
// const yearlyUserData2 = monthlyUserData2 * 12;
// const totalUser1Amount2 = monthlyUserData2 + yearlyUserData2;

// showData2.addEventListener("click", function () {
//   showUserData2.innerHTML = `
//     <div class="used-data-continer">
//     <h4 class="haeding4">User Data:</h4>
//     <div class="record-storage">
//     <div class="storage">
//     <b>User Disk Usage</b><br><br>
//     <span>-29,656.GB / 30,000.GB</span> <br><br>
//     <span>Used Cost: ₹${user2.diskUsage}</span>
//     </div>
//     <div class="bandwidth">
//     <b>User Bandwidth Usage</b><br><br>
//     <span>-44.56 M / 20000 M</span> <br> <br>
//     <span>Used Cost: ₹${user2.bandwidthUsage}</span>
//     </div>
//     </div>
//     <div class="user-cost">
//     <b> User Month Costs: <span> ₹${monthlyUserData2} </span> </b><br>
//     <b> User Yearly Costs: <span> ₹${yearlyUserData2}  </span> </b><br><br>
//     <b> User Total Costs: <span> ₹${totalUser1Amount2} </span> </b>
//     </div>
//     </div>
//     `;

//     showUserData2.style.display="block"

// });


// closeBtn2.addEventListener('click', function(){
//   showUserData2.style.display="none"
// })


// // User 3

// const showData3 = document.querySelector(".btn3");
// const showUserData3 = document.querySelector(".client-data-used3");
// const closeBtn3 = document.querySelector('.btn3-close')
// const monthlyUserData3 =
//   user3.serviceCost + user3.bandwidthUsage + user3.diskUsage;
// const yearlyUserData3 = monthlyUserData3 * 12;
// const totalUser1Amount3 = monthlyUserData3 + yearlyUserData3;

// showData3.addEventListener("click", function () {



//   showUserData3.innerHTML = `
//     <div class="used-data-continer">
//     <h4 class="haeding4">User Data:</h4>
//     <div class="record-storage">
//     <div class="storage">
//     <b>User Disk Usage</b><br><br>
//     <span>-29,656.GB / 30,000.GB</span> <br><br>
//     <span>Used Cost: ₹${user3.diskUsage}</span>
//     </div>
//     <div class="bandwidth">
//     <b>User Bandwidth Usage</b><br><br>
//     <span>-44.56 M / 20000 M</span> <br> <br>
//     <span>Used Cost: ₹${user3.bandwidthUsage}</span>
//     </div>
//     </div>
//     <div class="user-cost">
//     <b> User Month Costs: <span> ₹${monthlyUserData3} </span> </b><br>
//     <b> User Yearly Costs: <span> ₹${yearlyUserData3}  </span> </b><br><br>
//     <b> User Total Costs: <span> ₹${totalUser1Amount3} </span> </b>
//     </div>
//     </div>
//     `;

//     showUserData3.style.display="block"

// });

// closeBtn3.addEventListener('click', function(){
//   showUserData3.style.display = "none"
// })



// const userName = document.getElementById('userName');
// const itemPrice = document.getElementById('itemPrice');
// const description = document.getElementById('userDescriptio');
// const submit = document.getElementById('userDataSubmit');



// submit.addEventListener('click', function(){
//   const disckSpace = prompt(`Enter Your Disck Space in form of GB: `);
//   const bandWidth = prompt('Enter Your Brandwidth in form of GB:');
//   let currency = 30000;
//   alert(`Service Cost is Constant: ₹${currency}`)

// })

