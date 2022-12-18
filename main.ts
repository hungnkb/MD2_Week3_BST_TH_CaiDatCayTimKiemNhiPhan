import { BinaryTree } from "./src/BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);

console.log(`The number of nodes ${tree.totalNode}`)
tree.inorder(tree.root)

// console.log(tree.getSize())
// console.log(tree.root)