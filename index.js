class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new Node(element);
        var currunt;

        if (this.head == null) {
            this.head = node;
        } else {
            currunt = this.head;

            while (currunt.next) {
                currunt = currunt.next;
            }

            currunt.next = node;
        }
        this.size++;
        console.log(currunt, "currunt | currunt");
        console.log(this.size, "SIZE");
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter a valid index.");
        }

        // Creates a new Node
        const node = new Node(element);
        let currnt, previous;

        currnt = this.head;

        // add the element to the fiest element
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            currnt = this.head;
            let it = 0;

            while (it < index) {
                it++;
                previous = currnt;
                currnt = currnt.next;
            }

            // Adding an element
            node.next = currnt;
            previous.next = node;
        }
        this.size++;
        console.log(node, ":node");
        console.log(this.size, ":size");
    }
}

const list = new LinkedList();
list.add(12)
list.add(13)
list.add(14)
list.add(15)
list.add(16)
list.insertAt(20, 2);