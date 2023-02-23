"use strict"

import data from '/dataDrons.json' assert { type: 'json' };

// const data = await import("/dataDrons.json", {
//     assert: {
//       type: "json",
//     },
//   })

  console.log(data);

  console.log(data.map-top-right-coordinate);

class Dron {

    constructor(coordinates) {
        console.log("hey");

        this.coordinates
    }

    // move();
}

class Coordinates {

    constructor(x, y) {

    }
}