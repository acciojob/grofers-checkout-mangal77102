const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // 1️⃣ Get all price elements
  const priceElements = document.querySelectorAll(".prices");

  let total = 0;

  // 2️⃣ Add all prices
  priceElements.forEach((price) => {
    total += Number(price.textContent);
  });

  // 3️⃣ Create new row
  const table = document.querySelector("table");

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;   // span across columns
  newCell.textContent = "Total Price: " + total;

  newRow.appendChild(newCell);

  // 4️⃣ Append row to table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


