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

function minimumTreeValue(root){
    if(root == null ) return 'Empty tree cannot be evaluated';

    let min = root.val;
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();

        if(current.val < min) min = current.val;
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return min;
}

console.log('Minimun value : '+minimumTreeValue(a));

function minTreeValue_DFT(root){
    if (root === null) return Infinity;
    const minLeft = minTreeValue_DFT(root.left);
    const minRight = minTreeValue_DFT(root.right);
    return Math.min(root.val, minLeft, minRight);
}

console.log('Minimun value DFT: '+minTreeValue_DFT(a));