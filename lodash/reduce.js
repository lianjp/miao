function reduce(ary, reducer, initialValue) {
  var i = 0
  if (arguments.length === 2) {
    initialValue = ary[0]
    i = 1
  }

  for(;i<ary.length; i++) {
    initialValue = reducer(initialValue, ary[i], i, ary)    
  }
  return initialValue
}

function map(array, mapper) {
  return array.reduce(function(result, item, index, ary) {
      result.push(mapper(item, index, ary))      
      return result
  }, [])   
}

function filter(ary, test) {
  var result = []
  for(var i = 0;i<ary.length;i++) {
    if(test(ary[i])) {
      result.push(ary[i])
    }
  }
  return result
}

function filter(ary, test) {
  return array.reduce((result, item, index, ary) => {
    if(test(item, index, ary)) {
      result.push(item)
    }
    return result
  },[])
}


function property(propName) {
  return function(obj) {
    return obj[propName]
  }
}

function identity(v) {
  return v
}

function sum(ary) {
  return sumBy(ary, indentiy)
}

function sumBy(ary,iteratee) {
  var result = 0
  for(i=0;i<ary.lenght;i++) {
    result += iteratee(ary[i])          
  }
  return result
}

function matches(src) {
  return function(obj) {
    for(var key in src) {
      if(src[key] !== obj[key]) {
        return false
      }
    }
    return true
  }    
}

function matchesProperty(ary) {
  return function(obj) {
    for(var i = 0;i<ary.length; i += 2) {
      var key = ary[i]
      var val = ary[i+1]
      if(obj[key] !== val) {
        return false
      }
    }
    return true
  }
}

function flatten(ary) {
  var result=[]
  for(i=0;i<ary.length;i++) {
    if(!Array.isArray(ary[i])) {
      result.push(ary[i])
    }else {
      for(var j = 0;j<ary[i].length; j++) {
        result.push(ary[i][j])
      }
    }
  }
  return result  
}

function flatten2(ary) {
    return ary.reduce(function(result, item) {
      if(Array.isArray(item)) {
        for(var i=0;i<item.length; i++) {
          result.pish(item[i])
        }
      }else {
        result.push(item)
      }
      return result
    }, [])
  }

  function flattenDeep(ary) {
    var result = []

    for(var i=0;i<ary.length;i++) {
      if(Array.isArray(ary[i])) {
        var tmp = flattenDeep(ary[i])
        result = [...result, ...tmp]
      } else {
        result.push(ary[i])
      }
    }
    return result
  }

  function flattenDepth (ary, depth) {
    if(depth === 0) {
      return ary.slice()
    }

    var result = []

    for(var i=0;i<ary.length;i++) {
      if(Array.isArray(ary[i])) {
        var tmp = flattenDeep(ary[i], depth-1)
        result = [...result, ...tmp]
      } else {
        result.push(ary[i])
      }
    }
    return result
  }