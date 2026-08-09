import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import toast from "react-hot-toast";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../components/Header";
import BoardColumn from "../components/BoardColumn";
import AnalyticsCard from "../components/AnalyticsCard";
import TaskStatusChart from "../components/TaskStatusChart";

import { tasks as initialTasks } from "../data/tasks";
import type { Task } from "../types/task";

import TaskDetailsDialog from "../components/TaskDetailsDialog";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(() => {
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
});

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [open, setOpen] = useState(false);

  const [detailsOpen, setDetailsOpen] = useState(false);
const [detailsTask, setDetailsTask] = useState<Task | null>(null);

  const addTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
    toast.success("Task added successfully!");
  };

  const deleteTask = (id: number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    toast.success("Task deleted successfully!");
  };


  const addComment = (
  taskId: number,
  comment: string
) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === taskId
        ? {
            ...task,
            comments: [
              ...(task.comments || []),
              {
                id: Date.now(),
                text: comment,
                author: "Ayush",
                createdAt: new Date().toLocaleString(),
              },
            ],
          }
        : task
    )
  );

  toast.success("Comment added!");
};



  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const handleEdit = (id: number) => {
    const task = tasks.find(
      (task) => task.id === id
    );

    if (task) {
      setSelectedTask(task);
      setOpen(true);
    }
  };

  const handleView = (id: number) => {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    setDetailsTask(task);
    setDetailsOpen(true);
  }
};

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

    toast.success("Task updated successfully!");

    setOpen(false);
    setSelectedTask(null);
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === Number(draggableId)
          ? {
              ...task,
              status:
                destination.droppableId as Task["status"],
            }
          : task
      )
    );

    toast.success("Task moved successfully!");
  };

  // ===========================
  // Analytics
  // ===========================

  const todoCount = tasks.filter(
    (task) => task.status === "Todo"
  ).length;

  const progressCount = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const doneCount = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const chartData = [
    {
      name: "Todo",
      value: todoCount,
    },
    {
      name: "In Progress",
      value: progressCount,
    },
    {
      name: "Done",
      value: doneCount,
    },
  ];

  // ===========================
  // Search + Filter
  // ===========================

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <DashboardLayout>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Header
          addTask={addTask}
          updateTask={updateTask}
          open={open}
          setOpen={setOpen}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        {/* Analytics Cards */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 2,
            p: 2,
          }}
        >
          <AnalyticsCard
            title="Total Tasks"
            value={tasks.length}
          />

          <AnalyticsCard
            title="Todo"
            value={todoCount}
          />

          <AnalyticsCard
            title="In Progress"
            value={progressCount}
          />

          <AnalyticsCard
            title="Completed"
            value={doneCount}
          />
        </Box>

        {/* Kanban Board */}

        <Box
          sx={{
            display: "flex",
            gap: {
              xs: 2,
              md: 3,
            },
            p: {
              xs: 2,
              md: 3,
            },
            overflowX: "auto",
            alignItems: "flex-start",
          }}
        >
          <BoardColumn
          title="Todo"
          status="Todo"
          tasks={filteredTasks}
          deleteTask={deleteTask}
          editTask={handleEdit}
          addComment={addComment}
           onView={handleView}
          />

          <BoardColumn
            title="In Progress"
            status="In Progress"
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={handleEdit}
            addComment={addComment}
             onView={handleView}
          />

          <BoardColumn
            title="Done"
            status="Done"
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={handleEdit}
            addComment={addComment}
             onView={handleView}
          />
        </Box>

        {/* Chart */}

        <Box
          sx={{
            p: 2,
            bgcolor: "#fff",
            borderRadius: 2,
            m: 2,
          }}
        >
          <TaskStatusChart data={chartData} />
        </Box>
      </DragDropContext>
      <TaskDetailsDialog
  open={detailsOpen}
  task={detailsTask}
  onClose={() => {
    setDetailsOpen(false);
    setDetailsTask(null);
  }}
  onEdit={handleEdit}
  onDelete={deleteTask}
  onAddComment={addComment}
/>
    </DashboardLayout>
  );
}

export default Dashboard;