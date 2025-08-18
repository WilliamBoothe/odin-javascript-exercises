const removeFromArray = function (arrayToSearch, ...itemsToRemove) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (itemsToRemove.includes(arrayToSearch[i])) {
      arrayToSearch.splice(i, 1);
      i--;
    }
  }

  return arrayToSearch;
};

// Do not edit below this line
module.exports = removeFromArray;
