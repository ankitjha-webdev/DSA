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
            element = this.head;

            while (element.next) {
                element = element.next;
            }

            element.next = node;
            console.log(element, "ELemebnt");
        }
        this.size++;
        console.log(this.size, "Size");
    }
}

const list = new LinkedList();

list.add(10);
list.add(5);
list.add(50);
list.add(30);