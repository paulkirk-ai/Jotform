// Admin Dashboard JavaScript
let forms = [];
let editingIndex = -1;

// DOM Elements
const formEditor = document.getElementById('form-editor');
const formTitle = document.getElementById('form-title');
const formUrl = document.getElementById('form-url');
const formCategory = document.getElementById('form-category');
const formIcon = document.getElementById('form-icon');
const iconPreview = document.getElementById('icon-preview');
const formsList = document.getElementById('forms-list');
const formCount = document.getElementById('form-count');
const formModeTitle = document.getElementById('form-mode-title');
const cancelEditBtn = document.getElementById('cancel-edit');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadForms();
    setupEventListeners();
});

function setupEventListeners() {
    // Form submission
    formEditor.addEventListener('submit', handleFormSubmit);
    
    // Icon preview
    formIcon.addEventListener('change', updateIconPreview);
    
    // Clear form
    document.getElementById('clear-form').addEventListener('click', clearForm);
    
    // Cancel edit
    cancelEditBtn.addEventListener('click', cancelEdit);
}

async function loadForms() {
    try {
        const response = await fetch('forms-data.json');
        forms = await response.json();
        renderFormsList();
    } catch (error) {
        console.error('Error loading forms:', error);
        showToast('Error loading forms data', 'error');
        forms = [];
    }
}

function renderFormsList() {
    formsList.innerHTML = '';
    formCount.textContent = forms.length;
    
    if (forms.length === 0) {
        formsList.innerHTML = '<div style="text-align: center; padding: 20px; color: #7f8c8d;">No forms yet. Add your first form above.</div>';
        return;
    }
    
    forms.forEach((form, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-content">
                <div class="item-title">
                    <i class="fas ${form.icon}"></i> ${form.title}
                </div>
                <div class="item-meta">
                    <span class="item-category">${form.category}</span>
                    <span><i class="fas fa-link"></i> ${form.url}</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="btn btn-warning" onclick="editForm(${index})" style="padding: 8px 15px;">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger" onclick="deleteForm(${index})" style="padding: 8px 15px;">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        formsList.appendChild(card);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const newForm = {
        title: formTitle.value.trim(),
        url: formUrl.value.trim(),
        icon: formIcon.value,
        category: formCategory.value
    };
    
    if (editingIndex >= 0) {
        // Update existing form
        forms[editingIndex] = newForm;
        showToast('Form updated successfully', 'success');
        editingIndex = -1;
        formModeTitle.textContent = 'Add New Form';
        cancelEditBtn.style.display = 'none';
    } else {
        // Add new form
        forms.push(newForm);
        showToast('Form added successfully', 'success');
    }
    
    renderFormsList();
    clearForm();
}

function editForm(index) {
    editingIndex = index;
    const form = forms[index];
    
    formTitle.value = form.title;
    formUrl.value = form.url;
    formCategory.value = form.category;
    formIcon.value = form.icon;
    
    updateIconPreview();
    
    formModeTitle.textContent = 'Edit Form';
    cancelEditBtn.style.display = 'inline-flex';
    
    // Scroll to form
    formEditor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    showToast('Editing: ' + form.title, 'info');
}

function deleteForm(index) {
    const form = forms[index];
    if (confirm(`Are you sure you want to delete "${form.title}"?`)) {
        forms.splice(index, 1);
        renderFormsList();
        showToast('Form deleted', 'warning');
        
        if (editingIndex === index) {
            cancelEdit();
        }
    }
}

function cancelEdit() {
    editingIndex = -1;
    formModeTitle.textContent = 'Add New Form';
    cancelEditBtn.style.display = 'none';
    clearForm();
    showToast('Edit cancelled', 'info');
}

function clearForm() {
    formEditor.reset();
    updateIconPreview();
}

function updateIconPreview() {
    const icon = formIcon.value || 'fa-question-circle';
    iconPreview.innerHTML = `<i class="fas ${icon}"></i>`;
}

function downloadJSON() {
    const dataStr = JSON.stringify(forms, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'forms-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('JSON file downloaded! Now commit to GitHub.', 'success');
}

function copyJSON() {
    const dataStr = JSON.stringify(forms, null, 2);
    navigator.clipboard.writeText(dataStr).then(() => {
        showToast('JSON copied to clipboard', 'success');
    }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
    });
}

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'warning' ? 'fa-exclamation-triangle' : 
                 type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
    
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
