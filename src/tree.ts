export class TreeNode {
  data: string;
  children: TreeNode[];

  constructor(data: string) {
    this.data = data;
    this.children = [];
  }
}

export class Tree {
  root: TreeNode;

  constructor(root: TreeNode) {
    this.root = root;
  }

  printTree(node: TreeNode = this.root, indent: string = ''): void {
    console.log(indent + node.data);
    for (const child of node.children) {
      this.printTree(child, indent + '  ');
    }
  }

  findLeafs(): TreeNode[] {
    const leafs: TreeNode[] = [];

    //DFS
    const stack: TreeNode[] = [this.root];
    while (stack.length > 0) {
      const current = stack.pop()!;
      if (current.children.length === 0) {
        leafs.push(current);
      } else {
        for (const child of current.children) {
          stack.push(child);
        }
      }
    }
    return leafs;
  }
}