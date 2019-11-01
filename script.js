document.querySelector(".weeklyBudget").innerHTML = `
<div class="weeklybudget"> Number Goes Here
</div> `;


//test 2//
let earned = (document.querySelector("#earnings"));
document.querySelector("#earned").addEventListener("submit", function budgetValue(e) {
    console.log(earned.value);
    document.querySelector(".weeklyBudget").innerHTML = (`$${earned.value}`);
    e.preventDefault();

})