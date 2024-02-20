import diaryData from "../mocks/diaries.json";
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const findById = (id: number): DiaryEntry | undefined =>
  diaries.find((d) => d.id === id);

export const getEntriesWithoutSensitiveInfo =
  (): Array<NonSensitiveInfoDiaryEntry> =>
    diaries.map(({ id, date, visibility, weather }) => ({
      id,
      date,
      visibility,
      weather,
    }));

export const addEntry = () => null;
