import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Draggable } from "@hello-pangea/dnd";
import { memo, useState } from "react";

type Comment = {
  id: number;
  text: string;
  author: string;
  createdAt: string;
};

type TaskCardProps = {
  id: number;
  index: number;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  comments?: Comment[];

  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
  addComment: (taskId: number, comment: string) => void;
  onView: (id: number) => void;
};

function TaskCard({
  id,
  index,
  title,
  description,
  priority,
  assignee,
  comments = [],
  deleteTask,
  editTask,
  addComment,
  onView,
}: TaskCardProps) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    const comment = commentText.trim();

    if (!comment) return;

    addComment(id, comment);
    setCommentText("");
    setCommentOpen(false);
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <>
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            sx={{
              mb: 2,
              borderRadius: 3,
              boxShadow: 2,
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              {/* Drag Handle */}
              <Box
                {...provided.dragHandleProps}
                sx={{
                  cursor: "grab",
                  mb: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {title}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  my: 1,
                  minHeight: 45,
                }}
              >
                {description}
              </Typography>

              <Chip
                label={priority}
                size="small"
                color={
                  priority === "High"
                    ? "error"
                    : priority === "Medium"
                      ? "warning"
                      : "success"
                }
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                    }}
                  >
                    {String(assignee).charAt(0)}
                  </Avatar>

                  <Typography variant="body2">{assignee}</Typography>
                </Box>

                {/* Action Buttons */}
                <Box>
                  <IconButton
                    size="small"
                    onClick={() => setCommentOpen(true)}
                    title="Add comment"
                  >
                    <ChatBubbleOutlineIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() => onView(id)}
                    title="View task"
                  >
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() => editTask(id)}
                    title="Edit task"
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => deleteTask(id)}
                    title="Delete task"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>

              {comments.length > 0 && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    display: "block",
                    mt: 1,
                  }}
                >
                  {comments.length} comment
                  {comments.length > 1 ? "s" : ""}
                </Typography>
              )}
            </CardContent>
          </Card>

          {/* Comment Dialog */}
          <Dialog
            open={commentOpen}
            onClose={() => {
              setCommentOpen(false);
              setCommentText("");
            }}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Add Comment</DialogTitle>
            
            <DialogContent>
              <TextField
              autoFocus
              fullWidth
              multiline
              rows={4}
              margin="dense"
              label="Your comment"
              value={commentText}
              onChange={(event) => {
                setCommentText(event.target.value);
              }}
            />
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  setCommentText("");
                  setCommentOpen(false);
                }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleAddComment}
                disabled={commentText.trim().length === 0}
              >
                Add Comment
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Draggable>
  );
}

export default memo(TaskCard);
