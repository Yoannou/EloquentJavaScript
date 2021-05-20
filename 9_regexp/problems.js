// 1) Regexp Golf
// Trying to make regexpes as small as possible for these strings (string must contain regex):

// I) car, cat
let reg1 = /ca[rt]$/;

// II) pop, prop
let reg2 = /pr?op$/;

// III) ferret, ferry, ferrari
let reg3 = /ferr((et)|y|ari)$/;

// IV) Any word ending in ious
let reg4 = /([a-z]+)ious$/;

// V) A whitespace char followed by a period, comma, colon, or semicolon
let reg5 = /\s[.,;:]/;

// VI) A word longer than 6 letters
let reg6 = /([a-z]{7,})/;

// VII) A word without the letter e (or E)
let reg7 = /\b[^\We]+\b/i;


// 2) Quoting Style
// Replace all single quotes in a novel with double quotes, but keep single quotes in contractions
let text = "'I'm the cook,' he said. 'And it's my time to shine.'"

let doubleQuotes = text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');

// 3)
// An expression that matches only Javscript-style numbers

/* ANOTHER TIME */