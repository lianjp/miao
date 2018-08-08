function parseJION(string) {
  let l =string.length
  for(var i=0;i<l;i++) {
    if(string[i] == "{") {
      return parseObject()
    }
    if(string[i] == "[") {
      return parseArray()
    }
    if(string[i] == "t") {
      return 
    }
    if(string[i] == "f") {

    }
    if(string[i] == "n") {
      
    }
  }
}