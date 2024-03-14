# obj-branch

`obj-branch` is a JavaScript module that facilitates operations on adjacent fields of an object It allows you to make operations on next to next object fields in a convenient way.

## Installation

To use `obj-branch`, you can install it via npm:

```bash
npm install obj-branch
```

## Operations

| Operations     | Syntax |             Usage |
| :------------- | :-----: | ----------------: |
| add            |  $add  |            to add |
| sub            |  $sub  |            to sub |
| multiplication |  $mul  | to multiplication |
| divide         | $divide |         to divide |
| module         |  $mod  |         to module |

## Usage/Examples

1. Import the module into your project:

```javascript
const objBranch = require('objBranch');
```

2. Perform operations on adjacent fields of an object. For example:

```javascript
// It must be a Array

const myObject = [
    {name:'qwertuhh',age:12,totalMarks:89},
    {name:'hopi',age:13,totalMarks:69},
    {name:'qwertuhh',age:11,totalMarks:70}
];

// creating branch

//const <name> = new objbranch(<branchName>,<data>)

const marks = new objBranch('marks',myObject);

// making operation to branch
// <branch_name>.branch(<fieldname>:{<operations>:[<fieldname>,<fieldname>]});

const branch_marks = marks.branch({totalMarks:{$add:['branching','$age']}})
```

## Contributing

Contributions are always welcome!

See `other repository` for ways to get started.

Contributions are welcome! If you’d like to improve obj-branch, feel free to submit pull requests. Please follow our coding standards and provide clear commit messages.

## Future Updates

Stay tuned for more updates and enhancements to this project. We are constantly working to improve and add new features. If you would like to contribute or have any suggestions, please feel free to open an issue or submit a pull request.

For the latest news and updates, keep an eye on this section. Your feedback and contributions are greatly appreciated as we continue to make this project even better!

## License

This project is licensed under the MIT License.
[MIT](LICENSE)
