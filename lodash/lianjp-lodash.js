var lianjp = {
  chunk: function(array, size) {
    var ary1=array.slice()
    var ary2=[]
    for(i=0;i<=ary1.length;i++) {
      if(ary1!=0) {
        ary2.push(ary1.splice(0,size))
      }
    }
    return ary2
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

  difference: function (array,...values) { 
    var ary=[].concat(...values)
    return array.filter(item => !ary.includes(item))
  },

  // differenceBy: function(array, ...values) {
  //   if(typeof values[values.length-1] == "function") {
       
  //   }
  //   var ary=[].concat(...values)
  //   var l=ary.length
  //   var ary2=[]
  //   var l2=array.length
  //   var ary3=[]
  //   for(i=0;i<l2;i++) {
  //     ary2.push(iteratee(array[i]))
  //   }
  //   for(i=0;i<l;i++) {
  //     ary3.push(iteratee(array[i]))
  //   }
  //   return ary2.filter(item => !ary3.includes(item))    
  // },

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
    return -1
  },

  initial: function(array) {
    var l=array.length
    var ary=[]
    for(i=0;i<l-1;i++) {
      ary[i]=array[i]
    }
    return ary
  },

  intersection: function(array,...arrays) {
    var ary=[].concat(...arrays)
    return array.filter(item => ary.includes(item))
  },

  formPairs: function (pairs) {

    var obj = {}
        
    pairs.forEach(function(item,index) 

    {obj[pairs[index][0]] = pairs[index][1]}
    )
    
    return obj             
  },
  // reduce: function (ary, reduce, initialValue) {
  //   for(var i=0;i<ary.length;i++) {
  //     initialValue = reduce(initialValue,ary[i])
  //   }
  //   return initialValue
  // },

  join: function (array,separator = ',') {
    var ary=""
    for(i=0;i<array.length;i++) {
      if(i<array.length-1) {
        ary=ary+array[i]+separator
      }      
      if(i===array.length-1) {
        ary=ary+array[i]
      }
    }
    return ary
  },

  last: function (array) {
    return array[array.length-1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length-1) {
    if(fromIndex<0 && Math.abs(fromIndex)>value) {
      return -1
    }
    if(fromIndex>0) {
      for(i=fromIndex; i>0; i--) {
      if(array[i]===value) {
        return i
      }
      }
    }else if(fromIndex<0) {
      for(j=array.length+fromIndex; j>0; j--) {
        return j
      }
    }
    
    return -1
  },

  nth: function (array, n = 0) {    
    if(n>0) {      
      return array[n]      
    }else if(n<0) {
      return array[array.length+n]
    }
  },

  sum: function (array) {
    sum=0
    for(i=0;i<array.length;i++) {
      sum += array[i]
    }
    return sum
  },

  identity: function (v) {
    return v
  },

  sumBy: function (ary,iteratee = lianjp.identity) {
    var result = 0
    for(i=0;i<ary.lenght;i++) {
      result += iteratee(ary[i])          
    }
    return result
  },

  ceil: function (number, precision = 0) {
    var quan=10**precision
    number=Math.ceil(number*quan)
    number=number/quan
    return number
  },

  divide: function (dividend, divisor) {
    return dividend/divisor
  },

  flatten: function (array) {
    var result=[]
    for(i=0;i<array.length;i++) {
      if(!Array.isArray(array[i])) {
        result.push(array[i])
      }else {
        for(var j = 0;j<array[i].length; j++) {
          result.push(array[i][j])
        }
      }
    }
    return result  
  },

  flattenDeep: function (array) {
    var result = []
    for(var i=0;i<array.length;i++) {
      if(Array.isArray(array[i])) {
        var tmp = lianjp.flattenDeep(array[i])
        result = [...result, ...tmp]
      } else {
        result.push(array[i])
      }
    }
    return result
  },

  flattenDepth: function (array, depth = 1) {
    if(depth === 0) {
      return array.slice()
    }

    var result = []

    for(var i=0;i<array.length;i++) {
      if(Array.isArray(array[i])) {
        var tmp = lianjp.flattenDepth(array[i], depth-1)
        result = [...result, ...tmp]
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  
  formPairs: function (...pairs) {
    var obj={}
    for(i=0; i<arguments.length; i++) {
      obj[arguments[i][0]]=arguments[i][1]
    }
    return obj
  },

  spread: function (func) {
    return  function (ary) {
      return func.apply(null,ary)
    }
  },

  negate: function (func) {
    return function(...args) {
      return !func(...args)
    }
  },

  pull: function(array, ...values) {
    var ary=[].concat(...values)
    return array.filter(item =>  !ary.includes(item))    
  },

  reverse: function(array) {
    let l=array.length
    let ary=[]
    for(i=l-1;i>=0;i--) {
      ary.push(array[i])
    }
    return ary
  },

  slice: function(array, start = 0, end = array.length) {
    let ary=[]
    for(i=srart;i<end;i++) {
      ary.push(array[i])
    }
    return ary
  },

  sortedIndex: function(array, value) {
    let l=array.length
    for(i=0;i<l;i++) {
      if(value<=array[i]) {
        return i
      }
    }
  },

  uniq: function(array) {
    let l=array.length
    let ary=[]
    for(i=0;i<l;i++) {
      if(ary.indexOf(array[i]) == -1) {
        ary.push(array[i])
      }
    }
    return ary
  },

  union: function(arrays) {
    let ary = []
    let l = arguments.length
    for(i=0;i<l;i++) {
      let l2 = arguments[i].length
      for(j=0;j<length;j++) {
        if(ary.indexOf(arguments[i][j]) == -1) {
          ary.push(arguments[i][j])
        }
      }
    }
    return ary
  },

  property: function(path) {
    return function(obj) {
      return obj.path
    }
  },

  camelCase: function(string = '') {
    let str = string.replace(/\w/g,function(str) {
      return str.toLowerCase()
    }).replace(/\b[a-zA-Z]|(?<=_)[A-Za-z]/g,function(str) {
      return str.toUpperCase()
    }).replace(/[-_]|\s/g,'').replace(/\b\w/,function(str) {
      return str.toLowerCase()
    })
    return str
  },

  capitalize: function(string = '') {
    let str = string.replace(/\w/g,function(str) {
      return str.toLowerCase()
    }).replace(/\b\w/,function(str) {
      return str.toUpperCase()
    })
    return str
  },

  endsWith: function(string = "", target, position = string.length) {
    if(string.charAt(position-1) == target) {
      return true
    }else {
      return false
    }
  },

  kebabCase: function(string = "") {
    let str = string.replace(/(?<=[a-z])(?=[A-Z])|\s|(?<=[A-Z])_(?=[A-Z])/g,'-').replace(/\w/g,function (str) {
      return str.toLowerCase()
    }).replace(/[_ ]/g,'')
    return str
  },

  lowerCase: function(string = "") {
    let str = string.replace(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])_(?=[A-Z])|(?<=[a-z])-(?=[A-Z])/g,' ').replace(/\w/g,function (str) {
      return str.toLowerCase()
    }).replace(/[-_]/g,'')
    return str
  },

  lowerFirst: function(string = "") {
    return string.replace(/\b[A-Z]/,function(str) {
      return str.toLowerCase()
    })
  },

  pad: function(string = "", length = 0, chars = " ") {
    let l=string.length
    if(l>length) {
      return string
    }else if(l<length) {
      
    }
  },

  padEnd: function(string = "", length = 0, chars = " ") {
    let str = ''
	  if(string.length >= length) {
      return string
    }else if(string.length < length) {
      do {
        string = string + chars
      }while(string.length < length)
    }     
    if(string.length > length) {
     str = string.slice(0,length)
    }else if(string.length = length) {
      return string
    }
    if(str.length = length) {
      return str
    }
  }

  // escape: function(string = "") {
  //   let str = string.replace()
  // }

  // includes: function(collection, value, fromIndex = 0) {
    
  // }
    
}