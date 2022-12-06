function filterApiData(apiData, mandatoryKeys) {
  //console.log("API", apiData);
  //console.log("Keys", mandatoryKeys);
  let newArr = [];
  for (let i = 0; i < apiData.length; i++) {
    console.log(Object.keys(apiData[i]));
    Object.keys(apiData[i]);
    if (mandatoryKeys.every((item) => Object.keys(apiData[i]).includes(item))) {
      newArr.push(apiData[i]);
    }
  }
  return newArr;
}
