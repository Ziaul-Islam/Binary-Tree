class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.right = f;

const maxSumPath = (root) => {
    if (root === null) return -Infinity;
    if ((root.left === null)&&(root.right === null)) return root.val;
    let maxSum = Math.max(maxSumPath(root.right), maxSumPath(root.left));
    return (root.val + maxSum);
}

console.log(maxSumPath(a));