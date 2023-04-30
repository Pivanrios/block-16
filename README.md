# block-16
## Functions and objects.

Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
First we created an object to store all our customers

than we crated 3 functions to calculate the price or add discounts
calcTotal()
subDiscount()
coupDiscount()

and one functions to check for any discount and invoke the others functions
checkDiscount()

after wards added a for in loop that will check all our objects and invoke our final function to check for discount to each customer.