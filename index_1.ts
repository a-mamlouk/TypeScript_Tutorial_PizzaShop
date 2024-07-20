type Pizza = {
  id: number
  name: string,
  price: number;
};
/*
  challenge 8 :
  using literal tyes and unions, update the Order status so that
  it can only ever be "ordered" or "completed"
*/
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

/*
  Challenge 6 :
  1. Add an order type.
    It should have "id" , "pizza" and "status" properties
    Look through the code f ou need a reminder as to what data types those should be
*/

const Menu: Pizza[] = [
  { id:1, name: "Sicilan", price: 6.00 },
  { id:2, name: "Margherita", price: 2.50 },
  { id:3, name: "Hawaiian", price: 7.00 },
  { id:4, name: "Quatro formaggi", price: 7.50 },
  { id:5, name: "Maltese", price: 7.50 },
  { id:6, name: "Frutti di mare", price: 9.50 },
  { id:7, name: "Tunez", price: 10.00 }
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

/*
  challenge 1 : 
  Add a utility function to add a new pizza to the menu
*/

function addNewPizza(pizzaObj: Pizza) {
  Menu.push(pizzaObj);
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

function placeOrder(pizzaName: string) {
  const selectedPizza = Menu.find(pizzaObj => pizzaObj.name === pizzaName);
  // if the pizza is not available in the menu then return an error message
  //  i could ve used if (selectedPizza === undefined) but i prefer to use the below
  if (!selectedPizza) {
    console.error(`${pizzaName} is not available in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order= {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered"
  };
  orderQueue.push(newOrder);
  return newOrder;
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


/*
  Challenge 7 :
    1. fix the warning below by handling the sad path scenario
*/

function completeOrder(orderId: number) {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the order queue`);
    return;
  }
  order.status = "completed";
  return order;

}

addNewPizza({ id: 8 ,name: "AllMeat", price: 10.00 });
addNewPizza({ id: 9 ,name: "Mexcican", price: 8.00 });
addNewPizza({ id: 10 ,name: "Vegetarian", price: 4.00 });

placeOrder("AllMeat");
completeOrder(1);

console.log("Menu", Menu);
console.log("Cash in the register", cashInRegister);
console.log("Order Queue", orderQueue)

/*
  Challenge 4
  1. Create a Pizza object type :
    it should include name and a price property
*/

/*
  Challenge 5 
  1. Teach TS that the pizzaObj is supposed to be a pizza type
  2. look through the code to see if there are any new TS warnings to deal with
  3. fix em !
*/
