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

const treeSum_BFT = (root) =>{
    if (root === null) return 0;
    let sum = 0;
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        sum += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return sum;
}

console.log('Sum BFT: '+treeSum_BFT(a));

const treeSum_DFT = (root) =>{
    if(root === null) return 0;
    return root.val + treeSum_DFT(root.left) 
            + treeSum_DFT(root.right);
}

console.log('Sum DFT: '+treeSum_DFT(a));