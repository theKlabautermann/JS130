let Account = {
  init: function(email, password, firstName, lastName) {
    function generateDisplayName() {
      let alphaNumerics = "abcdefghijklmnopqrstuvwxyz1234567890";
      let newDisplayName = "";

      for (let charCount = 0; charCount < 16; charCount++) {
        let randomIndex = Math.floor(Math.random() * alphaNumerics.length);
        newDisplayName += alphaNumerics[randomIndex];
      }

      return newDisplayName;
    }

    this.firstName = function(password) {
      if (password === this.password) {
        return firstName;
      } else {
        return "Invalid Password";
      }
    };

    this.lastName = function(password) {
      if (password === this.password) {
        return lastName;
      } else {
        return "Invalid Password";
      }
    };

    this.resetPassword = function(password, newPassword) {
      if (password === this.password) {
        this.password = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    };

    this.email = function(password) {
      if (password === this.password) {
        return email;
      } else {
        return "Invalid Password";
      }
    };

    this.reanonymize = function(password) {
      if (password === this.password) {
        let self = this;
        (function() {
          let alphaNumerics = "abcdefghijklmnopqrstuvwxyz1234567890";
          let newDisplayName = "";

          for (let charCount = 0; charCount < 16; charCount++) {
            let randomIndex = Math.floor(Math.random() * alphaNumerics.length);
            newDisplayName += alphaNumerics[randomIndex];
          }
          self.displayName = newDisplayName;
        })();
        return true;
      } else {
        return "Invalid Password";
      }
    };

    this.displayName = generateDisplayName();
    this.password = password;
    return this;
  }
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false