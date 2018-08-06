function Array(ary) {
  this.ary=ary
  
}

Array.prototype = {
  length: function(){
    var a=this.ary
    var count=0
    for(var item in a) {
      count++
    }
    return count
  },

  concat: function(...val) {    
    l=arguments.length
    for(j=0;j<l;j++) {      
      this.ary.push(arguments[j])
    }
    return this.ary
  },

  every: function(f) {
    l=this.length()
    for(i=0;i<l;i++) {
      if(f(this.ary[i])){
        continue
      }else {
        return false
      }
    }
    return true
  },

  filter: function(f) {
    var ary=[]
    l=this.length()
    for(i=0;i<l;i++) {
      if(f(this.ary[i])) {
        ary.push(this.ary[i])
      }
    }
    return ary
  },

  forEach: function(f) {
    l=this.length()
    for(i=0;i<l;i++) {
      this.ary[i]=f(this.ary[i])
    }
    return this.ary
  },

  indexOf: function(value,start = 0) {
    l=this.length()
    for(i=start;i<l;i++) {
      if(this.ary[i]===value) {
        return i
      }
    }
    return -1
  },

  join: function(separator = ',') {
    var str=this.ary[0]
    l=this.length()
    for(i=1;i<l;i++) {
      str=str+separator+this.ary[i]
    }
    return str
  },

  lastIndexOf: function(value,start = 0) {
    l=this.length()
    for(i=l-1;i>=0;i--) {
      if(this.ary[i]===value) {
        return i
      }
    }
    return -1
  },

  map: function(f) {
    var ary=[]
    l=this.length()
    for(i=0;i<l;i++) {
      ary[i]=f(this.ary[i])
    }
    return ary
  },

  pop: function() {
    var l=this.length()    
    var a=this.ary[l-1]
    this.ary.length=l-1
    return a
  },

  push: function(...value) {
    var l=this.length()    
    var l2=arguments.length
    var l3=l+l2
    for(i=l,j=0;i<l3;i++) {
      this.ary[i]=arguments[j]
      j++
    }
    return this.length()
  },

  reduce: function(f) {
    var l=this.length()
    for(i=0;i<l;i++) {
      
    }
  },

  reduceRight: function() {

  },

  reverse: function() {
    var ary=[]
    var l=this.length()
    for(i=l-1,j=0;i>=0;i--) {
      ary[j]=this.ary[i]
      j++
    }
    this.ary=ary
  },

  shift: function(value) {
    var l=this.length()
    var a=this.ary[0] 
    for(i=0;i<l-1;i++) {
      this.ary[i]=this.ary[i+1]      
    } 
    this.ary.length=l-1
    return a  
  },

  slice: function(start = 0, end = this.length()) {
    var ary=[]
    var l=this.length()
    if(start<0 && end>0){
      start=l+start      
    }else if(start>0 && end<0) {
      end=l+end      
    }else if(start<0 && end<0){
      start=l+start
      end=l+end      
    }
    for(i=start,j=0;i<end;i++) {
      ary[j]=this.ary[i]
      j++
    }
    
    return ary
  },

  some: function(f) {
    l=this.length()
    for(i=0;i<l;i++) {
      if(f(this.ary[i])){
        return true
      }else {
        continue
      }
    }
    return false
  },

  sort: function() {

  },

  splice: function(start,deleteCount,...value) {
    var l=this.ary.length()
    if(deleteCount !== 0 ) {
      for(i=start;i<=deleteCount;i++) {
        this.ary[i]=undefined
      }
      
      var ary=[...value]
      var l2=ary.length

      var num=deleteCount-start+1
      if(num>l2)
      for(j=start,k=0;j<l2;j++) {
        this.ary[j]=ary[k]
        k++
      }else {
        
      }      
    }
    
    
  },

  toLocaleString: function() {

  },

  toString: function() {
    var str=this.ary[0]
    var l=this.length()
    for(i=1;i<l;i++) {
      str=str+','+this.ary[i]
    }
    return str
  },

  unshift: function(...value) {
    var ary=[...value]
    var l = this.length()
    for(i=0;i<l;i++) {
      ary.push(this.ary[i])
    }
    this.ary=ary
    return this.length()
  },




}