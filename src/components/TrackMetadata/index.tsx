import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Typography, CircularProgress } from "@mui/material";

const TrackMetadata: React.FC = () => {
  const { track, loading, error } = useSelector(
    (state: RootState) => state.track
  );

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!track) return null;

  return (
    <Box p={2} textAlign="center">
      <Typography variant="h4">{track.name}</Typography>
      <Typography variant="subtitle1">{track.artistName}</Typography>
      <Typography variant="subtitle2">{track.albumName}</Typography>
      <Typography variant="body2">
        Explicit: {track.isExplicit ? "Yes" : "No"}
      </Typography>
      <Typography variant="body2">
        Playback Time: {track.playbackSeconds}s
      </Typography>
      <img src={track.coverUrl} alt={track.name} style={{ maxWidth: "100%" }} />
    </Box>
  );
};

export default TrackMetadata;
