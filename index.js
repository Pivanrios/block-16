// create the logic for their checkout system that returns the total cost of 
//all refills including if the customer has a subscription and/or a coupon.

//Step 1.-
//Create an object that will store all our customers
const Customers = {
    //add new customers as objects 
//Key       Values
    timmy : {//first object
            prescription: "acetaminophen",
            pricePerRefill: 25,
            refills: 3,
            subscription: false,
            coupon: true,
    },
    sarah : {//second object
            prescription: "diphenhydramine",
            pricePerRefill: 50,
            refills: 1,
            subscription: true,
            coupon: false,
    },
    rocky : {//third object
            prescription: "phenylephrine",
            pricePerRefill: 30,
            refills: 5,
            subscription: true,
            coupon: true,
    }
}
//console.log("I expect to see timmy's price per refill:", Customers.timmy.pricePerRefill)

//Step 2.-
//Create functions to calculate prices
//create a function with 2 parameters that will multiplicate to set the total amount 
const calcTotal = (price, times) =>{return price*times;}
//console.log("I expect to see 75:",calcTotal(Customers.timmy.pricePerRefill, Customers.timmy.refills))

//Create a function to add value to subscriptor 25% to the argument value
const subDiscount = (value) =>{return value - (value * 0.25);}
//console.log("I expect to see a 25% discount:",subDiscount(75))

//Function for coupon discount - 10 dlls
const coupDiscount = (value) =>{return value - 10}
//console.log("I expect to see a 10 dll discount:", coupDiscount(75))

//Create a function that takes an object as a parameter and checks its properties to add some discount
function checkDiscount(customer){
//declare a variable that will store the subtotal
    //we invoke the function and call our properties values as arguments
    let subTotal = calcTotal(customer.pricePerRefill, customer.refills);   

//add conditional statements to check for any discount
    //If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
    customer.subscription === true ? subTotal = subDiscount(subTotal) : undefined
    //If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
    customer.coupon === true ? subTotal = coupDiscount(subTotal) : undefined
//return the final price of the refills
    return subTotal
}

//Step 3.-
//for loop to check each customer
for (const key in Customers) {
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
    //declare a variable that will store the final value
    let finalAmount = checkDiscount(Customers[key]);
    console.log(`${key} your grand total is ${finalAmount}.`);
}