function createAccount(pin, amount) {
  let balance = amount || 0;

  return {
    checkBalance(pn) {
      if (pn === pin) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },

    deposit(pn, amt) {
      if (pn === pin) {
        balance += amt;
        return `Successfully deposited $${amt}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },

    withdraw(pn, amt) {
      if (pn === pin) {
        if (amt <= balance) {
          balance -= amt;
          return `Successfully withdrew $${amt}. Current balance: $${balance}.`;
        } else {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },

    changePin(pn, newPin) {
      if (pn === pin) {
        pin = newPin;
        return `PIN successfully changed!`;
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
