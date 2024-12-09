document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { service: 'Car Cleaning', status: 'Recent', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '1.12.2024', time: '11:15 AM' },
        { service: 'Carpet Cleaning', status: 'Recent', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '11:15 AM' },
        { service: 'New Tires', status: 'Ongoing', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '11:15 AM' },
        { service: 'Oil Filter Change', status: 'Approved', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '11:15 AM' },
        { service: 'Carpet Cleaning', status: 'Pending', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '11:16 AM' },
        { service: 'Window Cleaning', status: 'Not Started', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '01:05 PM' },
        { service: 'Deep Cleaning', status: 'Completed', orderId: '0957746KJLY', tracking: 'Sheba-0523-001', date: '24.12.2024', time: '10:10 AM' }
    ];

    const tableBody = document.querySelector('#servicesTable tbody');
    
    services.forEach(service => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${service.service}</td>
            <td><span class="status-badge ${service.status.toLowerCase().replace(' ', '-')}">${service.status}</span></td>
            <td>${service.orderId}</td>
            <td>${service.tracking}</td>
            <td>${service.date}<br><span class="time">${service.time}</span></td>
            <td><button class="more-options">⋮</button></td>
        `;
        tableBody.appendChild(row);
    });
});
