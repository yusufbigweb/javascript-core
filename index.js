//script
const btnAddName = document.querySelector("#addName");
const btnAddSure = document.querySelector("#addSure");
const tableShow = document.getElementById("tableList");

btnAddName.addEventListener("click", function () {
  const newRow = document.createElement("tr");
  const userName = prompt("Enter Your Name Only:");

  newRow.innerHTML = `
  
  <td><ul><li>${userName}</li></ul></td>

  `;
  tableShow.appendChild(newRow);

  btnAddSure.addEventListener("click", () => {
    const newRow = document.createElement("tr");
    const userSure = prompt("Enter Your Sure Name Only:");

    newRow.innerHTML = `
    
    <td><ul><li>${userSure}</li></ul></td>
  
    `;
    tableShow.appendChild(newRow);
  });
});
