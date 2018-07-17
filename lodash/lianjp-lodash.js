var lianjp = {
  chunk: function(array, size) {

  },

  compact: function (array) {
    var l=array.length
    for(i=0;i<l;i++) {
      if(array[i]===false||array[i]===null||array[i]===0||array[i]===""||array[i]===''||array[i]===null||isNaN(array[i])) {
        array.splice(i,1)
        l=l-1
        i=i-1
      }
    }
    return array
  },

  drop: function (array,n = 1) {
    var ary=[]
    var l=array.length
    for(i=0;i<l-n;i++) {
      ary[i]=array[i+n]
    }
    return ary
  }
}