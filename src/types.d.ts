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