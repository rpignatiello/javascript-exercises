const removeFromArray = function() {
  let removed = arguments[0];
  let values = Array.from(arguments);
  for(let i = 0; i < removed.length; i++)
  {
    if(values.includes(removed[i]))
    {
      removed.splice(i, 1);
      i--;
    }
  }
  return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
