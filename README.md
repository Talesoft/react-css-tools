React CSS Tools
===============

[![Build status](https://img.shields.io/travis/talesoft/react-css-tools-js/master.svg?style=flat-square)](https://travis-ci.org/talesoft/react-css-tools-js)
[![Coverage](https://img.shields.io/codeclimate/coverage/Talesoft/react-css-tools-js.svg)](https://codecov.io/github/Talesoft/react-css-tools-js?branch=master)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@talesoft/react-css-tools.svg)](https://snyk.io/package/npm/@talesoft/react-css-tools)

Some loose React CSS helper functions.

Installation
------------

```bash
npm i @talesoft/react-css-tools
```

TypeScript supported out-of-the-box.

Usage
-----

```jsx
import { className } from '@talesoft/react-css-tools';

function MyComponent(props) {
    return <div className={className('MyComponent', props.active && 'active')}>
        Hello World!
    </div>;
}
```

Contributing
------------

Before contributing, check out the [Contribution Guidelines][contribution-guidelines]

Requires: [npm][nodejs-download]

```bash
// Pull project
git clone https://github.com/Talesoft/tick-js

// Enter project directory
cd geometry-js

// Install development dependencies
npm install

// ... make your changes ...

// Run tests
npm run test

// Lint
npm run lint

// Fix linting problems
npm run lint:fix

// Build
npm run build

// ... create branch, commit, push, merge request etc. ...
```

[contribution-guidelines]: https://github.com/Talesoft/react-css-tools-js/blob/master/CONTRIBUTING.md
[nodejs-download]: https://nodejs.org/en/



