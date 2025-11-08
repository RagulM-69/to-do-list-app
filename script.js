// Task management application
class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.loadTasks();
        this.loadTheme();
        this.setupEventListeners();
        this.renderTasks();
        this.updateTaskCounter();
    }

    // Local Storage Management
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getTasks() {
        const stored = localStorage.getItem('tasks');
        return stored ? JSON.parse(stored) : [];
    }

    loadTasks() {
        this.tasks = this.getTasks();
    }

    // Theme Management
    loadTheme() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);
    }

    toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('.toggle-icon');
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // CRUD Operations
    addTask(taskText) {
        const trimmedText = taskText.trim();
        
        if (!trimmedText) {
            this.showAlert('Please enter a task!');
            return;
        }

        const newTask = {
            id: Date.now().toString(),
            text: trimmedText,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(newTask);
        this.saveTasks();
        this.renderTasks();
        this.updateTaskCounter();
        
        // Clear input
        document.getElementById('taskInput').value = '';
    }

    toggleTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
            this.updateTaskCounter();
        }
    }

    deleteTask(taskId) {
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.classList.add('fade-out');
            setTimeout(() => {
                this.tasks = this.tasks.filter(t => t.id !== taskId);
                this.saveTasks();
                this.renderTasks();
                this.updateTaskCounter();
            }, 300);
        }
    }

    clearAllTasks() {
        if (this.tasks.length === 0) {
            this.showAlert('No tasks to clear!');
            return;
        }

        if (confirm('Are you sure you want to delete all tasks?')) {
            const taskList = document.getElementById('taskList');
            const items = taskList.querySelectorAll('.task-item');
            
            items.forEach(item => {
                item.classList.add('fade-out');
            });

            setTimeout(() => {
                this.tasks = [];
                this.saveTasks();
                this.renderTasks();
                this.updateTaskCounter();
            }, 300);
        }
    }

    // Filter and Search
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        this.renderTasks();
    }

    setSearchQuery(query) {
        this.searchQuery = query.toLowerCase().trim();
        this.renderTasks();
    }

    getFilteredTasks() {
        let filtered = [...this.tasks];

        // Apply search filter
        if (this.searchQuery) {
            filtered = filtered.filter(task => 
                task.text.toLowerCase().includes(this.searchQuery)
            );
        }

        // Apply status filter
        if (this.currentFilter === 'completed') {
            filtered = filtered.filter(task => task.completed);
        } else if (this.currentFilter === 'pending') {
            filtered = filtered.filter(task => !task.completed);
        }

        return filtered;
    }

    // UI Rendering
    renderTasks() {
        const taskList = document.getElementById('taskList');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            const emptyMessage = this.getEmptyMessage();
            taskList.innerHTML = `<li class="empty-state">${emptyMessage}</li>`;
            return;
        }

        taskList.innerHTML = filteredTasks.map(task => this.createTaskHTML(task)).join('');
        
        // Attach event listeners to new elements
        this.attachTaskListeners();
    }

    createTaskHTML(task) {
        const completedClass = task.completed ? 'completed' : '';
        return `
            <li class="task-item ${completedClass}" data-task-id="${task.id}">
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button class="delete-btn" data-delete-id="${task.id}" aria-label="Delete task">Delete</button>
            </li>
        `;
    }

    attachTaskListeners() {
        // Toggle completion on task click
        document.querySelectorAll('.task-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.classList.contains('delete-btn')) {
                    const taskId = item.getAttribute('data-task-id');
                    this.toggleTask(taskId);
                }
            });
        });

        // Delete button clicks
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const taskId = btn.getAttribute('data-delete-id');
                this.deleteTask(taskId);
            });
        });
    }

    updateTaskCounter() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;

        document.getElementById('totalCount').textContent = total;
        document.getElementById('completedCount').textContent = completed;
        document.getElementById('pendingCount').textContent = pending;
    }

    getEmptyMessage() {
        if (this.searchQuery && this.tasks.length > 0) {
            return 'No tasks match your search.';
        }
        if (this.currentFilter === 'completed' && this.tasks.length > 0) {
            return 'No completed tasks yet.';
        }
        if (this.currentFilter === 'pending' && this.tasks.length > 0) {
            return 'No pending tasks. Great job!';
        }
        return 'No tasks yet. Add one above to get started!';
    }

    // Utility Functions
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showAlert(message) {
        alert(message);
    }

    // Event Listeners Setup
    setupEventListeners() {
        // Add task button
        document.getElementById('addTaskBtn').addEventListener('click', () => {
            const input = document.getElementById('taskInput');
            this.addTask(input.value);
        });

        // Enter key on input
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask(e.target.value);
            }
        });

        // Search input
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.setSearchQuery(e.target.value);
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });

        // Clear all button
        document.getElementById('clearAllBtn').addEventListener('click', () => {
            this.clearAllTasks();
        });

        // Dark mode toggle
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            this.toggleDarkMode();
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});

