class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating leaf nodes
const head = new Leaf(5);
head.left = new Leaf(3);
head.right = new Leaf(8);
head.left.left = new Leaf(1);
head.left.right = new Leaf(4);
head.right.left = new Leaf(7);
head.right.right = new Leaf(10);
head.left.left.left = new Leaf(0);
head.right.right.left = new Leaf(9);
head.right.right.right = new Leaf(12);

// Function to visualize search process step by step with a timer
function visualizeSearchStepByStepWithTimer(nodes) {
    const visualization = document.getElementById('visualization');
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < nodes.length) {
            visualization.textContent = "Visualization: " + nodes.slice(0, index + 1).join(' '); // Clear and update visualization
            index++;
        } else {
            clearInterval(intervalId); // Stop the timer when all nodes are visited
        }
    }, 1000); // Adjust the delay (in milliseconds) between each step
}

// Depth First Search
function depthFirstSearch(node = head, visited = new Set(), order = []) {
    if (node && !visited.has(node)) {
        visited.add(node);
        order.push(node.value);
        visualizeSearchStepByStepWithTimer(order); // Visualize each step
        depthFirstSearch(node.left, visited, order);
        depthFirstSearch(node.right, visited, order);
    }
}

// Breadth First Search
function breadthFirstSearch() {
    let queue = [head];
    let visited = new Set();
    let order = [];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node && !visited.has(node)) {
            visited.add(node);
            order.push(node.value);
            visualizeSearchStepByStepWithTimer(order); // Visualize each step
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function () {
    const depthButton = document.querySelector('#depth-btn');
    depthButton.addEventListener('click', function () {
        document.getElementById('visualization').textContent = "Visualization: ";
        depthFirstSearch();
    });

    const breadthButton = document.querySelector('#breadth-btn');
    breadthButton.addEventListener('click', function () {
        document.getElementById('visualization').textContent = "Visualization: ";
        breadthFirstSearch();
    });
});
