# Fabricator Array Prototype Methods

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

## Installing

With Fabricator and NPM, simply require this library into your project and restart the Fabricator Grunt build process.

`npm install fab.prototype.array --save`

If you are not using Fabricator, you will need to in some manner compile `src/prototype.array.js` into your build process or put it somewhere where you can link it into your projects.

## Usage

### `myArr.filterUnique()`

Modifies the array so that it only contains unique items.

### `myArr.getUnique()`

Returns only unique items in the array.

### `myArr.pushUnique('myVal')`

Only pushes the item into the array if the value is unique (not already in the array).
