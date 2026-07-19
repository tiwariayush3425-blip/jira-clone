import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import toast from "react-hot-toast";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../components/Header";
import BoardColumn from "../components/BoardColumn";

import { tasks as initialTasks } from "../data/tasks";
import type { Task } from "../types/task";

function Dashboard() {

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [open, setOpen] = useState(false);


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


  // Drag & Drop Function

  const handleDragEnd = (result: DropResult) => {

    const {
      destination,
      draggableId
    } = result;


    // agar drop nahi hua
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

      <DragDropContext
        onDragEnd={handleDragEnd}
      >


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
          />



          <BoardColumn
            title="In Progress"
            status="In Progress"
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={handleEdit}
          />



          <BoardColumn
            title="Done"
            status="Done"
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={handleEdit}
          />


        </Box>


      </DragDropContext>


    </DashboardLayout>

  );
}


export default Dashboard;