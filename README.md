# My To-Do List Web Application

A modern, feature-rich To-Do List web application built with vanilla HTML, CSS, and JavaScript. This application allows users to manage their tasks efficiently with a clean, responsive interface and persistent local storage.

![To-Do List App](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Overview

This To-Do List application is a fully functional task management system that runs entirely in the browser. It provides an intuitive interface for creating, organizing, and tracking tasks with persistent storage using browser localStorage.

## ✨ Key Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with a simple input field
- ✅ **View Tasks** - Display all tasks in a clean, organized list
- ✅ **Mark Complete** - Toggle task completion status with a single click
- ✅ **Delete Tasks** - Remove individual tasks with a delete button
- ✅ **Clear All** - Remove all tasks at once with confirmation
- 💾 **Local Storage** - All tasks persist across browser sessions

### Enhanced Features
- 📊 **Task Counter** - Real-time display of total, completed, and pending tasks
- 🔍 **Search Functionality** - Quickly find tasks by typing in the search bar
- 🎯 **Filter Options** - View All, Completed, or Pending tasks
- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent preference
- 🎨 **Smooth Animations** - Beautiful fade and slide animations for task operations
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables, flexbox, and animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **LocalStorage API** - Client-side data persistence

## 📁 Project Structure

```
To-Do List App/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript logic and functionality
└── README.md           # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd "To-Do List App"
   ```

2. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Start Using**
   - Type a task in the input field
   - Click "Add" or press Enter
   - Click on tasks to mark them as complete
   - Use the delete button to remove tasks
   - Explore filters, search, and dark mode!

## 📸 Screenshots

### Light Mode
![Light Mode Interface](screenshots/light-mode.png)

### Dark Mode
![Dark Mode Interface](screenshots/dark-mode.png)

### Mobile View
![Mobile View](screenshots/mobile-view.png)

*Note: Screenshots can be added to a `screenshots/` folder*

## 🎮 Usage Guide

### Adding Tasks
1. Type your task in the input field at the top
2. Click the "Add" button or press Enter
3. The task will appear immediately in the list

### Managing Tasks
- **Mark Complete**: Click anywhere on a task item to toggle its completion status
- **Delete Task**: Click the "Delete" button on any task
- **Clear All**: Click "Clear All" to remove all tasks (with confirmation)

### Filtering Tasks
- Click "All" to see all tasks
- Click "Pending" to see only incomplete tasks
- Click "Completed" to see only finished tasks

### Searching Tasks
- Type in the search bar to filter tasks by name
- Search works in combination with the active filter

### Dark Mode
- Click the moon/sun icon in the top-right corner
- Your preference is saved automatically

## 🧪 Testing

The application has been tested for:
- ✅ Task persistence after page refresh
- ✅ Adding and deleting multiple tasks
- ✅ Empty task validation
- ✅ Clear All functionality
- ✅ Toggle completion status
- ✅ Filter functionality (All, Completed, Pending)
- ✅ Search functionality
- ✅ Dark mode persistence
- ✅ Responsive design on various screen sizes

## 🌐 Live Demo

[View Live Demo on GitHub Pages](https://yourusername.github.io/to-do-list-app/)

*Replace with your actual GitHub Pages URL*

## 🔮 Future Enhancements

Potential features for future versions:
- Task categories/tags
- Due dates and reminders
- Task priority levels
- Drag and drop reordering
- Export/Import functionality
- Task editing (inline editing)
- Keyboard shortcuts

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ for efficient task management.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- Built with vanilla JavaScript (no frameworks)
- Inspired by modern task management applications
- Designed with user experience in mind

---

**Happy Task Managing! 🎉**

