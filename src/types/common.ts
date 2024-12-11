export interface ITrackMetadata {
  name: string;
  artistName: string;
  albumName: string;
  albumId: string;
  isExplicit: boolean;
  playbackSeconds: number;
  coverUrl?: string;
}
