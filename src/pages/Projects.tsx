import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import ProjectCard from "../components/ProjectCard";
import initialProjects from "../data/projects";

type Project = {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: string;
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>(() => {
  try {
    const savedProjects = localStorage.getItem("projects");

    if (!savedProjects) {
      return initialProjects;
    }

    const parsedProjects = JSON.parse(savedProjects);

    return Array.isArray(parsedProjects)
      ? parsedProjects
      : initialProjects;
  } catch (error) {
    console.error("Failed to load projects:", error);

    localStorage.removeItem("projects");

    return initialProjects;
  }
});

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Planning");

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const handleAddProject = () => {
    if (!title.trim() || !description.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const newProject: Project = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      progress: Number(progress),
      status,
    };

    setProjects((prev) => [...prev, newProject]);

    setTitle("");
    setDescription("");
    setProgress(0);
    setStatus("Planning");
    setOpen(false);

    toast.success("Project added successfully!");
  };

  const handleDeleteProject = (id: number) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );

    toast.success("Project deleted successfully!");
  };

  return (
    <DashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 } }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Projects
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add Project
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              progress={project.progress}
              status={project.status}
              onDelete={() =>
                handleDeleteProject(project.id)
              }
            />
          ))}
        </Box>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Add New Project
          </DialogTitle>

          <DialogContent>
            <TextField
              label="Project Title"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <TextField
              label="Progress (%)"
              type="number"
              fullWidth
              margin="normal"
              inputProps={{
                min: 0,
                max: 100,
              }}
              value={progress}
              onChange={(e) =>
                setProgress(
                  Math.min(
                    100,
                    Math.max(
                      0,
                      Number(e.target.value)
                    )
                  )
                )
              }
            />

            <TextField
              select
              label="Status"
              fullWidth
              margin="normal"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <MenuItem value="Planning">
                Planning
              </MenuItem>

              <MenuItem value="In Progress">
                In Progress
              </MenuItem>

              <MenuItem value="Completed">
                Completed
              </MenuItem>
            </TextField>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={handleAddProject}
            >
              Add Project
            </Button>
          </DialogActions>
        </Dialog>

      </Box>
    </DashboardLayout>
  );
}

export default Projects;