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
