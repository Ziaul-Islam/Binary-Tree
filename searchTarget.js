class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.right = f;

const treeInclude_bfs = (root, target) => {
    if (root === null) return false;
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift(); // taking the element from front
        if (current.val === target ) return true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
} 

//console.log(treeInclude_bst(a, 'g'));

const treeInclude_dfs = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return treeInclude_dfs(root.left, target) || treeInclude_dfs(root.right, target); 
}

console.log(treeInclude_dfs(a, 'g'));