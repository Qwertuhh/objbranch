
# obj-branch

`obj-branch` is a JavaScript module that facilitates operations on adjacent fields of an object. It allows you to manipulate object properties in a convenient way.

## Installation

To use `obj-branch`, you can install it via npm:

```bash
npm install obj-branch
```

## Operations

| Operations  | Syntax  | Usage |
| :------------ |:---------------:| -----:|
| add      | $add | to add |
| sub    | $sub    |   to sub |
| multiplication | $mul        |    to multiplication |
| divide | $divide       |    to divide |
| module | $mod       |    to module |


## Usage/Examples
1. Import the module into your project:

```javascript
const objBranch = require('objBranch');
```
2. Perform operations on adjacent fields of an object. For example:

```javascript
const myObject = [
    {name:'qwertuhh',age:12},
    {name:'hopi',age:13},
    {name:'qwertuhh',age:11}
];

// creating branch

const marks = new objBranch('firstName',myObject);

// making operation to branch
// <branch_name>.branch(<fieldname>:{<operations>:[<fieldname>,<fieldname> || Number]});

const branch_marks = marks.branch({sst:{$add:['branching',2]}})
```

## Contributing

Contributions are always welcome!

See `other repository` for ways to get started.

Contributions are welcome! If you’d like to improve obj-branch, feel free to submit pull requests. Please follow our coding standards and provide clear commit messages.



## License
This project is licensed under the MIT License.
[MIT](LICENSE)

