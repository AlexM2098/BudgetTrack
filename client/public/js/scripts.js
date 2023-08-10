document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    form.addEventListener('submit', submitForm);
    fetchBudgetItems();
});

async function submitForm(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;

    const budgetItem = {
        title,
        amount,
        category,
        type
    };

    try {
        const response = await fetch('/api/budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(budgetItem)
        });

        if (response.status === 201) {
            fetchBudgetItems();  // Fetch all items again after adding a new one
            event.target.reset(); // Optionally reset the form
        } else {
            const responseData = await response.json();
            console.error('Error creating budget item:', responseData.message);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

function fetchBudgetItems() {
    fetch('/api/budget')
    .then(response => response.json())
    .then(data => {
        const itemsList = document.getElementById('items-list');
        itemsList.innerHTML = ''; // Clear the list first

        data.forEach(item => {
            addItemToList(item);
        });
    })
    .catch(error => console.error('Error fetching budget items:', error));
}

function addItemToList(item) {
    const itemsList = document.getElementById('items-list');
    const itemLi = document.createElement('li');

    itemLi.textContent = `${item.title} (${item.category}) - $${item.amount} [${item.type}]`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteBudgetItem(item._id);
    
    itemLi.appendChild(deleteBtn);
    itemsList.appendChild(itemLi);
}

async function deleteBudgetItem(id) {
    try {
        const response = await fetch(`/api/budget/${id}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            fetchBudgetItems();  // Fetch all items again after deleting one
        } else {
            const responseData = await response.json();
            console.error('Error deleting budget item:', responseData.message);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}
