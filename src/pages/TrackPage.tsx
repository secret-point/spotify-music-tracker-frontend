import React from "react";
import TrackMetadata from "../components/TrackMetadata";
import { Box } from "@mui/material";

const TrackPage: React.FC = () => {
  return (
    <Box p={3}>
      <TrackMetadata />
    </Box>
  );
};

export default TrackPage;
