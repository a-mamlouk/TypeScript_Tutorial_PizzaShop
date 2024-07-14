const Menu = [
  {name : "Margherita" , price : 2.50},
  {name : "Sicilan" , price : 6.00},
  {name : "Hawaiian" , price : 7.00},
  {name : "Quatro formaggi" , price : 7.50},
  { name: "Maltese", price: 7.50 },
  {name : "Frutti di mare" , price : 9.50},
  {name : "Tunez" , price : 10.00}
]

let CashInRegister = 100;
let NextOrderId = 1;
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
  const SelectedPizza = Menu.find(PizzaObj => PizzaObj.name === PizzaName)
  // if the pizza is not available in the menu then return an error message
  //  i could ve used if (SelectedPizza === undefined) but i prefer to use the below
  if (!SelectedPizza) {
    console.error(`${PizzaName} is not available in the menu`)
    return
  }
  CashInRegister += SelectedPizza.price
  const NewOrder = {
    Id: NextOrderId++,
    Pizza: SelectedPizza,
    status: "Ordered"
  }
  OrderQueue.push(NewOrder)
  return NewOrder
}

/*
* Challenge 3: 
write another utility function, completeOrder, that takes an orderId as a parameter

 1. finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 2. return the found order from the function.
 
 Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. 
 You can use a global ‘nextOrderId' variable and increment it every time a new order is created to
 simulate real IDs being managed for us by a database.
*/

function CompleteOrder(OrderId) {
  const Order = OrderQueue.find(Order => Order.Id === OrderId)
  Order.status = "Completed"
  return Order;

}

AddNewPizza({name : "AllMeat" , price : 10.00})
AddNewPizza({name : "Mexcican" , price : 8.00})
AddNewPizza({ name: "Vegetarian", price: 4.00 })

PlaceOrder("AllMeat")
CompleteOrder("1")

console.log("Menu", Menu)
console.log("Cash in the register", CashInRegister)
console.log("Order Queue", OrderQueue)

