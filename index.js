const Menu = [
  {name : "Margherita" , price : 2.50},
  {name : "Sicilan" , price : 6.00},
  {name : "Hawaiian" , price : 7.00},
  {name : "Quatro formaggi" , price : 7.50},
  { name: "Maltese", price: 7.50 },
  {name : "Frutti di mare" , price : 9.50},
  {name : "Tunez" , price : 10.00}
]

const CashInRegister = 100;
const OrderQueue = [];

/*
  challenge 1 : Add a utility function to add a new pizza to the menu
*/

function AddNewPizza(PizzaObj) {
  Menu.push(PizzaObj); 
}
