// state
var sum;

// cached elements
var sumEl = document.getElementById('sum');
var inputEl = document.getElementById('input');
var addEl = document.getElementById('add');
var subtractEl = document.getElementById('subtract');

// event listeners
document.getElementById('add').addEventListener('click', handleAdd);

document.getElementById('subtract').addEventListener('click', handleSubtract);

//functions
init();

function init() {
	sum = 0;

	render();
}

function render() {
	sumEl.textContent = sum;
	console.log(Math.sign(sum));
}

function handleAdd(event) {
	var inputValue = document.getElementById('input').value;
	valueNum = parseInt(inputValue, 10);
	sum = valueNum + sum;

	render();
}

function handleSubtract(event) {
	var inputValue = document.getElementById('input').value;
	valueNum = parseInt(inputValue, 10);
	sum = sum - valueNum;
	render();
}
