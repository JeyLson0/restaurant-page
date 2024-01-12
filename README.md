# Restaurant-page

## Description
TOP restaurant page project created with Vanilla JS, CSS, HTML. prior lessons taught us  
how to implement webpack, classes, and ES6 modules. The first idea that came through  
my mind was a Simpsons inspired restaurant, but remembering how Homer   
Simpson likes donuts I might as well do a donut webpage.  

## What I learned

### Classes
We use classes to create many objects of the same kind.

Syntax:

```js
class ClassName {
    constructor(name) {
        this.name = name;
    }
    method1(){...}
    method2(){...}
    method3(){...}
}

//creating an obj
let myObj = new ClassName("test");
myObj.method1();

```


### Webpack

npm - the purpose of npm (node package manager) is to automate the process of downloading and upgrading libraries from a central repository

Installation: install NVM > install node (it will install npm)

with npm we can download webpack

webpack - bundles our files into one .js file based on all the 'imports' and 'export' statements.


### ES6 module

different from module pattern, ES6 module lets us 'import' and 'export' different sections of code from different files.

import syntax:
```
import defaultExport from "module-name"
import * as name from "module-name"
import {export1, export2} from "module-name"
```

export syntax:
```
export {name1, name2, nameN, ...}
export let name1..
```