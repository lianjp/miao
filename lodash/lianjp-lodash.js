var lianjp = {
  chunk: function(array, size) {

  },

  compact: function (array) {
    var ary=array.slice()
    var l=ary.length
    for(i=0;i<l;i++) {
      if(ary[i]===false||ary[i]===null||ary[i]===0||ary[i]===""||ary[i]===''||ary[i]===null||isNaN(ary[i])) {
        ary.splice(i,1)
        l=l-1
        i=i-1
      }
    }
    return ary
  },

  drop: function (array,n = 1) {
    var ary=[]
    var l=array.length
    for(i=0;i<l-n;i++) {
      ary[i]=array[i+n]
    }
    return ary
  },

  dropRight: function (array,n = 1) {
    var ary=[]
    var l=array.length
    for(i=0;i<l-n;i++) {
      ary[i]=array[i]
    }
    return ary
  },

  fill: function(array, value, start = 0, end = array.length) {
    var ary=array.slice()
    for (i=start;i<end;i++) {
      ary[i]=value
    }
    return ary
  },

  head: function(array) {
    return array[0]
  },

  indexOf: function(array,value,fromIndex = 0) {
    for(i=fromIndex;i<array.length;i++) {
      if(array[i]===value) {
        return i
      }
    }
  },

  initial: function(array) {
    var l=array.length
    var ary=[]
    for(i=0;i<l-1;i++) {
      ary[i]=array[i]
    }
    return ary
  },

  intersection:([arrays])
    
}