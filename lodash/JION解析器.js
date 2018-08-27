var parse = function() {
  var i = 0
  return function parse(str) {
    i = 0
    return parseValue()
  }
  
  function parseValue() {
  let l =str.length
  for(var i=0;i<l;i++) {
    if(c === "{") {
      return parseObject()
    }
    if(c === "[") {
      return parseArray()
    }
    if(c === "t") {
      return parseTrue()
    }
    if(c === "f") {
      return parseFalse()
    }
    if(c === "n") {
      return parseNull()
    }
    if(c === '"') {
      return parseString()
    }
  }
}

function parseString() {
  for(var j = i+1; j++) {
    if ( srt[j] === '"') {
      break
    }
  }

  var result = str.slice(i + 1, j)
  i = j + 1
  return result
}

function parseTrue() {
  var token = str.slice(i, i + 4)
  if(token === 'true') {
    i = i + 4
    return true
  }else {
    throw new SyntaxError('unnexpeccted token at position' + i)
  }
}

function parseFalse() {
  var token = str.slice(i, i + 5)
  if(token === 'false') {
    i = i + 5
    return true
  }else {
    throw new SyntaxError('unnexpeccted token at position' + i)
  }
}

function parseNull() {
  var token = str.slice(i, i + 4)
  if(token === 'null') {
    i = i + 4
    return null
  }else {
    throw new SyntaxError('unnexpeccted token at position' + i)
  }
}

function parseArray() {
  i++
  var result = []
  var val
  if (str[i] === ']') {
    return result
  }

  while(true) {
    val = parseValue()
    result.push(val)
    if (str[i] === ',') {
      i++
      continue
    }else if (str[i] === ']') {
      i++
      return result
    }
  }
}

function parseObject() {
  i++
  if(str[i] === '}') {
    return {}
  }
  var result = {}
  while(true) {
    var key = parseString()
    i++
    var value = parseValue()
    result[key] = value
    if(str[i] === ',') {
      i++
      continue
    }else if(str[i] === '}') {
      i++
      return result
    }
  } 
}

function isNumeberChar(c) {
  if(c>= '0' && c<='9') {
    return true
  }
  if(c === '.' || c === '+' || c=== '-' || c === 'e' || c === 'E') {
    return true
  }
  return false
}

function parseNumber() {
  var j = i
  while(isNumeberChar(str[j])) {
    j++
  }
  var numString = str.slice(i,j)
  i = j
  return parseFloat(numString)
}
}()






var stringify = function(val) {
  if(Array.isArray(val)) {
    return '[' + val.map(stringify).join(',') + ']'    
  }else if(val === null) {
    return 'null'
  }else if(typeof val === 'object') {
    var result = '{'
    for(var k in val) {
      var v =val[k]
      result += `$[k]` + ':' + stringify(v) + ','
    }
    result = result.slice(0, -1) + '}' 
    return result   
  }else if (typeof val === 'boolean') {
    if (val) {
      return 'true'
    }else {
      return 'false'
    }
  }else if (typeof val === 'number') {
    return val.toString()
  }
}