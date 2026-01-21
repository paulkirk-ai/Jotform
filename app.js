// Load and display dashboard items from forms-data.json
document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
});

async function loadDashboard() {
    const grid = document.getElementById('dashboard-grid');
    
    try {
        // Show loading state
        grid.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading forms...</div>';
        
        // Fetch the forms data
        const response = await fetch('forms-data.json');
        if (!response.ok) {
            throw new Error('Failed to load forms data');
        }
        
        const forms = await response.json();
        
        // Clear loading state
        grid.innerHTML = '';
        
        // Generate dashboard items
        forms.forEach(form => {
            const item = createDashboardItem(form);
            grid.appendChild(item);
        });
        
    } catch (error) {
        console.error('Error loading dashboard:', error);
        grid.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading forms. Please refresh the page.</div>';
    }
}

function createDashboardItem(form) {
    // Create main item div
    const item = document.createElement('div');
    const categoryClass = form.category.toLowerCase().replace(/\s+/g, '-') + '-item';
    item.className = `dashboard-item ${categoryClass}`;
    
    // Create link
    const link = document.createElement('a');
    link.href = form.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Create icon
    const icon = document.createElement('i');
    icon.className = `fas ${form.icon}`;
    
    // Create title
    const title = document.createElement('h3');
    title.textContent = form.title;
    
    // Create category badge
    const category = document.createElement('span');
    category.className = 'category';
    category.textContent = form.category;
    
    // Assemble the item
    link.appendChild(icon);
    link.appendChild(title);
    link.appendChild(category);
    item.appendChild(link);
    
    return item;
}
