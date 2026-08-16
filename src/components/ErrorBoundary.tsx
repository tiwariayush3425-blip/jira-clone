import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeIcon from "@mui/icons-material/Home";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/jira-clone/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            bgcolor: "#f8f9fb",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 5,
              maxWidth: 520,
              width: "100%",
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: 70,
                mb: 2,
              }}
            />

            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
            >
              Something went wrong
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              An unexpected error occurred. Please try again or return to
              the dashboard.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                onClick={this.handleRetry}
              >
                Try Again
              </Button>

              <Button
                variant="outlined"
                startIcon={<HomeIcon />}
                onClick={this.handleGoHome}
              >
                Go to Dashboard
              </Button>
            </Box>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;