// Get elements
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const nameDisplay = document.getElementById('nameDisplay');
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const themeToggle = document.getElementById('themeToggle');

// Counter state
let count = 0;
let isDarkMode = false;

// Handle name submission
submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    
    nameDisplay.textContent = name;
    output.classList.remove('hidden');
    nameInput.value = '';
    nameInput.focus();
});

// Allow Enter key to submit
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

// Counter functions
increaseBtn.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});

decreaseBtn.addEventListener('click', function() {
    count--;
    counterDisplay.textContent = count;
});

// Dark mode toggle
themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add('dark');
        document.body.classList.remove('bg-gradient-to-br', 'from-slate-50', 'to-slate-100');
        document.body.classList.add('bg-gray-900');
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        document.body.classList.remove('dark', 'bg-gray-900');
        document.body.classList.add('bg-gradient-to-br', 'from-slate-50', 'to-slate-100');
        themeToggle.textContent = '🌙 Dark Mode';
    }
});
