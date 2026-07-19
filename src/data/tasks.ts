import type { Task } from "../types/task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Design Login Page",
    description: "Create login page UI using Material UI.",
    priority: "High",
    status: "Todo",
    assignee: "Ayush",
  },
  {
    id: 2,
    title: "Create Navbar",
    description: "Build top navigation bar.",
    priority: "Medium",
    status: "Todo",
    assignee: "Ayush",
  },
  {
    id: 3,
    title: "Dashboard Layout",
    description: "Design dashboard page.",
    priority: "High",
    status: "In Progress",
    assignee: "Rahul",
  },
  {
    id: 4,
    title: "Project Setup",
    description: "Setup React + Vite project.",
    priority: "Low",
    status: "Done",
    assignee: "Rahul",
  },
];