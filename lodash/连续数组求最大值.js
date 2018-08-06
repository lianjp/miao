function find(ary,i,j) {
  if(i === j) {
    if(ary[i] > 0) {
      return ary[i]
    } else {
      return 0
    }
  }

  if(i > j) {
    return 0
  }

  var mid = (i + j) >> 1

  var leftMax = find(ary, i, mid)
  var rightMax = find(ary, mid+1, j)

  var crossMax = 0

  var crossLeftMax = 0
  var crossLeft = 0
  var crossRightMax = 0
  var crossRight = 0
  for(var k = mid; k >=i; k--) {
    crossLeft += ary[k]
    if(crossLeft > crossLeftMax) {
      crossLeftMax = crossLeft
    }
  }

  for(var k = mid+1; k <= j; k++) {
    crossRight += ary[k]
    if(crossRight > crossRightMax) {
      crossRightMax = crossRight
    }
  }

  crossMax = crossLeftMax + crossRightMax

  return Math.max(leftMax,rightMax,crossMax)
}

