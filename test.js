/**
 *
 * problems statment
 *
 * assume html structure
 *
 *
 * irregardless of structure of array find value based on id
 *
 *
 *
 * */

const htmlStructure = [
  {
    id: 1,
    value: "div1",
    children: [
      {
        id: 5,
        value: "test5",
        children: [
          {
            id: 6,
            value: "d",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    value: "div2",
    children: [],
  },
  {
    id: 3,
    value: "p3",
    children: [
      {
        id: 4,
        value: "test4",
        children: [],
      },
    ],
  },
];

/**
 * Eg
 * ID = 3, value :p
 * ID = 5, value: span
 * @param {*} id
 * @returns
 */

// Object.keys(htmlStructure).forEach((id) => {
//   console.log(id, htmlStructure[id]);
// });

const getElementByid = (arr, id) => {
  /**
     *  find value in object inside array irregardless of however nested it is
     * using recursion find by id and return value within
     *   {
        id: 3,
        value: "p3",
        children: [
            {
                id: 4,
                value: "test4",
                children: [],
            },
        ],
    },
    
    * returning id of 3 = "p3"
      returning id of 5 = "test4" 

     */

  // for (i = 0; i < htmlStructure[i].length; i++) {
  // to iterate through array
  for (let obj of arr) {
    if (obj.id === id) {
      // if id is matched return value
      return obj.value;
    }
    if (obj.children) {
      let search = getElementByid(obj.children, id);
      if (search) {
        return search;
      }
    }
  }
  return undefined; //the issue regarding the for loop not iterating correctly was because undefined was returned inside the for loop when it should have been outside the loop
  // therefore the only change was needed was moving the return to be outside the loop
};
console.log(getElementByid(htmlStructure, 2));
