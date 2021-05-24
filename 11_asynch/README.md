Callbacks are simply functions that are passed as arguments to other functions. They could be used quite generically, as in the following:

```Javascript
function add(a, b, func) {
    sum = a+b;
    func(sum);
}
add(2, 4, console.log)
==> 6
```

In the above example, we allowed our add function to take a callback as its third parameter. The given function will operate on the sum of the numbers.

This concept is almost entirely useful because of ASYNCHRONIOUS JAVASCRIPT.

In asynchronious code, when a request is made the dependent chunk of code is blocked but the rest of the program still runs on.

Simple example is the built-in function `setTimeout(func, time);`
==> After the time runs out, the callback func is called.

`setInterval()` is another example of using a callback to make a function run every X amount of milliseconds.



Callbacks are perfectly loaded when RETREIVING an external resource (script, file, etc) from the network, for example.

// DISPLAY FILE WHEN IT IS FULLY LOADED
```Javascript
    function myDisplayer(el) {
        document.getElementById("demo").innerHTML = el;
    }

    function getFile(callback) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
            if (req.status == 200) {
                callback(this.responseText);
            }
            else {
                callback("Error: " + req.status);
            }
        }
        req.send();
    }
    getFile(myDisplayer);
```
