import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput: React.FC = () => {
  const [isrc, setIsrc] = useState("");

  return (
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
  );
};
