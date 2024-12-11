import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchTrack } from "../../redux/slices/trackSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm: React.FC = () => {
  const [isrc, setIsrc] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(fetchTrack(isrc));
    navigate(`/track/${isrc}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      gap={4}
    >
      <Box>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Music Tracker
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="50%"
        width="100%"
        gap={2}
      >
        <TextField
          value={isrc}
          onChange={(e) => setIsrc(e.target.value)}
          placeholder="ISRC Code"
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: "100px",
              backgroundColor: "white",
            },
            width: "100%",
          }}
          slotProps={{
            input: {
              startAdornment: <SearchIcon sx={{ pr: 1 }} />,
            },
          }}
          required
        />
      </Box>
    </Box>
  );
};

export default SearchForm;
