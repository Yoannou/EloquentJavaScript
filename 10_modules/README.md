*All examples here use the CommonJs module system*
*This doesn't apply to in-browser viewing so we'll have to teste this later in Node.js*

NPM is a website used to host and share packages, is also a command line program

A package may contain ONE OR MORE modules

A module may require code from other modules, called dependencies. The part of the module that is visible to other modules is called the interface.

A package may have multiple modules that depend on eachother, and modules that depend on modules from other packages. Thus when we install a package, we also must install all packages that contain dependency modules.

This chain of files gets quite large and should be put in a folder labelled in .gitignore

To slow down load times, web devs created software that rolls all of these modules and files into one file. These are called bundlers.
To make this file itself smaller, they created minifiers.


Javascript originally did not inherently support modules, so CommonJS modules is the approach used by Node.js
It takes advantage of Javascript's FUNCTION CONSTRUCTOR

let x = Function('string_of_args' 'body');

Uses a function called require(module) to ensure module is a dependency.
Uses an object called exports.your_module to show what this modules returns


In 2015 Javascript itself created a module standard, ES Modules.

Uses designated import and export keywords. Is more sophisticated than CommonJS and supported by NPM, but hasn't been fully adopted by everyone. Transition period.


So a package may go through a similar transformation as below:
Typescript -> {compiled} -> javascript -> ES modules -> {converted} -> CommonJs modules -> bundled -> minified -> Finished product.