document.querySelector(".weeklyBudget").innerHTML = `
<div class="weeklybudget"> Number Goes Here
</div> `;

//test 2//
let total;
let earned;
let price;
let items;
class Information {
  constructor(price, item) {
    this.item = item;
    this.price = price;
  }
}

class Expenses {
  constructor() {
    this.expenses = [];
  }
  add(item, price) {
    this.expenses = [...this.expenses, new Information(item, price)];
  }
}
const expenseList = new Expenses();
document
  //form
  .querySelector("#earned")
  .addEventListener("submit", function budgetValue(e) {
    e.preventDefault();
    earned = document.querySelector("#earnings");
    document.querySelector(".weeklyBudget").innerHTML = `$${earned.value}`;

    console.log(earned.value);
  });

//logs prices of items
items = document.querySelector(".items");
price = document.querySelector(".itemsPrice");
document
  .querySelector("#data")
  .addEventListener("submit", function expenseData(event) {
    event.preventDefault();
    document.querySelector(
      ".expenseLog"
    ).innerHTML = `<div> ${items.value} ${price.value}</div>`;
    console.log(price.value);

    function display(expenseListReference) {
      expenseListReference.expenses.forEach(expense => {
        console.log(expense);
      });
    }

    // expenseList.add("Mitch", 100);
    // expenseList.add("Tyler", 40);
    // expenseList.add("John", 30);
    display(expenseList);
  });

function display() {
  console.log(expenseList);
  document.querySelector(".expenseLog").innerHTML = "";
  expenseList.expenses.forEach((expense, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("expenseLogItem");
    newEntry.innerHTML = `
      <p>Item: ${expense.item}</p>
      <p>Price: ${expense.price}</p>`;
    total = earned.value -= expense.price;
    document.querySelector(".expenseLog").appendChild(newEntry);
    document.querySelector(".balanceLog").innerHTML = `<div>$${total}</div>`;
  });
}
display();
const form = document.querySelector("#data");
form.addEventListener("submit", addItem);
function addItem(event) {
  event.preventDefault();
  const itemData = new FormData(form);
  expenseList.add(itemData.get("Price"), itemData.get("Item"));
  form.reset();
  display();
}
