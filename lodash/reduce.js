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

  //7/19
  function keyBy(ary, key) {
    var obj={}
    for(var item of ary) {
      obj[item[key]] = item
    }
    return obj
  }

  function groupBy(ary, propName) {
    var map = {}
    for(var item of ary) {
      if (item[propName] in map) {
        map[item[propName]].push(item)
      } else {
        map[item[propName]] = [item]
      }
    }
    return map
  }

  function groupBy(ary, predicate) {
    var map = {}
    for(var item of ary) {
      var key = predicate(item)
      if (key in map) {
        map[key].push(item)
      } else {
        map[key] = [item]
      }
    }
    return map
  }

  function groupBy(ary, predicate) {
    return ary.reduce((map, item) => {
      var key = predicate(item)
      if(key in map) {
        map[key].push(item)
      }else {
        map[key] = [item]
      }
      return map
    },{})
  }

  function dnaShare(name) {
    if(name === null) {
      return 0
    }
    if(name === 'Pauwels van Haverbeke') {
      return 1
    }

    var peoplr = byName[name]
    if (!peoplr) {
      return 0
    }
    var from_mother = dnaShare(peoplr.mother) / 2
    var from_father = dnaShare(peoplr.father) / 2
    return form_mother + from_father
  }

  function bind(f) {
    var fixedArgs = []
    for(var o = 1; i < arguments.length; i++) {
      fixedArfs.push(arguments[i])
    }
    return function() {
      var args = []
      for(var i = 0; i<arguments.length; i++) {
        args.push(arguments[i])
      }
      return f.apply(null, fixedArgs.concat(args))
    }
  }

  function bind (f, ...fixedArgs) {
    return function(...args) {
      return f(...fixedArgs, ...args)
    }
  }

  function after(n, func) {
    var c=0
    return function(...args) {      
      c++
      if(c >= n) {
        return func(...args)
      }
    }
  }

  function before(n, func) {
    var c=0
    var lastResult
    return function(...args) {      
      c++
      if(c < n) {
        lastResult = func(...args)
      }
      return lastResult
    }
  }

  function ary(func, n = func.length) {
    return function(...args) {
      return func(...args.slice(0,n))
    }
  }

  function unary(func) {
    return function(value) {
      return func(value)
    }
  }

  function flip(func) {
    return function(...args) {
      return func(...args.reverse())
    }
  }

  function negate(func) {
    return function(...args) {
      return !func(...args)
    }
  }

  function spread (func) {
    return  function (ary) {
      return func.apply(null,ary)
    }
  }

  function includes(ary, val) {
    if (val !== val) {
      for(var i = 0; i<ary.length; i++) {
        if (ary[i] !== ary[i]) {
          return true
        }
      }
      return false
    }
  
    return ary.indexOf(val) !== -1
  }