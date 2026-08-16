import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { tasks as initialTasks } from "../data/tasks";
import type { Task } from "../types/task";

const getTasks = (): Task[] => {
  try {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
      return initialTasks;
    }

    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks)
      ? parsedTasks
      : initialTasks;
  } catch (error) {
    console.error("Failed to load tasks:", error);

    localStorage.removeItem("tasks");

    return initialTasks;
  }
};

export const useTasks = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    staleTime: 1000 * 60 * 5,
  });

  const updateTasks = (updater: (tasks: Task[]) => Task[]) => {
    queryClient.setQueryData<Task[]>(["tasks"], (currentTasks) => {
      const tasks = currentTasks ?? initialTasks;
      const updatedTasks = updater(tasks);

      localStorage.setItem(
        "tasks",
        JSON.stringify(updatedTasks)
      );

      return updatedTasks;
    });
  };

  return {
    ...query,
    updateTasks,
  };
};