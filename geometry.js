// With node, require there to be this file, inferred to be .js, that has this module exports, assign the value of module exports and put it in to this const name. The destructing syntax below says to node to find these keys in the object and grabs the keys which assigns those keys to the function
const {sphereVolume, torusVolume } = require('./volume')

console.log(torusVolume(4, 3))

console.log(sphereVolume(1))
