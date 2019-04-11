Questions
1. Run the commands `sort`, `wc` and `uniq` on the `commands.js` file. Explain how they work and what the output was.

`sort` : all lines of the `commands.js` file were returned in alphabetical order. The lines are sorted alphabetically and also by indentation. The topmost lines are blank lines, followed by `break;`. `break;` is next because it starts with b and the lines are the most indented of the file.

`wc` : the lines, words and byte count for the file are printed. The output for `wc commands.js` is 37 73 785

`uniq` : `uniq` removes consecutive duplicate lines. Since `commands.js` doesn't have any duplicate consecutive lines, it just returns all the contents of the file.

2. Using the pipe (`|`) connect at least two commands and run it on `commands.js`. Explain what the output was and why the specific data was outputted.

`head commands.js | wc` returned 10 24 243. This because `head commands.js` ran first and then `wc` ran on the result of `head commands.js`.
