function zipStrings(strA, strB) {
  //console.log("strA", strA); a, abc, abc, "", a
  //console.log("strB", strB); b, 123, 1, 1, ""
  //.split().join(); map()
  //for loop
  let newZip = "";

  // for schleife für strings die gleich lang sind
  for (let i = 0; i < strA.length; i++) {
    newZip += strA[i];
    if (strB[i] !== undefined) {
      newZip += strB[i];
    }
    // console.log(newZip);

    //newZip += strA[i] +strB[i]
  }
  for (let u = 0; u < strB.length; u++) {
    if (strA[u] === undefined) {
      newZip += strB[u];
    }
  }
  return newZip;
}
