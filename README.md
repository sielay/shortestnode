# Shorte.st Node Lib

Small snipped allowing you to automate link creation for brilliant monetization platform [shorte.st](http://shorte.st).

## Installation

```
npm install shorte.st --save
```

## Usage

```
var shorteSt = new (require('shorte.st')('MY_AP_KEY');

shorteSt.link('https://github.com/sielay/shortestnode', function(error, link) {
   if(error) {
       return console.error(error);
   }
   console.log(link);
});
```

## Disclaimer

Shorte.st is trademark of brilliant team of Shorte.st

## Licence

The MIT License (MIT)

Copyright (c) 2015 Lukasz Sielski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
