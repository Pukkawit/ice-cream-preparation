const stocks = {
  Fruits: [
    "strawberry",
    "grapes",
    "banana",
    "apple",
    "mango",
    "blueberry",
    "pineapple",
  ],
  Liquid: [
    "water",
    "ice",
    "Milk",
    "Heavy cream",
    "Sweetened condensed milk",
    "Coconut milk",
    "Almond milk",
    "Vanilla extract",
  ],
  Holder: [
    "cone",
    "cup",
    "stick",
    "glass",
    "bowl",
    "waffle cone",
    "sundae dish",
  ],
  Toppings: [
    "chocolate",
    "peanuts",
    "butter",
    "sprinkles",
    "caramel sauce",
    "whipped cream",
    "cherries",
  ],
};

const timing = (t, element) => {
  let totalMilliseconds = t; // Use t directly as total milliseconds

  const moveTime = setInterval(() => {
    // Calculate minutes and seconds
    let minutes = Math.floor(totalMilliseconds / 1000 / 60);
    let seconds = Math.floor((totalMilliseconds / 1000) % 60);

    // Format minutes and seconds to ensure two digits
    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");

    // Update the element's text with the formatted time
    element.textContent = `${formattedMinutes}:${formattedSeconds}`;

    // Decrease totalMilliseconds by 1000 (1 second)
    totalMilliseconds -= 1000;

    // Clear the interval when the countdown reaches zero
    if (totalMilliseconds < 0) {
      clearInterval(moveTime);
    }
  }, 1000);
};

// Function to capitalize the first letter of a string and lowercase the rest
function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const fruitChoice = document.getElementById("fruitChoice");
const liquidChoice = document.getElementById("liquidChoice");
const holderChoice = document.getElementById("holderChoice");
const toppingsChoice = document.getElementById("toppingsChoice");

// Generate options for fruit choice dropdown
for (const fruit in stocks.Fruits) {
  const option = document.createElement("option");
  option.value = stocks.Fruits[fruit];
  option.textContent = titleCase(stocks.Fruits[fruit]);
  fruitChoice.appendChild(option);
}

// Generate options for liquid choice dropdown
for (const liquid in stocks.Liquid) {
  const option = document.createElement("option");
  option.value = stocks.Liquid[liquid];
  option.textContent = titleCase(stocks.Liquid[liquid]);
  liquidChoice.appendChild(option);
}

// Generate options for holder choice dropdown
for (const holder in stocks.Holder) {
  const option = document.createElement("option");
  option.value = stocks.Holder[holder];
  option.textContent = titleCase(stocks.Holder[holder]);
  holderChoice.appendChild(option);
}

// Generate options for toppings choice dropdown
for (const topping in stocks.Toppings) {
  const option = document.createElement("option");
  option.value = stocks.Toppings[topping];
  option.textContent = titleCase(stocks.Toppings[topping]);
  toppingsChoice.appendChild(option);
}

/* const form = document.getElementsByTagName("form"); */
const form = document.getElementById("orderForm");
const error = document.querySelectorAll(".errorDiv");
const responseSection = document.querySelector(".response--section");
const response = document.getElementById("response");
const orderBtn = document.getElementById("orderBtn");

const stepsDiv = document.createElement("div");
const stepsDiv2 = document.createElement("div");
const stepsDiv3 = document.createElement("div");
const stepsDiv4 = document.createElement("div");
const stepsDiv5 = document.createElement("div");
const stepsDiv6 = document.createElement("div");
const stepsDiv7 = document.createElement("div");
const stepsDiv8 = document.createElement("div");

const countDownDiv = document.createElement("div");
const countDownDiv2 = document.createElement("div");
const countDownDiv3 = document.createElement("div");
const countDownDiv4 = document.createElement("div");
const countDownDiv5 = document.createElement("div");
const countDownDiv6 = document.createElement("div");
const countDownDiv7 = document.createElement("div");
const countDownDiv8 = document.createElement("div");

countDownDiv.className = "count-down";
countDownDiv2.className = "count-down";
countDownDiv3.className = "count-down";
countDownDiv4.className = "count-down";
countDownDiv5.className = "count-down";
countDownDiv6.className = "count-down";
countDownDiv7.className = "count-down";
countDownDiv8.className = "count-down";

stepsDiv.className = "steps-div";
stepsDiv2.className = "steps-div";
stepsDiv3.className = "steps-div";
stepsDiv4.className = "steps-div";
stepsDiv5.className = "steps-div";
stepsDiv6.className = "steps-div";
stepsDiv7.className = "steps-div";
stepsDiv8.className = "steps-div";

fruitChoice.addEventListener("change", () => {
  error[0].textContent = "";
  if (fruitChoice.value === "") {
    error[0].textContent = "Select fruit";
  }
});
liquidChoice.addEventListener("change", () => {
  error[1].textContent = "";
  if (liquidChoice.value === "") {
    error[1].textContent = "Select liquid";
  }
});
holderChoice.addEventListener("change", () => {
  error[2].textContent = "";
  if (holderChoice.value === "") {
    error[2].textContent = "Select holder";
  }
});
toppingsChoice.addEventListener("change", () => {
  error[3].textContent = "";
  if (toppingsChoice.value === "") {
    error[3].textContent = "Select toppings";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fruit = fruitChoice.value;
  const liquid = liquidChoice.value;
  const holder = holderChoice.value;
  const toppings = toppingsChoice.value;

  const order = {
    fruit,
    liquid,
    holder,
    toppings,
  };
  // Reset error messages
  error[0].textContent = "";
  error[1].textContent = "";
  error[2].textContent = "";
  error[3].textContent = "";
  if (order.fruit === "") {
    error[0].textContent = "Select fruit";
  } else if (order.liquid === "") {
    error[1].textContent = "Select liquid";
  } else if (order.holder === "") {
    error[2].textContent = "Select holder";
  } else if (order.toppings === "") {
    error[3].textContent = "Select toppings";
  } else {
    const alertModal = document.createElement("div");
    const overlay = document.createElement("div");
    const notifyParagraph = document.createElement("p");
    const modalTitle = document.createElement("h2");
    const footerSection = document.createElement("div");
    const cancelBtn = document.createElement("button");
    const approveBtn = document.createElement("button");
    alertModal.className = "alert-modal";
    notifyParagraph.innerHTML = `Your order is received: <br/>Your choice of fruit is <strong>${order.fruit}</strong>, <br/>Your choice of liquid is <strong>${order.liquid}</strong>, <br/>Your choice of holder is <strong>${order.holder}</strong>, and <br/>your choice of toppings is <strong>${order.toppings}</strong>.<br/> Please review to either - cancel or approve.`;

    notifyParagraph.style.fontSize = "0.9rem";
    notifyParagraph.style.lineHeight = "1.5";

    document.body.appendChild(overlay);
    overlay.className = "overlay";
    document.body.appendChild(alertModal);
    alertModal.appendChild(modalTitle);
    alertModal.appendChild(notifyParagraph);
    alertModal.appendChild(footerSection);
    footerSection.className = "footer-section";
    footerSection.appendChild(cancelBtn);
    footerSection.appendChild(approveBtn);
    modalTitle.textContent = "Order Received!";
    modalTitle.style.marginBottom = "1rem";
    cancelBtn.textContent = "Cancel";
    approveBtn.textContent = "Approve";
    cancelBtn.className = "cancel--btn";

    overlay.addEventListener("click", () => {
      alertModal.remove();
      overlay.remove();
    });

    cancelBtn.addEventListener("click", () => {
      alertModal.remove();
      overlay.remove();
    });

    approveBtn.addEventListener("click", () => {
      alertModal.remove();
      overlay.remove();
      orderBtn.disabled = true;

      const acknowledgeBtn = document.createElement("button");

      acknowledgeBtn.addEventListener("click", () => {
        responseSection.style.display = "none";
        // reset the select fields
        fruitChoice.value = "";
        liquidChoice.value = "";
        holderChoice.value = "";
        toppingsChoice.value = "";
        orderBtn.disabled = false;
        responseSection.style.display = "none";
        acknowledgeBtn.style.display = "none";
        stepsDiv.style.display = "none";
        stepsDiv2.style.display = "none";
        stepsDiv3.style.display = "none";
        stepsDiv4.style.display = "none";
        stepsDiv5.style.display = "none";
        stepsDiv6.style.display = "none";
        stepsDiv7.style.display = "none";
        stepsDiv8.style.display = "none";

        //acknowledgeBtn.remove();
      });

      responseSection.style.display = "block";
      acknowledgeBtn.textContent = "Acknowledge";
      acknowledgeBtn.className = "acknowledge--btn";

      async function time(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function kitchen() {
        try {
          let t = 2000;
          await time(t);

          t = 2000;
          timing(t, countDownDiv);
          response.appendChild(stepsDiv);
          stepsDiv.style.display = "flex";
          stepsDiv.innerHTML = `<p>${titleCase(
            fruit
          )} was selected as the fruits</p>`;
          stepsDiv.appendChild(countDownDiv);
          await time(t + 1000);

          t = 500;
          timing(t, countDownDiv2);
          response.appendChild(stepsDiv2);
          stepsDiv2.style.display = "flex";
          stepsDiv2.innerHTML = `Preparation started... `;
          stepsDiv2.appendChild(countDownDiv2);
          await time(t + 1000);

          t = 4000;
          timing(t, countDownDiv3);
          response.appendChild(stepsDiv3);
          stepsDiv3.style.display = "flex";
          stepsDiv3.innerHTML = `<p>${titleCase(fruit)} is chopped</p>`;
          stepsDiv3.appendChild(countDownDiv3);
          await time(t + 1000);

          t = 3000;
          timing(t, countDownDiv4);
          response.appendChild(stepsDiv4);
          stepsDiv4.style.display = "flex";
          stepsDiv4.innerHTML = `<p>${titleCase(
            liquid
          )} is added as the liquid</p>`;
          stepsDiv4.appendChild(countDownDiv4);
          await time(t + 1000);

          t = 7000;
          timing(t, countDownDiv5);
          response.appendChild(stepsDiv5);
          stepsDiv5.style.display = "flex";
          stepsDiv5.innerHTML = `<p>The machine is started and running...</p>`;
          stepsDiv5.appendChild(countDownDiv5);
          await time(t + 1000);

          t = 2000;
          timing(t, countDownDiv6);
          response.appendChild(stepsDiv6);
          stepsDiv6.className = "steps-div";
          stepsDiv6.innerHTML = `<p>The ice cream is placed in a ${titleCase(
            holder
          )} holder</p>`;
          stepsDiv6.appendChild(countDownDiv6);
          await time(t + 2000);

          t = 3000;
          timing(t, countDownDiv7);
          response.appendChild(stepsDiv7);
          stepsDiv7.style.display = "flex";
          stepsDiv7.innerHTML = `<p>${titleCase(
            toppings
          )} is added as toppings</p>`;
          stepsDiv7.appendChild(countDownDiv7);

          await time(t + 1000);

          t = 4000;
          timing(t, countDownDiv8);
          response.appendChild(stepsDiv8);
          stepsDiv8.style.display = "flex";
          stepsDiv8.innerHTML = `<p>The ${titleCase(fruit)}-${titleCase(
            toppings
          )} ice cream is ready to be served</p>`;
          stepsDiv8.appendChild(countDownDiv8);

          await time(t + 1000);
        } catch {
          error;
        } finally {
          response.appendChild(acknowledgeBtn);
        }
      }

      kitchen();
    });
  }
});
