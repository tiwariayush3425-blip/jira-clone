import type { Task } from "../types/task";
export const tasks: Task[] = [
  {
    id: 1,
    title: "Design Login Page",
    description: "Create login page UI using Material UI.",
    priority: "High",
    assignee: "Ayush",
    status: "Todo",
  },
  {
    id: 2,
    title: "Create Navbar",
    description: "Build top navigation bar.",
    priority: "Medium",
    assignee: "Ayush",
    status: "Todo",
  },
  {
    id: 3,
    title: "Dashboard Layout",
    description: "Design dashboard page.",
    priority: "High",
    assignee: "Ayush",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Project Setup",
    description: "Setup React + Vite project.",
    priority: "Low",
    assignee: "Ayush",
    status: "Done",
  },
];