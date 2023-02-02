class Stack {
	constructor() {
		this.stack = [];
	}

	find(element) {
		return this.stack.indexOf(element);
	}

	push(element) {
		this.stack.push(element);
	}

	pop() {
		return this.stack.pop();
	}

	size() {
		return this.stack.length;
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}