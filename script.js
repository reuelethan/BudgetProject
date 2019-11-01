document.querySelector(".weeklyBudget").innerHTML = `
<div class="weeklybudget"> Number Goes Here
</div> `;

//test 2//
let earned;
let price;
let items;
class Information {
  constructor(item, price) {
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

document
  //form
  .querySelector("#earned")
  .addEventListener("submit", function budgetValue(e) {
    earned = document.querySelector("#earnings");
    document.querySelector(".weeklyBudget").innerHTML = `$${earned.value}`;
    e.preventDefault();
    console.log(earned.value);
  });

//logs prices of items
items = document.querySelector("#Items");
price = document.querySelector("#itemsPrice");
document
  .querySelector("#data")
  .addEventListener("submit", function expenseData(event) {
    event.preventDefault();
    document.querySelector(
      ".expenseLog"
    ).innerHTML = `<div>${price.value}</div>`;
    console.log(price.value);

    function display(expenseListReference) {
      expenseListReference.expenses.forEach(expense => {
        console.log(expense);
      });
    }

    const expenseList = new Expenses();
    expenseList.add("Mitch", "mitch@grandcircus.co");
    expenseList.add("Tyler", "tyler@email.com");
    expenseList.add("John", "john@email.com");
    display(expenseList);
  });
