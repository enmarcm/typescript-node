import { Weather, Visibility } from "./enums";

export type DateParse = `${number}-${number}-${number}`;

export interface DiaryEntry {
  id: number;
  date: DateParse;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather">
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;