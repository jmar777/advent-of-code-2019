# Advent of Code (2019)

Year 2019 solutions for https://adventofcode.com/.

Getting started:

```
$ git clone git@github.com:jmar777/advent-of-code-2019.git
$ cd advent-of-code-2019
$ npm install
```

This is mainly being used as a personal playground for JavaScript feature proposals like the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator) and [partial application](https://github.com/tc39/proposal-partial-application). As such, it includes a script runner that transpiles solution code through babel.

Usage:

```
$ ./run <day> <part>

Examples:

$ ./run 1 a
$ ./run 25 b

```

The script relies upon the following folder structure being used:

```
advent-of-code-2019/
├── input/
│   ├── 01.txt
│   ├── 02.txt
│   ├── ...
│   └── 25.txt
└── day/
    ├── 01-a.js
    ├── 01-b.js
    ├── ...
    ├── 25-a.js
    └── 25-b.js
```

See day 1 solutions for an example of importing the puzzle input data.
