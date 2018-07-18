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
  return array.reduce((result, item, index, ary) => {
    if(test(item, index, ary)) {
      result.push(item)
    }
    return result
  },[])
}