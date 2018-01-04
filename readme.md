# html-a

[![npm version](https://badge.fury.io/js/html-a.svg)](https://www.npmjs.com/package/html-a)
[![Build Status](https://travis-ci.org/Arttse/node.html-a.svg?branch=master)](https://travis-ci.org/Arttse/node.html-a)
[![bitHound Overall Score](https://www.bithound.io/github/Arttse/node.html-a/badges/score.svg)](https://www.bithound.io/github/Arttse/node.html-a)
[![Coverage Status](https://coveralls.io/repos/github/Arttse/node.html-a/badge.svg?branch=master)](https://coveralls.io/github/Arttse/node.html-a?branch=master)

> Node.js module. Parse HTML and extract «a» elements.


## Features
- Nothing extra.
- Fast and simple.
- Small size (not bloated).
- Only using the fast [htmlparser2](https://github.com/fb55/htmlparser2).


## Install

```bash
$ npm install --save html-a
```


## Usage

HTML string example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example HTML</title>
</head>
<body>
    <p id="first">
        <a href="http://site.com"><b>Some site</b></a>
    </p>
    <p>
        <a href="#first">Link in page</a>
        <a href="javascript:alert('Hello, World!');">Hello!</a>
        <a href="/foo/bar">FooBar</a>
    </p>
</body>
</html>
```

CommonJS example:
```js
const htmla = require ( 'html-a' );
const html = 'an example HTML is given above';

// Get href and innerHTML from «a» elements.
// For more information, use the options.
htmla ( html );
//=>
// [
//   { innerHTML: '<b>Some site</b>', href: 'http://site.com' },
//   { innerHTML: 'Link in page', href: '#first' },
//   { innerHTML: 'Hello!', href: 'javascript:alert(\'Hello, World!\');' },
//   { innerHTML: 'FooBar', href: '/foo/bar' }
// ]


// OR just get all DOM «a» elements
htmla.getElements ( html );
```


## API

### htmla ( html, [options] )
Gets custom info about «a» elements.  
Returns an `Array`.


#### html
Type: `string`

HTML string for extract «a» elements.


#### options
Type: `object`

Settings to obtain the desired information.


##### text
Type: `boolean`  
Default: `false`

Gets inner text in element.


##### innerHTML
Type: `boolean`  
Default: `true`

Gets inner HTML in element.


##### href
Type: `boolean`  
Default: `true`

Gets attribute href in element.


##### attributes
Type: `boolean`  
Default: `false`

Gets all attributes in element.


##### element
Type: `boolean`  
Default: `false`

Gets element DOM object.


### htmla.getElements ( html )
Parses HTML, gets all DOM «a» elements.  
Returns an `Array`.


#### html
Type: `string`

HTML string for extract «a» elements.


## License

MIT © Nikita «Arttse» Bystrov  


