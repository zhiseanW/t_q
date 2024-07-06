const schedules = [
  { x: 5, y: 8 },
  { x: 10, y: 5 },
  { x: 12, y: 8 },
  { x: 5, y: 9 },
  { x: 6, y: 10 },
  { x: 9, y: 8 },
];
const startX = 10;
const startY = 10;
//Distance is calculated by |(x1-x2)| + |(y1-y2)|
/*
 * above calculation should be represented by Math.abs
 * Math.abs(x1 -x2) + Math.abs(y1-y2)
 * Formula is used for calculating manhattan distance
 */

//starting input will not always be the same

const sortSchedules = () => {
  //The Schedules should be in order based on optimised distance
  //   return optimisedSchedules

  //Define Variables to be used
  let sx = startX; // sx for x1
  let sy = startY; // sy for y1
  let dSchedules = [...schedules]; // duplicating the array to allow changes to it
  let optimizedSchedules = []; // new array for final sorted output

  console.log();
  // A while loop to iterate through the duplicate array until there are no more objects to process
  while (dSchedules.length > 0) {
    let startIndex = 0;
    let closerDistance =
      Math.abs(sx - dSchedules[0].x) + Math.abs(sy - dSchedules[0].y);

    // loop through array and iterate through to access object
    for (let i = 1; i < dSchedules.length; i++) {
      const optimalDistance =
        Math.abs(sx - dSchedules[i].x) + Math.abs(sy - dSchedules[i].y);

      // using an if statement, check if the closerDistance is greater that the optimalDistance
      if (optimalDistance < closerDistance) {
        closerDistance = optimalDistance;
        startIndex = i;
      }
    }

    // this will get the nearest distance, also removing it from the placeholder array
    // this is important as after all schedules have been processed this will terminate the while loop
    let newStartpoint = dSchedules.splice(startIndex, 1)[0];

    //insert as an element in the new array
    optimizedSchedules.push(newStartpoint);

    // set start points to the newest value
    sx = newStartpoint.x;
    sy = newStartpoint.y;
  }
  //iterate until array is complete and returns
  return optimizedSchedules;
};

//console log to trigger function
console.log(sortSchedules(startX, startY));

// input is x and y
// output is the closest object to the starting input
// after which the previous output becomes the new starting point
// which then looks again for the closest object and again finds the closest object
// this continues until the array has been fully iterated
// final output is a sorted array

/*
 * Noteable edge case that have appeared:
 *
 * as the array is processed starting from index 0,
 * even if two distances are the exact same distance away,
 * the nearest selected distance will the next index object should it fufill requirement
 *
 */
