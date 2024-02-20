import diaryData from "../mocks/diaries.json";
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const diary = diaries.find((d) => d.id === id);

  if (!diary) return undefined;

  const { comment, ...restOfDiary } = diary;
  return restOfDiary;
};

export const getEntriesWithoutSensitiveInfo =
  (): Array<NonSensitiveInfoDiaryEntry> =>
    diaries.map(({ id, date, visibility, weather }) => ({
      id,
      date,
      visibility,
      weather,
    }));

export const addEntry = () => null;
