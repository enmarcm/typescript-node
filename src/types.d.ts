export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type DateParse = `${number}-${number}-${number}`;

export interface DiaryEntry {
  id: number;
  date: DateParse;
  weather: Wheater;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather">
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
