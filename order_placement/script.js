
// Sample data
const data = [
    { "S.NO": 1, "ORDER ID": "A736GAKDH2883HDSB92778HFHAH987", "VENDOR": "COKA-COLA", "STATUS": "TWM" },
    { "S.NO": 2, "ORDER ID": "A736GAKDHHUDB872GGGGGSUHAH987", "VENDOR": "TOFICO", "STATUS": "INS" },
    { "S.NO": 3, "ORDER ID": "A736GAKDH2883HDSB92778HFHAH987", "VENDOR": "COKA-COLA", "STATUS": "TWM" },
    { "S.NO": 4, "ORDER ID": "A736GAKDHHUDB872GGGGGSUHAH987", "VENDOR": "TOFICO", "STATUS": "INS" }
];

function insertDataIntoTable(data) {
    const tableBody = document.querySelector('#myTable tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}
insertDataIntoTable(data);




// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addInputBtn = document.getElementById('addInputBtn');
    const inputContainer = document.getElementById('inputContainer');

    const suggestions = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Papaya',
        'Quince',
        'Raspberry',
        'Strawberry',
        'Tomato',
        'Watermelon'
    ];

    function createAutocompleteInput() {
        const container = document.createElement('div');
        container.className = 'autocomplete';

        // Create input for product name
        const productInput = document.createElement('input');
        productInput.type = 'text';
        productInput.placeholder = 'Product';
        productInput.className = 'autocomplete-input';

        // Create input for quantity
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.placeholder = 'Quantity';
        quantityInput.className = 'quantity-input';

        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'suggestions-container';

        productInput.addEventListener('input', () => {
            const value = productInput.value.toLowerCase();
            suggestionsContainer.innerHTML = ''; // Clear previous suggestions

            if (value) {
                const filteredSuggestions = suggestions.filter(item =>
                    item.toLowerCase().includes(value)
                );

                filteredSuggestions.forEach(item => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.textContent = item;
                    suggestionItem.className = 'suggestion-item';
                    suggestionItem.addEventListener('click', () => {
                        productInput.value = item;
                        suggestionsContainer.innerHTML = ''; // Clear suggestions
                    });
                    suggestionsContainer.appendChild(suggestionItem);
                });
            }
        });

        container.appendChild(productInput);
        container.appendChild(quantityInput);
        container.appendChild(suggestionsContainer);
        inputContainer.appendChild(container);
    }

    addInputBtn.addEventListener('click', () => {
        createAutocompleteInput();
    });
});
