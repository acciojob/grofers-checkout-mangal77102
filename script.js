function getTotal() {

    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(function(price) {
        total += parseFloat(price.textContent);
    });

    let table = document.getElementById("myTable");

    // Remove old total row if exists
    let oldTotal = document.getElementById("ans");
    if (oldTotal) {
        oldTotal.parentElement.remove();
    }

    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    newCell.setAttribute("colspan", "2");
    newCell.setAttribute("id", "ans");  // VERY IMPORTANT
    newCell.textContent = total;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
}

