function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
  
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }
  
  let mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }
  console.log("mainObj",mainObj);
  let newData = copy(mainObj);
  console.log("newData",newData);
  mainObj.c.y=5;
  console.log("mainObj2",mainObj);
  console.log("newData2",newData);