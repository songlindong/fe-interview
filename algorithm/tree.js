// 树结构
// 前序遍历(中左右) - 5412678
// 中序遍历(左中右) - 1425768
// 后序遍历(左右中) - 1247865

// 数据结构的体现
const respons = [{
    name: 'root',
    value: 5,
}]

// 遍历二叉树
class Node {
   constructor(node) {
    this.left = node.left;
    this.right = node.right;
    this.value = node.value;
   }
}


// 前序遍历
const PreOrder = function(node) {
    if(node !== null) {
        console.log(node.value);
        PreOrder(node.left);
        PreOrder(node.right);
    }
}
// 中序遍历
const InOrder = function(node) {
    if(node !== null) {
        PreOrder(node.left);
        console.log(node.value);
        PreOrder(node.right);
    }
}
// 后序遍历
const PostOrder = function(node) {
    if(node !== null) {
        PreOrder(node.left);
        PreOrder(node.right);
        console.log(node.value);
    }
}

// 面试题 - 搜索二叉树 / 查找二叉树
// 1. 左子树非空时， 左节点所有值都要小于根节点 => 提供判断条件
// 2. 右子树非空时，右节点所有值大于根节点 => 提供判断条件
// 3. 左右子树分别都是一个搜索二叉树 => 递归

function findNode(root, value) {
   if (root === undefined || root === null) {
     return null;
   }

   if (root.value > value) {
     return findNode(root.leftNode, value);
   }

   if (root.value > value) {
     return findNode(root.rightNode, value);
   }

   if (root.value === value) {
     return root;
   }
}

//