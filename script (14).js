const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = [];

function addTransaction() {
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Item ka naam aur amount dono daalna zaroori hai');
        return;
    }

    const transaction = {
        id: Math.floor(Math.random() * 100000000), // Random ID generate kar rahe hain
        text: text.value,
        amount: parseFloat(amount.value) // String ko number me convert karna
    };

    transactions.push(transaction);
    
    // UI update karo
    addTransactionDOM(transaction);
    updateValues();

    // Input fields wapas khali kar do
    text.value = '';
    amount.value = '';
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    // Class add karo amount ke hisaab se (minus/plus)
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

function updateValues() {
    // Array map se sirf amounts nikal lo
    const amounts = transactions.map(transaction => transaction.amount);
    
    // Reduce function se total calculate karo
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    // Sirf positive values filter karke income nikalo
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
        
    // Sirf negative values filter karke expense nikalo
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    // HTML elements me values update karo
    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}

function removeTransaction(id) {
    // Jo ID delete karni hai, usko chhod kar baaki sab filter kar lo
    transactions = transactions.filter(transaction => transaction.id !== id);
    
    // UI refresh karo
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}