export interface Project {
  id: number;
  name: string;
  description: string;
  status: "Active" | "Completed" | "Archived";
  members: number[];
  createdAt: string;
}