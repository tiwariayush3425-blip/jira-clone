export interface Task {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  assignee: string;
  status: "Todo" | "In Progress" | "Done";
}