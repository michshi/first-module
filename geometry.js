// With node, require there to be this file, inferred to be .js, that has this module exports, assign the value of module exports and put it in to this const name
const volume = require('./volume')

console.log(volume.torusVolume(4, 3))
console.log(volume.sphereVolume(1))
