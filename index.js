class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertRec(this.root, value);
    }

    insertRec(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertRec(node.right, value);
        }

        return node;
    }

    drawTree(canvasId) {
        let canvas = document.getElementById(canvasId);

        const context = canvas.getContext('2d');
        const radius = 20;

        context.clearRect(0, 0, canvas.width, canvas.height);

        this.drawNode(context, this.root, canvas.width / 2, 50, radius);
    }

    drawNode(context, node, x, y, radius) {
        if (node === null) {
            return;
        }

        console.log('Drawing node:', node.value, x, y, radius)

        // Draw the current node
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillText(node.value, x - 5, y + 5);

        // Draw left and right child nodes
        const offsetX = canvas.width / 6;
        const offsetY = 50;

        if (node.left !== null) {
            context.moveTo(x, y + radius);
            context.lineTo(x - offsetX + radius, y + offsetY);
            context.stroke();

            this.drawNode(context, node.left, x - offsetX, y + offsetY, radius);
        }

        if (node.right !== null) {
            context.moveTo(x, y + radius);
            context.lineTo(x + offsetX - radius, y + offsetY);
            context.stroke();

            this.drawNode(context, node.right, x + offsetX, y + offsetY, radius);
        }
    }
}

const canvas = document.getElementById('treeCanvas');

const binaryTree = new BinaryTree();

binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(14);
binaryTree.insert(4);
binaryTree.insert(7);

binaryTree.drawTree('treeCanvas');


// function visualizeTree() {
//     console.log("Visualizing the binary tree...");

//     const inputTextArea = document.getElementById('treeInput');
//     const inputData = inputTextArea.value;

//     // Parse the input data and build the binary tree
//     // Modify the logic according to the expected input format

//     // Example: Parse comma-separated values into an array
//     const values = inputData.split(',').map(value => parseInt(value.trim(), 10));

//     // Clear existing binary tree
//     const binaryTree = new BinaryTree();

//     // Insert elements into the binary tree
//     values.forEach(value => {
//         if (!isNaN(value)) {
//             binaryTree.insert(value);
//         }
//     });


//     // Draw the binary tree on the canvas
//     binaryTree.drawTree('treeCanvas');
// }