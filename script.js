// 01. Write a function greet(name) that returns "Hello, [name]!".

function greet(name) {
    return "Hello, " + name + "!"
}
console.log(greet("jas"))

// 02. Write a function add(a, b) that returns the sum of two numbers.

function add(a, b) {
   // return sum = a + b (no need to assign the sum)
   return a + b
}
console.log(add(1,7))

// 03. Write a function isEven(num) that returns true if the number is even.

function isEven(num) {
  //  if (num % 2 == 0) {
  //      return true
 //   } else {
  //      return false
  //  }
  
  return num % 2 === 0 // shorter way
}
console.log(isEven(2))

// 04. Write a function multiplyByTwo(num) that returns the number times 2.

function multiplyByTwo(num) {
    return num * 2
}
console.log(multiplyByTwo(10))

// 05. Write a function sayHi() that returns "Hi there!" with no parameters.

function sayHi() {
    return "Hi there!"
}
console.log(sayHi())

// 06. Write a function getFullName(firstName, lastName) that returns the full name as one string.

function getFullName(firstName, lastName) {
   // return firstName + " " + lastName
   return `${firstName} ${lastName}` // concatenation
}
console.log(getFullName("naru","fitah"))

// 07. Write a function square(num) that returns the square of a number.

function square(num) {
    return num ** 2
}
console.log(square(3))

// 08. Write a function isPositive(num) that returns true if the number is greater than 0.

function isPositive(num) {
 //   if (num > 0) {
    //    return true
  //  } else {
     //   return false
    // }

    return num > 0 // shorter way
}
console.log(isPositive(2))

// 09. Write a function toFahrenheit(celsius) that converts Celsius to Fahrenheit.

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}
console.log(toFahrenheit(10))

// 10. Write a function getGreeting(name, age) that returns "Hi [name], you are [age] years old!".

function getGreeting(name, age) {
// return "Hi " + name + ", you are " + age + " years old!"
return `Hi ${name}, you are ${age} years old!` // concatenation

}
console.log(getGreeting("naru", 25))

// Functions + Logic Challenges

// 01. canVote(age)
// Write a function that returns true if the age is 18 or more, otherwise false.

function canVote(age) {
    return age > 17
}
console.log(canVote(18))


// 02. isPasswordStrong(password)
// A password is strong if it's 8+ characters and contains at least one number.
// Return true if it's strong, false otherwise.

function isPasswordStrong(password) {
    return password.length >= 8 && /\d/.test(password) // regular expression (RegEx) to check if it contains digits -> Does this string contain at least one digit?
}
console.log(isPasswordStrong("abcd1234"))

// 03. checkGrade(score)
// Write a function that returns:
// "A" if score >= 90
// "B" if score >= 80
// "C" if score >= 70
// "D" if score >= 60
// "F" if below 60

function checkGrade(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(checkGrade(44))

// 04. canRide(height, hasAdult)
// A person can ride if their height is 120cm or more, OR if they are with an adult.
// Return true if they can ride, false otherwise.

function canRide(height, hasAdult) {
    return height > 119 || hasAdult // We can simplify hasAdult === true to just hasAdult!
}
console.log(canRide(110, false))

// 05. loginStatus(isLoggedIn, isAdmin)
// Return:
// "Welcome back!" if isLoggedIn is true
// "Welcome, Admin!" if both isLoggedIn and isAdmin are true
// "Access Denied." if isLoggedIn is false

function loginStatus(isLoggedIn, isAdmin) {
   // if (isLoggedIn === true && isAdmin === false) {
   //     return "Welcome back!"
  //  } else if (isLoggedIn === true && isAdmin === true) {
  //      return "Welcome, Admin!"
  //  } else {
   //     return "Access Denied."
  //  } 
    if (isLoggedIn && isAdmin) return "Welcome, Admin!";
    if (isLoggedIn) return "Welcome back!";
    return "Access Denied.";

}
console.log(loginStatus(false, false))
