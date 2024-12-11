import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";

const AuthorizationPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authorize = async () => {
      setError(null);
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Authorization failed. Please try again.");
        }
        navigate("/search");
      } catch (err) {
        setError((err as Error).message);
      }
    };

    authorize();
  }, [navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
      textAlign="center"
    >
      {error ? (
        <>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
          <Typography variant="body2" mt={1}>
            Please refresh the page to try again.
          </Typography>
        </>
      ) : (
        <>
          <CircularProgress />
          <Typography variant="h6" mt={2}>
            Authorizing...
          </Typography>
        </>
      )}
    </Box>
  );
};

export default AuthorizationPage;
