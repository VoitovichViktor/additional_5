module.exports = function check(str, bracketsConfig) {
  var left = [];
  var right = [];
  var arr = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    for (var j = 0; j < bracketsConfig[i].length; j++) {
      if (j == 0) {
        left.push(bracketsConfig[i][j]);
      } else {
        right.push(bracketsConfig[i][j]);
      }
    }
  }
  
  for (var i = 0; i < str.length; i++) {
    if (i == 0 && belong(str[i], left)) {
      arr.push(str[i]);
    } 

    if (belong(str[i], left) && i != 0 && str[i] != arr[arr.length-1]) {
      arr.push(str[i]);
    } else if (isClosed(arr[arr.length-1], str[i], left, right) && i != 0) {
      arr.pop();
    } else if (i != 0){
      arr.push(str[i]);
    }

  }

  if (arr.length > 0) {
    return false;
  } else {
    return true;
  }

}

function belong (val, arr) {
  for (var i = 0; i < arr.length; i++) {
    if(val == arr[i]) {
      return true;
    }
  }

  return false;
};

function isClosed (l, r, arrL, arrR) {
  var iL, iR;

  for (var i = 0; i < arrL.length; i++) {
    if (l == arrL[i]) {
      iL = i;
    }
  }

  for (var i = 0; i < arrR.length; i++) {
    if (r == arrR[i]) {
      iR = i;
    }
  }

  if (iR == iL) {
    return true;
  } 

  return false;
};