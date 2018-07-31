function MyArray(...value) {
  var l=arguments.length
  for(i=0;i<l;i++) {
    this[i]=arguments[i]
  }
  this.length=l
}

MyArray.prototype = {

  push: function(...value) {
    var l=this.length   
    var l2=arguments.length
    var l3=l+l2
    for(i=l,j=0;i<l3;i++) {
      this[i]=arguments[j]
      this.length++
      j++
    }
    return this.length
  },

  concat: function(...val) {    
    var l=arguments.length
    for(j=0;j<l;j++) {      
      this.push(arguments[j])
    }
    return this
  },

  every: function(f) {
    var l=this.length
    for(i=0;i<l;i++) {
      if(f(this[i])){
        continue
      }else {
        return false
      }
    }
    return true
  },

  filter: function(f) {
    var ary=[]
    var l=this.length
    for(i=0;i<l;i++) {
      if(f(this[i])) {
        ary.push(this[i])
      }
    }
    return ary
  },

  forEach: function(f) {
    var l=this.length
    for(i=0;i<l;i++) {
      f(this[i],i,this)
    }
    return this
  },

  indexOf: function(value,start = 0) {
    var l=this.length
    for(i=start;i<l;i++) {
      if(this[i]===value) {
        return i
      }
    }
    return -1
  },

  join: function(separator = ',') {
    var str=this[0]
    l=this.length
    for(i=1;i<l;i++) {
      str=str+separator+this[i]
    }
    return str
  },

  lastIndexOf: function(value,start = 0) {
    var l=this.length
    for(i=l-1;i>=0;i--) {
      if(this[i]===value) {
        return i
      }
    }
    return -1
  },

  map: function(f) {
    var ary=[]
    l=this.length
    for(i=0;i<l;i++) {
      ary[i]=f(this[i])
    }
    return ary
  },

  pop: function() {
    var l=this.length    
    var a=this[l-1]    
    delete(this[l-1])
    this.length=l-1
    return a
  },



  reduce: function(f,initialValue = this[0]) {
    var l=this.length
    for(i=0;i<l;i++) {
      f(this[i])
    }
  },

  reduceRight: function() {

  },

  reverse: function() {
    var ary=new MyArray()
    var l=this.length
    for(i=l-1,j=0;i>=0;i--) {
      ary[j]=this[i]
      j++
    }
    for(j=0;j<l;j++) {
      this(j)=ary[j]
    }
  },

  shift: function(value) {
    var l=this.length
    var a=this[0] 
    for(i=0;i<l-1;i++) {
      this[i]=this[i+1]      
    } 
    delete(this[l-1])
    this.length=l-1
    return a  
  },

  slice: function(start = 0, end = this.length) {
    var ary=[]
    var l=this.length
    if(start<0 && end>0){
      start=l+start      
    }else if(start>0 && end<0) {
      end=l+end      
    }else if(start<0 && end<0){
      start=l+start
      end=l+end      
    }
    for(i=start,j=0;i<end;i++) {
      ary[j]=this[i]
      j++
    }
    
    return ary
  },

  some: function(f) {
    var l=this.length
    for(i=0;i<l;i++) {
      if(f(this[i])){
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
    var str=this[0]
    var l=this.length
    for(i=1;i<l;i++) {
      str=str+','+this[i]
    }
    return str
  },

  unshift: function(...value) {
    var ary=[...value]
    var l = this.length
    for(i=0;i<l;i++) {
      ary.push(this[i])
    }
    var l2=ary.length
    for(i=0;i<l2;i++) {
      this[i]=ary[i]
    }
    this.length=l2
    return this
  },


}

function MySet(ary) {
  
}