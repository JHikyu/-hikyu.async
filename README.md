# Async

Useful package 📂 for some async stuff like sleep 💤

📂 Zipped under 1kb with updates.

![](https://img.shields.io/bundlephobia/min/@hikyu/async?style=flat-square)
![](https://img.shields.io/npm/dw/@hikyu/async?style=flat-square)
![](https://img.shields.io/github/last-commit/jhikyu/-hikyu.async?style=flat-square)

## Install

```bash
npm i @hikyu/async
```

## Usage

I will use the deconstructed 🚧 require for demonstration
```js
// Simple require
const async = require('@hikyu/async');
sleep.sleep();

// Deconstructed require with custom names
const { sleep: wait } = require('@hikyu/async');
wait();

// Deconstructed require
const { sleep, .. } = require('@hikyu/async');
sleep(1, 10);
```

## Functions
- [General](#general)
    - [Sleep 💤](#sleep)

### General

#### Sleep

```js
console.log("Sleep for 3 seconds 😴");

// Wait for 2 seconds
await sleep();

// Wait for 1 second
await sleep(1000)

console.log("I'm done sleeping 👋");
```

### Requests

#### Get
> Only Https at the moment.
```js
//
get('api.example.com/todo/1'); // > <pending> json output
```