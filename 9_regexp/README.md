Chapter 9: Regular Expressions

- Regular expressions are very awkward in JS but are useful for obvious reasons, will make you a better programmer
- Used with Strings.
- Created by enclosing pattern in /_/

The test() function is used to test if a string contains your regex.
let regex = /abc/;
regex.test(abcdefg); ==> TRUE

The exec() function is slightly more complex than test.
It returns either null (no match) or an object with info about the match.
The object will contain array with all the matches of all the parentheses.

Regex objects can be expressed in countless ways.
/\d/ --> A digit
/\d+/ --> One or more digit
/\d*/ --> Zero or more digits
/\d?/ --> Optional digit (either 0 or 1 occurence here)
/\d{4}/ --> Exactly 4 digits
/\d{2, 4}/ --> Between 2 and 4 digits
/\d{5,}/ --> 5 or more digits

The caret ^ means the a) the start of the input or b) the INVERSE when in square brackets. So to check if something is quoted text:
let quotedText = /"[^"]*"/
Will match with all parts of the string surounded by " "
- The [] mean ANY value inside of them counts as a match
- ^" means 'that is not "'
* means 'any amount'

The pipe | denotes a choice between pattern to either side!

The period . means ANY character EXCEPT For newline.

$1, $2 can be used to refer to each parenthisized group in a pattern and rearrange their order

We can set the lastIndex ONLY when the regexp is global /regexp/g or sticky /regexp/y
This is used to establish a start-point, while global finds ANY match, and sticky only those at the start point.

REGEX expressions are frequently used to parse info from .INI files!