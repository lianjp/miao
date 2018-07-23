
// 把一颗由数组保存的完全二叉树转换为二叉链表
function array2tree(ary, rootIndex) {
  if(ary[rootIndex] == null) {
    return null
  }
  var rootNode = {
    val: ary[rootIndex],
    left: null,
    right: null,
  }

  var leftRootIndex = rootIndex * 2 + 1
  var rightRootIndex = rootIndex * 2 + 2
  
  var leftTree = array2tree(ary, leftRootIndex)
  var rightTree = array2tree(ary, rightRootIndex)

  rootNode.left = leftTree
  rootNode,right = rightTree

  return rootNode
}

function array2tree(ary, rootIndex) {
  if(ary[rootIndex] == null) {
    return null
  }
  return {
    val: ary[rootIndex],
    left: array2tree(ary, rootIndex * 2 + 1),
    right: array2tree(ary, rootIndex * 2 + 2),
  }
}

//把一颗由二叉链表表示的二叉树转换为由顺序存储表达的二叉树
var result = []
function tree2array(rootNode, rootIndex = 0) {
  if(!rootNode) {    
    return result
  }

  result[rootIndex] = rootNode.val

  var leftRootIndex = rootIndex * 2 + 1 
  var rightRootIndex = rootIndex *2 + 2

  tree2array(rootNode.left, leftRootIndex)
  tree2array(rootNode.right, rightRootIndex)

  return result  
}

//
function condensedArray2Tree(ary) {
  if(ary.length === 0) {
    return null
  }
  var queue = []
  var root = {
    val: ary[0],
    left: null,
    right: null,
  }

  queue.push(root)

  for(var i = 1;i < ary.length;i++) {
    node = queue.shift()
    if(ary[i] != null) {
      node.left = {
        val: ary[i],
        left: null,
        reight: null,
      }
      queue.push(node.left)
    }

    i++

    if(ary[i] != null) {
      node.right = {
        val: ary[i],
        left: null,
        reight: null,
      }
      queue.push(node.right)
    }
  }
  return root
}

//
function tree2condensedArray(root) {
  if(!root) {
    return []
  }
  var result = [root.val]

  var queue = [root]
  var node
  while (queue.length > 0) {
    node = queue.shift()
    if(node.left) {
      result.push(node.left.val)
      queue.push(node.left)
    } else {
      result.push(null)
    }

    if(node.right) {
      result.push(node.right.val)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }

  return result
}

//先序遍历
function preOrderTraverse (root) {
  if(root) {
    console.log(root.val)
    preOrderTraverse(root.left)
    preOrderTraverse(root.right)
  }
}

//中序遍历
function inOrderTraverse (root) {
  if(root) {
    inOrderTraverse(root.left)
    console.log(root.val)
    inOrderTraverse(root.right)
  }
}

//后序遍历
function inOrderTraverse (root) {
  if(root) {
    inOrderTraverse(root.left)
    inOrderTraverse(root.right)
    console.log(root.val)
  }
}

//遍历并对数组传函数已进行相应操作
function preOrderTraverse (root, action) {
  if(root) {
    action(root.val)
    preOrderTraverse(root.left, action)
    preOrderTraverse(root.right, action)
  }
}