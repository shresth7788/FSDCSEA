document.addEventListener('DOMContentLoaded', () => {
    const numBulbsInput = document.getElementById('numBulbs');
    const generateBtn = document.getElementById('generateBtn');
    const lightbulbContainer = document.getElementById('lightbulbContainer');

    generateBtn.addEventListener('click', generateLightbulbs);

    function generateLightbulbs() {
        const numBulbs = parseInt(numBulbsInput.value);

        if (!isNaN(numBulbs) && numBulbs > 0) {
            lightbulbContainer.innerHTML = '';

            for (let i = 0; i < numBulbs; i++) {
                const bulbContainer = document.createElement('div');
                bulbContainer.className = 'lightbulb-container';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'lightbulb-checkbox';

                const label = document.createElement('label');
                label.className = 'lightbulb-label';

                bulbContainer.appendChild(checkbox);
                bulbContainer.appendChild(label);
                lightbulbContainer.appendChild(bulbContainer);
            }
        } else {
            alert('Please enter a positive integer.');
        }
    }
});

