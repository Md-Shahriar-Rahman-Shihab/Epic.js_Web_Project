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

// Worker data
const carWorkers = [
    {
        id: 1,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Excellent",
        service: "Car Cleaning",
        rating: 5
    },
    {
        id: 2,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Excellent",
        service: "Oil Filter Change",
        rating: 5
    },
    {
        id: 3,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Good",
        service: "New Tires",
        rating: 3
    },
    {
        id: 4,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Good",
        service: "Scheduled Maintenance",
        rating: 3
    }
];

const homeCleaningWorkers = [
    {
        id: 5,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Excellent",
        service: "Window Cleaning",
        rating: 5
    },
    {
        id: 6,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Excellent",
        service: "Carpet Cleaning",
        rating: 5
    },
    {
        id: 7,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Good",
        service: "Bathroom Cleaning",
        rating: 3
    },
    {
        id: 8,
        name: "Saleh Akram",
        avatar: "https://ui-avatars.com/api/?name=Saleh+Akram&background=ffebee&color=ef5350&rounded=true&bold=true&size=80",
        status: "Good",
        service: "Deep Cleaning",
        rating: 3
    }
];

function createWorkerCard(worker) {
    const stars = Array(5).fill('★').map((star, index) => 
        `<span style="color: ${index < worker.rating ? '#ffd700' : '#ddd'}">${star}</span>`
    ).join('');

    const statusClass = worker.status.toLowerCase() === 'excellent' ? 'status-excellent' : 'status-good';

    return `
        <div class="worker-card">
            <img src="${worker.avatar}" alt="${worker.name}" class="worker-avatar">
            <div class="worker-name">${worker.name}</div>
            <div class="worker-status ${statusClass}">${worker.status}</div>
            <div class="worker-service">${worker.service}</div>
            <div class="worker-rating">${stars}</div>
        </div>
    `;
}

function createReviewItem(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const date = new Date(review.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return `
        <div class="review-item">
            <img src="${review.avatar}" alt="${review.reviewer}" class="review-avatar">
            <div class="review-content">
                <div class="review-header">
                    <span class="reviewer-name">${review.reviewer}</span>
                    <span class="review-date">${date}</span>
                </div>
                <div class="review-rating">${stars}</div>
                <p class="review-text">${review.text}</p>
            </div>
        </div>
    `;
}

function showWorkerProfile(workerId) {
    const worker = [...carWorkers, ...homeCleaningWorkers].find(w => w.id === workerId);
    if (!worker) return;

    // Update modal content
    document.getElementById('profileAvatar').src = worker.avatar;
    document.getElementById('profileAvatar').alt = worker.name;
    document.getElementById('profileName').textContent = worker.name;
    document.getElementById('profileRating').innerHTML = '★'.repeat(worker.rating) + '☆'.repeat(5 - worker.rating);
    
    document.getElementById('totalJobs').textContent = worker.stats.total;
    document.getElementById('completedJobs').textContent = worker.stats.completed;
    document.getElementById('ongoingJobs').textContent = worker.stats.ongoing;

    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = worker.reviews.length 
        ? worker.reviews.map(review => createReviewItem(review)).join('')
        : '<p>No reviews yet</p>';

    // Show modal
    document.getElementById('workerProfileModal').classList.add('active');
}

function populateWorkers() {
    const carWorkersGrid = document.getElementById('carWorkers');
    const homeCleaningWorkersGrid = document.getElementById('homeCleaningWorkers');

    carWorkersGrid.innerHTML = carWorkers.map(worker => createWorkerCard(worker)).join('');
    homeCleaningWorkersGrid.innerHTML = homeCleaningWorkers.map(worker => createWorkerCard(worker)).join('');
}

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

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    populateWorkers();

    // Modal close functionality
    const modal = document.getElementById('workerProfileModal');
    const closeButton = document.querySelector('.close-modal');

    // Close modal when clicking the close button
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
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
