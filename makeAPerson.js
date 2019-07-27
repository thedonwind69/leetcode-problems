var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function () {
      var personsname = firstAndLast.split(" ");
      return personsname[0];
    }
    this.getLastName = function () {
      var personsname = firstAndLast.split(' ');
      return personsname[1];
    }
  
    this.setFirstName = function (newFirstName) {
      firstAndLast = firstAndLast.split(" ");
      firstAndLast[0] = newFirstName;
      firstAndLast = firstAndLast.join(" ");
      return firstAndLast;
    }
    this.setLastName = function (newLastName) {
        firstAndLast = firstAndLast.split(" ");
        firstAndLast[1] = newLastName;
        firstAndLast = firstAndLast.join(" ");
        return firstAndLast;
    }
    this.setFullName = function (newFullName) {
        firstAndLast = newFullName;
    }
    
    return firstAndLast;
  };
  
var bob = new Person('Bob Ross');
bob.setFirstName("Don");
var result = bob.getFullName();
console.log(result);