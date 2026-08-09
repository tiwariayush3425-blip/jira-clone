import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { Task } from "../types/task";

type TaskDetailsDialogProps = {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddComment: (taskId: number, comment: string) => void;
};

function TaskDetailsDialog({
  open,
  task,
  onClose,
  onEdit,
  onDelete,
  onAddComment,
}: TaskDetailsDialogProps) {
  const [comment, setComment] = useState("");

  if (!task) return null;

  const handleComment = () => {
    if (!comment.trim()) return;

    onAddComment(task.id, comment.trim());
    setComment("");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Task Details
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>

          <Typography variant="h6">
            {task.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
          >
            <Chip
              label={`Priority: ${task.priority}`}
              variant="outlined"
            />

            <Chip
              label={`Status: ${task.status}`}
              variant="outlined"
            />

            <Chip
              label={`Assignee: ${task.assignee}`}
              variant="outlined"
            />
          </Stack>

          <Divider />

          <Typography variant="subtitle1">
            Comments
          </Typography>

          {task.comments && task.comments.length > 0 ? (
            <Stack spacing={1.5}>
              {task.comments.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "grey.100",
                  }}
                >
                  <Typography variant="body2">
                    {item.text}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.author} • {item.createdAt}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
            >
              No comments yet.
            </Typography>
          )}

          <TextField
            label="Add a comment"
            value={comment}
            onChange={(event) =>
              setComment(event.target.value)
            }
            multiline
            minRows={2}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleComment}
            disabled={!comment.trim()}
          >
            Add Comment
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          color="error"
          onClick={() => {
            onDelete(task.id);
            onClose();
          }}
        >
          Delete
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            onEdit(task.id);
            onClose();
          }}
        >
          Edit
        </Button>

        <Button onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskDetailsDialog;