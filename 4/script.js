// Sample data for the services table
const servicesData = [
    {
        service: "Car Cleaning",
        status: "recent",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "1.12.2024",
        time: "11:16 AM"
    },
    {
        service: "Carpet Cleaning",
        status: "recent",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "11:16 AM"
    },
    {
        service: "New Tires",
        status: "ongoing",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "11:16 AM"
    },
    {
        service: "Oil Filter Change",
        status: "approved",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "11:16 AM"
    },
    {
        service: "Carpet Cleaning",
        status: "pending",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "11:16 AM"
    },
    {
        service: "Window Cleaning",
        status: "not-started",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "01:05 PM"
    },
    {
        service: "Deep Cleaning",
        status: "completed",
        orderId: "0957746KJLY",
        trackingNumber: "Sheba-0523-001",
        date: "24.12.2024",
        time: "10:10 AM"
    }
];

// Function to populate the table
function populateTable() {
    const tableBody = document.getElementById('servicesTableBody');
    tableBody.innerHTML = '';

    servicesData.forEach(service => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${service.service}</td>
            <td><span class="status ${service.status.toLowerCase()}">${service.status}</span></td>
            <td>${service.orderId}</td>
            <td>${service.trackingNumber}</td>
            <td>
                ${service.date}
                <span class="time">${service.time}</span>
            </td>
            <td class="actions">
                <span class="material-icons">more_horiz</span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize the table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
});

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);

// Handle file input change
fileInput.addEventListener('change', handleFiles, false);

// Handle upload button click
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    dropZone.classList.add('highlight');
}

function unhighlight(e) {
    dropZone.classList.remove('highlight');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files instanceof FileList) {
        ([...files]).forEach(uploadFile);
    } else if (files instanceof Event) {
        ([...files.target.files]).forEach(uploadFile);
    }
}

function uploadFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
    }

    // Here you would typically send the file to your server
    // For now, we'll just display it
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        // You can handle the uploaded image here
        console.log('Image uploaded:', file.name);
        // Move to next step
        document.querySelectorAll('.step')[1].classList.add('active');
    }
}
