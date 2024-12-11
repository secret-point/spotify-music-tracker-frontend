import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTrack, getTrackMetadata } from "../../api/apiClient";

interface TrackState {
  track: any;
  coverUrl: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: TrackState = {
  track: null,
  coverUrl: null,
  loading: false,
  error: null,
};

export const fetchTrack = createAsyncThunk(
  "track/fetchTrack",
  async (isrc: string) => {
    const response = await createTrack(isrc);
    return response.data;
  }
);

export const fetchTrackMetadata = createAsyncThunk(
  "track/fetchTrackMetadata",
  async (isrc: string) => {
    const response = await getTrackMetadata(isrc);
    return response.data;
  }
);

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.track = action.payload;
      })
      .addCase(fetchTrack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch track.";
      })
      .addCase(fetchTrackMetadata.fulfilled, (state, action) => {
        state.track = action.payload;
      });
  },
});

export default trackSlice.reducer;
