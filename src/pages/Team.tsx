import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import TeamMemberCard from "../components/TeamMemberCard";
import initialUsers from "../data/users";

type User = {
  id: number;
  name: string;
  role: string;
  email: string;
};

function Team() {
  const [users, setUsers] = useState<User[]>(() => {
  try {
    const savedUsers = localStorage.getItem("teamMembers");

    if (!savedUsers) {
      return initialUsers;
    }

    const parsedUsers = JSON.parse(savedUsers);

    return Array.isArray(parsedUsers)
      ? parsedUsers
      : initialUsers;
  } catch (error) {
    console.error("Failed to load team members:", error);

    localStorage.removeItem("teamMembers");

    return initialUsers;
  }
});

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "teamMembers",
      JSON.stringify(users)
    );
  }, [users]);

  const handleAddMember = () => {
    if (!name.trim() || !role.trim() || !email.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
      email: email.trim(),
    };

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setRole("");
    setEmail("");
    setOpen(false);

    toast.success("Team member added successfully!");
  };

  const handleDeleteMember = (id: number) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );

    toast.success("Team member removed!");
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
            Team Members
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add Member
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
          {users.map((user) => (
            <TeamMemberCard
              key={user.id}
              name={user.name}
              role={user.role}
              email={user.email}
              onDelete={() =>
                handleDeleteMember(user.id)
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
            Add Team Member
          </DialogTitle>

          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <TextField
              label="Role"
              fullWidth
              margin="normal"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={handleAddMember}
            >
              Add Member
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
}

export default Team;