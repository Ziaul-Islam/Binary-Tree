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

// const depthFirstSearch = (root) =>{
//     if(root === null) return [];

//     const result = [];
//     const stack = [root];
//     while(stack.length > 0){
//         const current = stack.pop();
//         result.push(current.val);

//         if(current.right) stack.push(current.right);
//         if(current.left) stack.push(current.left);
//     }
//     return result;
// }

const depthFirstSearch_recursive = (root) =>{
    if(root === null) return [];

    const leftValues = depthFirstSearch_recursive(root.left); 
    const rightValues = depthFirstSearch_recursive(root.right);
    return [root.val, ...leftValues, ...rightValues];
}


//console.log(depthFirstSearch(a));
console.log(depthFirstSearch_recursive(a));

