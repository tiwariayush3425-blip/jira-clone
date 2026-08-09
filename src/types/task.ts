export interface Comment {
  id: number;
  text: string;
  author: string;
  createdAt: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  assignee: string;
  status: "Todo" | "In Progress" | "Done";

  comments?: Comment[];
}