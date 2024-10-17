# Ice Cream Preparation Web Application
This project is an interactive web application that allows users to create a customized ice cream order. Users can choose their preferred fruit, liquid, holder, and toppings. The application simulates the process of ice cream preparation step by step, providing feedback on the preparation status.

## Features
* **Customizable Ice Cream Order**: Users can select from different options for fruits, liquids, holders, and toppings.
* **Interactive Feedback**: The application provides real-time updates as each step of the ice cream preparation is carried out.
* **Step-by-Step Process**: The preparation process is animated with a countdown timer for each stage, from fruit chopping to topping addition.
* **Responsive Design**: The application is fully responsive and optimized for mobile and desktop screens.
## Technologies Used
* **HTML5**: The structure of the web application is built with semantic HTML.
* **CSS3**: The styling of the application is managed with CSS, including responsive design to ensure the app works well on different screen sizes.
* **JavaScript**: The logic for the interactive elements, including form validation, dynamic content updates, and the countdown timer for each preparation step, is handled with vanilla JavaScript.

## Files
* **index.html**: The main structure of the web application, including the form for selecting ice cream preferences and the sections for displaying preparation progress.
* **styles.css**: Contains all the styles for the web application, including layout, typography, and responsive design. Media queries ensure a mobile-friendly interface.
* **script.js**: Handles the core logic for the application, including populating dropdowns, managing user input, simulating the ice cream preparation process, and showing dynamic feedback to the user.

## Installation
1. To run this project locally, follow these steps:
   * Clone the repository:
     `git clone https://github.com/your-username/ice-cream-preparation.git`
   * Navigate to the project directory:
     `cd ice-cream-preparation`
   * Open the `index.html` file in your web browser.

## How It Works
1. Users select their preferred options for:
   * Fruit (e.g., strawberry, mango)
   * Liquid (e.g., milk, almond milk)
   * Holder (e.g., cone, cup)
   * Toppings (e.g., sprinkles, chocolate)
2. After filling in the options, users can submit the order by clicking the "Order" button.
3. The application displays a modal with the summary of the order, allowing the user to confirm or cancel the order.
4. Upon confirmation, the app simulates each step of the ice cream preparation process with countdown timers and descriptive text:
   * Fruit chopping
   * Liquid mixing
   * Holder selection
   * Toppings addition
5. Once the preparation is complete, the user is notified that the ice cream is ready, and they can acknowledge the completion.

## Media Queries
The application is optimized for different screen sizes using the following media query:
```
@media screen and (max-width: 767px) {
  .ice--cream--prepare {
    flex-direction: column;
    justify-content: center;
  }
}
```
This ensures that the layout adapts to smaller screens, such as mobile devices, by stacking the form and response sections vertically.

## Future Improvements
* Add more customization options for flavors, add-ons, and delivery method.
* Integrate a backend to store and retrieve orders for persistent user sessions.
* Add animations to make the preparation process more visually engaging.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.


