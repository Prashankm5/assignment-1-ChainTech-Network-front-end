document.addEventListener('DOMContentLoaded', function () {
    // Function to update the clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call

    // Function to update the date
    function updateDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('calendar').textContent = now.toLocaleDateString(undefined, options);
    }

    updateDate(); // Initial call

    // Handle form submission
    document.getElementById('user-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        addUserToTable(name, email);
        showNotification('User added successfully!');
        this.reset();
    });

    // Add user to the table
    function addUserToTable(name, email) {
        const tableBody = document.getElementById('user-table-body');
        const row = document.createElement('tr');
        row.innerHTML = `<td class="user-data-cell">${name}</td><td class="user-data-cell">${email}</td>`;
        tableBody.appendChild(row);
    }

    // Show notification
    function showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationMessage = document.getElementById('notification-message');
        notificationMessage.textContent = message;
        notification.style.animation = 'show-toast 8s';
        notification.style.bottom = '50%';
    }

    // Close notification
    window.closeNotification = function () {
        const notification = document.getElementById('notification');
        notification.style.animation = '';
        notification.style.bottom = '-100%';
    };
});
