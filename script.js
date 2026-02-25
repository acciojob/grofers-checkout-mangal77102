function getTotal() {

    // Get all price elements
    let prices = document.querySelectorAll(".prices");

    let total = 0;

    // Loop and calculate total
    prices.forEach(function(price) {
        total += parseFloat(price.textContent);
    });

    // Create new row
    let table = document.getElementById("myTable");
    let newRow = document.createElement("tr");

    let newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.textContent = "Total Price: " + total;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
}


