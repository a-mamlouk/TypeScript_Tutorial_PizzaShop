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
  challenge 1 : 
  Add a utility function to add a new pizza to the menu
*/

function AddNewPizza(PizzaObj) {
  Menu.push(PizzaObj); 
}

/*
  challenge 2 : 
  Write another utility function, placeOrder, that takes a pizza name parameter and:
  1. finds that pizza object in the menu,
  2. adds the income to the cashInRegister,
  3. pushes a new "order object” to the orderQueue
  (e.g. { pizza: selectedPizzaObjectFromStepl, status: "ordered" }) 
  4. returns the new order object (just in case we need it later)
*/

function PlaceOrder(PizzaName) {
  const SelectedPizza = Menu.find(PizzaObj => PizzaObj === PizzaName)
  CashInRegister += SelectedPizza.price
  const NewOrder = {
    Pizza: SelectedPizza,
    status: "Ordered"
  }
  OrderQueue.push(NewOrder)
  return NewOrder
}

