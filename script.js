// Data
const skills = [
  "SvelteKit",
  "Hono",
  "SQLite",
  "REST API",
  "TypeScript",
  "Svelte",
  "JavaScript",
  "Node.js",
  "Responsive Design",
  "React",
];
const projects = [
  {
    name: "SVG Icon Generator",
    description: "Dynamic SVG icon generator with live preview.",
    technologies: ["SvelteKit", "TypeScript"],
  },
  {
    name: "Todo App",
    description: "Full-stack Todo app with SQLite integration.",
    technologies: ["SvelteKit", "Hono", "SQLite"],
  },
  {
    name: "Portfolio Website",
    description: "Responsive portfolio showcasing UI skills.",
    technologies: ["SvelteKit", "CSS"],
  },
];

// DOM Elements
const skillsList = document.getElementById("skills-list");
const projectsContainer = document.getElementById("projects-container");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input-field");
const addTodoBtn = document.getElementById("add-todo-btn");
const themeToggle = document.getElementById("theme-toggle");

// Render Skills
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Render Projects
projects.forEach((p) => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="tech">Tech: ${p.technologies.join(", ")}</p>
        <button class="th">Live Demo</button>
        <button class="ti">Github</button>
    `;
  projectsContainer.appendChild(div);
});

// Theme Logic
function updateThemeUI(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeUI(isDark);
});

// Initial Theme Check
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") updateThemeUI(true);

// Todo Logic (Mocking the API calls from your Svelte code)
async function renderTodos() {
  // In a real app, you'd use: const res = await fetch('/api/todos');
  // For this demo, we'll use a local array if the API fails
  todoList.innerHTML = "";
  const todos = [{ id: 1, title: "Build Portfolio", completed: false }]; // Example static data

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
            <span class="${todo.completed ? "completed" : ""}">${todo.title}</span>
            <button class="delete">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

addTodoBtn.addEventListener("click", () => {
  if (!todoInput.value.trim()) return;
  // Logic to push to array or API would go here
  console.log("Adding todo:", todoInput.value);
  todoInput.value = "";
});

renderTodos();
