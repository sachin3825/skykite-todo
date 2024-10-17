# Todo List Web Application

This project is a simple To-Do List web application built using **React.js**, **TypeScript**, and **Tailwind CSS**. The app allows users to add tasks, mark tasks as completed, and delete tasks.

## Features
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by status: All, Pending, Completed
- Task counter (Total and Completed tasks)
- API integration to load initial tasks on page load
- Responsive UI using Tailwind CSS

## Folder Structure
```
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets
│   ├── components
│   │   ├── TodoApp.tsx     # Main app component
│   │   ├── TodoCard.tsx    # Task card component
│   │   └── TodoModal.tsx   # Modal component to add tasks
│   ├── utils
│   │   └── types.ts        # TypeScript types for tasks
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind CSS
├── package.json            # Dependencies and scripts
├── tailwind.config.cjs     # Tailwind CSS config
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
└── README.md               # Project documentation
```

## Installation

### Prerequisites
- Node.js installed
- npm or yarn installed

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## API Integration

This app fetches initial tasks from the following API:
```bash
https://run.mocky.io/v3/cb74646f-0bf9-4ba8-a167-d652a413c74b
```

Tasks will be loaded on page load.

