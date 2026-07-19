import { Paper, Typography, Box } from "@mui/material";
import { Droppable } from "@hello-pangea/dnd";

import TaskCard from "./TaskCard";
import type { Task } from "../types/task";


type BoardColumnProps = {
  title: string;
  status: "Todo" | "In Progress" | "Done";
  tasks: Task[];
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
};


function BoardColumn({
  title,
  status,
  tasks,
  deleteTask,
  editTask,
}: BoardColumnProps) {


  const filteredTasks = tasks.filter(
    (task) => task.status === status
  );


  return (

    <Paper
      elevation={1}
      sx={{
        width: {
          xs: 280,
          sm: 300,
          md: 320,
        },

        minHeight: {
          xs: 450,
          md: 550,
        },

        p: {
          xs: 1.5,
          md: 2,
        },

        bgcolor: "#f4f5f7",
        borderRadius: 3,
        boxShadow: 2,
      }}
    >


      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        {title} ({filteredTasks.length})
      </Typography>



      <Droppable droppableId={status}>

        {(provided) => (

          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}

            sx={{
              minHeight: 400,
            }}
          >


            {filteredTasks.map((task, index) => (

              <TaskCard

                key={task.id}

                id={task.id}

                index={index}

                title={task.title}

                description={task.description}

                priority={task.priority}

                assignee={task.assignee}

                deleteTask={deleteTask}

                editTask={editTask}

              />

            ))}


            {provided.placeholder}


          </Box>

        )}

      </Droppable>


    </Paper>

  );
}


export default BoardColumn;