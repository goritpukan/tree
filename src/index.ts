import { TreeNode, Tree } from './tree';

const root = new TreeNode('R');
const childrenA = new TreeNode('A');
const childrenB = new TreeNode('B');
const childrenC = new TreeNode('C');
const childrenD = new TreeNode('D');
const childrenE = new TreeNode('E');
const childrenF = new TreeNode('F');

childrenA.children.push(childrenB);
childrenA.children.push(childrenC);

childrenD.children.push(childrenE);
childrenE.children.push(childrenF);

root.children.push(childrenA);
root.children.push(childrenD);
const tree = new Tree(root);

tree.printTree()
console.log(tree.findLeafs());