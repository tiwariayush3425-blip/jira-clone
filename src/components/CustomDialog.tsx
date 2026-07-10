import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

type CustomDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

function CustomDialog({
  open,
  onClose,
  title,
  message,
}: CustomDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={onClose}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;