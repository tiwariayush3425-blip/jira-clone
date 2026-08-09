import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  bio: string;
};

const defaultProfile: ProfileData = {
  name: "Ayush Tiwari",
  email: "ayush@example.com",
  phone: "+91 9876543210",
  bio: "Frontend Developer passionate about React and TypeScript.",
};

function Profile() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const savedProfile = localStorage.getItem("profile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : defaultProfile;
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  const handleChange = (
    field: keyof ProfileData,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (
      !profile.name.trim() ||
      !profile.email.trim() ||
      !profile.phone.trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 } }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          My Profile
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  fontSize: 40,
                }}
              >
                {profile.name.charAt(0).toUpperCase()}
              </Avatar>

              <Box sx={{ width: "100%" }}>

                {editing ? (
                  <>
                    <TextField
                      label="Name"
                      fullWidth
                      margin="normal"
                      value={profile.name}
                      onChange={(e) =>
                        handleChange(
                          "name",
                          e.target.value
                        )
                      }
                    />

                    <TextField
                      label="Email"
                      type="email"
                      fullWidth
                      margin="normal"
                      value={profile.email}
                      onChange={(e) =>
                        handleChange(
                          "email",
                          e.target.value
                        )
                      }
                    />

                    <TextField
                      label="Phone"
                      fullWidth
                      margin="normal"
                      value={profile.phone}
                      onChange={(e) =>
                        handleChange(
                          "phone",
                          e.target.value
                        )
                      }
                    />

                    <TextField
                      label="Bio"
                      fullWidth
                      multiline
                      rows={3}
                      margin="normal"
                      value={profile.bio}
                      onChange={(e) =>
                        handleChange(
                          "bio",
                          e.target.value
                        )
                      }
                    />

                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={handleSave}
                      >
                        Save Changes
                      </Button>

                      <Button
                        variant="outlined"
                        onClick={() =>
                          setEditing(false)
                        }
                      >
                        Cancel
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                    >
                      {profile.name}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {profile.bio}
                    </Typography>

                    <Typography sx={{ mt: 2 }}>
                      📧 {profile.email}
                    </Typography>

                    <Typography>
                      📱 {profile.phone}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={() =>
                        setEditing(true)
                      }
                    >
                      Edit Profile
                    </Button>
                  </>
                )}

              </Box>
            </Box>
          </CardContent>
        </Card>

      </Box>
    </DashboardLayout>
  );
}

export default Profile;