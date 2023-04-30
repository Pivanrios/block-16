# block-16 Functions and Objects
## Assingment
Create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.


- [X] If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
- [X] If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
- [X] At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 


## Development
To it, we first needed to create a function that calculates the price before any discount 
* calcTotal() : calculates the product of the price times reffils it took.


than, we crated 2 functions to calculate the price after the discount:
* subDiscount(): Subscription Discount
* coupDiscount(): Coupon Discount

and one main function that uses conditions and invokes each function is required
* checkDiscount()

after wards added a `forin` loop that will check all our objects and invoke our final function to check for discount to each customer. :tada:

```
for (const keys in Customers){
  ...
  checkDicount(Customers[key])
  ...
}
```
