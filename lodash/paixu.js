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


function partition(ary) {
  var pivotIndex = ary.length * Math.random() | 0
  var pivot = ary[pivotIndex]

  var i = -1, j=0

  swap(ary,pivotIndex,)

  for(;i<ary.length;i++) {
    for(;j<ary.length;j++) {
      if(ary[j]<pivot) {
        
      }
    }
  }
}

function mergeSort() {
  var mid =ary.length / 2 | 0
  var left = aty.slice(0, mid)
  var right = ary.slice(mid)

  
}