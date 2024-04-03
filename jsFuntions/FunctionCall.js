//Function call()
//Method Reuse
//With the call() method, you can write a method that can be used on different objects.

//All Functions are Methods
//

const w = {
  firstName: "manik",
  water: function () {
    console.log(`${this.firstName} water the tree`);
  },
};
w.water()

