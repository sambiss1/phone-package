let contactBook = [];

let firstMessage = 0;
let secondMessage = "";

// Create class
class DialingPhone {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  // Add new phone number
  AddPhoneNumber(name, phone) {
    contactBook.push({ name: name, phone: phone });
  }

  // Remove a phone number
  RemovePhoneNumber(phone) {
    contactBook = contactBook.filter(
      (contactBookItem) => contactBookItem.phone !== phone,
    );
    return contactBook;
  }

  // Dial
  DialPhone(phone) {
    for (let i = 0; i < contactBook.length; i++) {
      if (contactBook[i].phone === phone) {
        firstMessage = phone;
        secondMessage = "Now Dialling 2347023232";
      } else {
        console.log("This phone number is not in contact book");
        firstMessage = "";
        secondMessage = "";
      }
    }
  }

  FirstObserver() {
    return firstMessage;
  }
  SecondObserver() {
    return secondMessage;
  }
}

class Observer extends DialingPhone {
  first = super.FirstObserver();
  second = super.SecondObserver();
}

// Create instance
const newContactBook = new DialingPhone("Sarah", "+234 816 297 4435");

// Add two Phone number
newContactBook.AddPhoneNumber("Sarah", "+234 816 297 4435");
newContactBook.AddPhoneNumber("Sam", "+243 997 001 363");

// Remove a phone number
newContactBook.RemovePhoneNumber("+243 997 001 363");

// Dial a phone number
newContactBook.DialPhone("+234 816 297 4435");

// instance observers
const observer = new Observer();

// display observers
console.log(observer.first, "\n", observer.second);