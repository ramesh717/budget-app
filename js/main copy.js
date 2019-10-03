//showing and hiding adding section on click
let add = document.querySelector('#bottom-section .plus');
let addSection = document.querySelector('#add-section');
const addExit = document.querySelector('#add-section  .exit');
let totalBalance = document.querySelector('#total-balance-section span');
function openClose(e) {
	// if (e.target.classList.contains('plus')) {
	// }
	if (addSection.className === '') {
		addSection.className = 'active';
	} else {
		addSection.className = '';
	}
}
const balance = {
	totalBalance :1
}
totalBalance.textContent+=balance.totalBalance
add.addEventListener('click', openClose);
addExit.addEventListener('click', openClose);

//add section UI
const amountInput = document.querySelector('.add-income input[type="number"]');
const descriptionInput = document.querySelector(
	'.add-income input[type="text"]'
);

const AddBtn = document.querySelector('#add-section button.add-btn');
const DeductBtn = document.querySelector('#add-section button.deduct-btn');


function createElement() {
			////TRANSACTION section UI
			const transactionHolder = document.querySelector(
				'#transaction-section .transaction-holder'
			);
			const box = document.createElement('div');
			const description = document.createElement('div');
			const desH2 = document.createElement('h2');
			const span = document.createElement('span');
			const amntH2 = document.createElement('h2');
			const remove = document.createElement('i');
}
let controller = function (createElement) {
	
AddBtn.addEventListener('click', function() {
	createElement()

	if (amountInput.value === '' || descriptionInput.value == '') {
		alert('please enter a number');
	} else {

		//
		addSection.className = '';
		box.className = 'box';
		transactionHolder.appendChild(box);
		box.appendChild(description);
		description.className = 'box-description';
		description.appendChild(desH2);
		desH2.textContent = descriptionInput.value;

		transactionHolder.appendChild(span);
		amntH2.textContent = amountInput.value;
		box.appendChild(span);
		span.appendChild(amntH2);
		remove.className = 'far fa-times-circle remove';
		span.appendChild(remove);

		descriptionInput.value = '';
		amountInput.value = '';
		remove.addEventListener('click', function() {
			box.remove();
		});
	}
});
}

// for expenses
DeductBtn.addEventListener('click', function() {
	if (amountInput.value === '' || descriptionInput.value == '') {
		alert('please enter a number');
	} else {
		//TRANSACTION section UI
		const transactionHolder = document.querySelector(
			'#transaction-section .transaction-holder'
		);
		const box = document.createElement('div');
		const description = document.createElement('div');
		const desH2 = document.createElement('h2');
		const span = document.createElement('span');
		const amntH2 = document.createElement('h2');
		const remove = document.createElement('i');

		// createElements()
		addSection.className = '';
		box.className = 'box';
		transactionHolder.appendChild(box);
		box.appendChild(description);
		description.className = 'box-description red';
		description.appendChild(desH2);
		desH2.textContent = descriptionInput.value;
		// desH2.textContent = expensesDescription.value

		span.className = 'red';
		transactionHolder.appendChild(span);
		amntH2.textContent = amountInput.value;
		// amntH2.textContent = expensesAmount.value;
		box.appendChild(span);
		span.appendChild(amntH2);
		remove.className = 'far fa-times-circle remove';
		span.appendChild(remove);

		descriptionInput.value = '';
		amountInput.value = '';
		remove.addEventListener('click', function() {
			box.remove();
		});
	}
});

/*===============================
		slide menus
===============================*/

const slideMenu = document.querySelector('#slide-section');
const slideBtn = document.querySelector('#slide-section span i');
const slideOpenBtn = document.querySelector('#top-section .fa-bars');
slideBtn.addEventListener('click', function(e) {
	if (e.target.classList.contains('exit')) {
		slideMenu.className = 'active';
	} else {
		slideMenu.className = '';
	}
});

slideOpenBtn.addEventListener('click', function() {
	slideMenu.className = 'active';
});
//slide items buttons
const slidePlus = document.querySelector('#slide-section .slide-plus');
slidePlus.addEventListener('click', function() {
	openClose();
	slideMenu.className = '';
});
