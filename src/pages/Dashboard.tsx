import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import toast from "react-hot-toast";
import { Box } from "@mui/material";
import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../components/Header";
import BoardColumn from "../components/BoardColumn";
import AnalyticsCard from "../components/AnalyticsCard";
import TaskDetailsDialog from "../components/TaskDetailsDialog";


import type { Task } from "../types/task";
import { useTasks } from "../hooks/useTasks";

function Dashboard() {
  const {
  data: tasks = [],
  updateTasks,
  isLoading,
  isError,
} = useTasks();

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);

  const [open, setOpen] = useState(false);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const [detailsTask, setDetailsTask] =
    useState<Task | null>(null);

  // Add Task
  const addTask = (newTask: Task) => {
   updateTasks((prev) => [...prev, newTask]);

    toast.success("Task added successfully!");
  };

  // Delete Task
  const deleteTask = (id: number) => {
    updateTasks((prev) =>
  prev.filter((task) => task.id !== id)
);

    toast.success("Task deleted successfully!");
  };

  // Add Comment
  const addComment = (
    taskId: number,
    comment: string
  ) => {
    updateTasks((prev) =>
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
                  createdAt:
                    new Date().toLocaleString(),
                },
              ],
            }
          : task
      )
    );

    toast.success("Comment added!");
  };

  // Save tasks to localStorage
 

  // Edit Task
  const handleEdit = (id: number) => {
    const task = tasks.find(
      (task) => task.id === id
    );

    if (task) {
      setSelectedTask(task);
      setOpen(true);
    }
  };

  // View Task
  const handleView = (id: number) => {
    const task = tasks.find(
      (task) => task.id === id
    );

    if (task) {
      setDetailsTask(task);
      setDetailsOpen(true);
    }
  };

  // Update Task
  const updateTask = (updatedTask: Task) => {
    updateTasks((prev) =>
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

  // Drag & Drop
  const handleDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    updateTasks((prev) =>
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

  // Analytics
  const todoCount = tasks.filter(
    (task) => task.status === "Todo"
  ).length;

  const progressCount = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const doneCount = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  // Search + Priority Filter
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

  if (isLoading) {
  return (
    <DashboardLayout>
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading tasks...
      </Box>
    </DashboardLayout>
  );
}

if (isError) {
  return (
    <DashboardLayout>
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "error.main",
        }}
      >
        Failed to load tasks. Please try again.
      </Box>
    </DashboardLayout>
  );
}
  return (
    <DashboardLayout>
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        {/* Header */}
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
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
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
          {filteredTasks.length === 0 ? (
            <Box
              sx={{
                width: "100%",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                py: 6,
              }}
            >
              <Box
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {tasks.length === 0
                  ? "No tasks yet"
                  : "No tasks found"}
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  maxWidth: 420,
                }}
              >
                {tasks.length === 0
                  ? "Create your first task to start managing your project."
                  : "Try changing your search term or priority filter."}
              </Box>
            </Box>
          ) : (
            <>
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
            </>
          )}
        </Box>
      </DragDropContext>

      {/* Task Details */}
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