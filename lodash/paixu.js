//冒泡排序
function  swap(ary,a,b) {
  var tmp
  tmp = ary[a]
  ary[a] = ary[b]
  ary[b] = tmp 
}

function sort(ary) {
  var l = ary.length
  for(var i = l - 1; i >= 1; i--) {
    var swaped = false
    for(var j = 0; j < i; j++) {
      if(ary[j] > ary[j + 1]) {
      swap(ary, j, j + 1)
      swaped = true
      }      
    }
    if(!swaped) {
      return ary
    }
  }
  return ary
}

function selectSort(ary) {
  for(var i=0; i<ary.length; i++) {
    if(ary[i]) {
      
    }
  }
}

function insert(root, val) {
  if(!root) {
    return {
      val: val,
      left: null,
      right: null,
    }
  }
  root.value=val
  root.left=insert()
  root.right=insert()
}