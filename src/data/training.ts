export interface TrainingInfo {
  venue: string | null;
  address: string | null;
  schedule: string | null;
  mapsUrl: string;
}

// Complete venue, address and schedule when the club confirms them.
export const trainingInfo: TrainingInfo = {
  venue: null,
  address: null,
  schedule: null,
  mapsUrl: "https://share.google/j7p3yEPgIFSjsLabJ",
};
