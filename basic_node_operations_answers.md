Questions
1. Run the commands `sort`, `wc` and `uniq` on the `commands.js` file. Explain how they work and what the output was.

`sort` : all lines of the `commands.js` file were returned in alphabetical order. The lines are sorted alphabetically and also by indentation. The topmost lines are blank lines, followed by `break;`. `break;` is next because it starts with b and the lines are the most indented of the file.
output:
```
















          uniqArr.push(linesArray[i]);
        if (linesArray[i] != linesArray[i-1]) {
        };
      break;
      break;
      break;
      break;
      break;
      break;
      break;
      commandLibrary.cat(userInputArray.slice(1));
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      commandLibrary.head(userInputArray.slice(1));
      commandLibrary.sort(userInputArray.slice(1));
      commandLibrary.tail(userInputArray.slice(1));
      commandLibrary.uniq(userInputArray.slice(1));
      commandLibrary.wc(userInputArray.slice(1));
      console.log('Sorry, ' + userInput + ' is not a valid command.');
      done(data);
      done(header);
      done(lineCount + ' ' + wordCount + ' ' + byteCount);
      done(sorted);
      done(tail);
      done(uniqArr.join('\n'));
      for (let i = 1; i < linesArray.length; i++) {
      if (err) throw err;
      if (err) throw err;
      if (err) throw err;
      if (err) throw err;
      if (err) throw err;
      if (err) throw err;
      let byteCount = Buffer.byteLength(data);
      let firstTen = linesArray.slice(0, 10);
      let header = firstTen.join('\n');
      let lastTen = linesArray.slice(linesArray.length-10);
      let lineCount = linesArray.length;
      let linesArray = data.toString().split('\n');
      let linesArray = data.toString().split('\n');
      let linesArray = data.toString().split('\n');
      let linesArray = data.toString().split('\n');
      let linesArray = data.toString().split('\n'); //data is returned as a buffer
      let sorted = linesArray.sort().join('\n');
      let tail = lastTen.join('\n');
      let uniqArr = [linesArray[0]];
      let wordCount = wordsArray.length;
      let wordsArray = data.toString().split(' ');
      };
    case "cat":
    case "echo":
    case "head":
    case "sort":
    case "tail":
    case "uniq":
    case "wc":
    const fileName = fullPath[0];
    const fileName = fullPath[0];
    const fileName = fullPath[0];
    const fileName = fullPath[0];
    const fileName = fullPath[0];
    const fileName = fullPath[0];
    default:
    done(userInput);
    fs.readFile(fileName, (err, data) => {
    fs.readFile(fileName, (err, data) => {
    fs.readFile(fileName, (err, data) => {
    fs.readFile(fileName, (err, data) => {
    fs.readFile(fileName, (err, data) => {
    fs.readFile(fileName, (err, data) => {
    })
    });
    });
    });
    });
    });
  "cat": function(fullPath) {
  "echo": function(userInput) {
  "head": function(fullPath) {
  "sort": function(fullPath) {
  "tail": function(fullPath) {
  "uniq": function(fullPath) {
  "wc": function(fullPath) {
  const command = userInputArray[0];
  const userInputArray = userInput.split(" ");
  process.stdout.write('\nprompt > ');
  process.stdout.write(output);
  switch (command) {
  }
  }
  },
  },
  },
  },
  },
  },
const commandLibrary = {
const fs = require('fs');
function done(output) {
function evaluateCmd(userInput) {
module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
}
}
};
```

`wc` : the lines, words and byte count for the file are printed.
output:
```
 119     296    3065 commands.js
```

`uniq` : `uniq` removes consecutive duplicate lines. Since `commands.js` doesn't have any duplicate consecutive lines, it just returns all the contents of the file.
output:
```
const fs = require('fs');

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case "head":
      commandLibrary.head(userInputArray.slice(1));
      break;
    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
      break;
    case "sort":
      commandLibrary.sort(userInputArray.slice(1));
      break;
    case "wc":
      commandLibrary.wc(userInputArray.slice(1));
      break;
    case "uniq":
      commandLibrary.uniq(userInputArray.slice(1));
      break;
    default:
      console.log('Sorry, ' + userInput + ' is not a valid command.');
  }
}

const commandLibrary = {
  "echo": function(userInput) {
    done(userInput);
  },

  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  "head": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;

      let linesArray = data.toString().split('\n'); //data is returned as a buffer
      let firstTen = linesArray.slice(0, 10);
      let header = firstTen.join('\n');
      done(header);
    });
  },

  "tail": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;

      let linesArray = data.toString().split('\n');
      let lastTen = linesArray.slice(linesArray.length-10);
      let tail = lastTen.join('\n');
      done(tail);
    });
  },

  "sort": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;

      let linesArray = data.toString().split('\n');
      let sorted = linesArray.sort().join('\n');
      done(sorted);
    });
  },

  "wc": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;

      let linesArray = data.toString().split('\n');
      let lineCount = linesArray.length;
      let wordsArray = data.toString().split(' ');
      let wordCount = wordsArray.length;
      let byteCount = Buffer.byteLength(data);
      done(lineCount + ' ' + wordCount + ' ' + byteCount);
    })
  },

  "uniq": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;

      let linesArray = data.toString().split('\n');
      let uniqArr = [linesArray[0]];
      for (let i = 1; i < linesArray.length; i++) {
        if (linesArray[i] != linesArray[i-1]) {
          uniqArr.push(linesArray[i]);
        };
      };
      done(uniqArr.join('\n'));
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
```

2. Using the pipe (`|`) connect at least two commands and run it on `commands.js`. Explain what the output was and why the specific data was outputted.

`head commands.js | wc` returned 10 24 243. This because `head commands.js` ran first and then `wc` ran on the result of `head commands.js`.
