class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.left = f;
c.right = g;

const postorderTraversal = (root) =>{

    if(root === null) return;

    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log("-> "+root.val);
}

postorderTraversal(a);