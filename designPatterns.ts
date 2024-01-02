// Singleton Logger Example in TypeScript

class Logger {
  private static instance: Logger | null = null;
  private logs: Array<{ timestamp: string; message: string }> = [];

  private constructor() {}

  log(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    console.log(`${timestamp} - ${message}`);
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  getLogs(): Array<{ timestamp: string; message: string }> {
    return this.logs;
  }
}

// Example Usage:

const logger1 = Logger.getInstance();
logger1.log("First log message from logger1");

const logger2 = Logger.getInstance();
logger2.log("Second log message from logger2");

const logger3 = Logger.getInstance();
logger3.log("Third log message from logger3");

console.log(logger1 === logger2); // Outputs: true
console.log(logger1.getLogs());
/*
  Outputs:
  [
    { timestamp: '2022-01-01T12:00:00.000Z', message: 'First log message from logger1' },
    { timestamp: '2022-01-01T12:01:00.000Z', message: 'Second log message from logger2' }
  ]
  */

// Module Pattern Example in TypeScript

const MyModule = (function () {
  // Private members
  let privateVar: string = "I am private";

  function privateFunction(): void {
    console.log("I am also private " + privateVar);
  }

  // Public members
  return {
    publicVar: "I am public",
    publicFunction: function (): void {
      console.log("I am public");
      privateFunction();
    },
  };
})();

// Example Usage
console.log(MyModule.publicVar); // Outputs: I am public
MyModule.publicFunction();
/*
  Outputs:
  I am public
  I am also private
  */

// Private members are not accessible from outside the module
// console.log(MyModule.privateVar); // Error
// MyModule.privateFunction(); // Error
