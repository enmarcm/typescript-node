import diaryData from "../mocks/diaries.json";
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => diaries;

export const addEntry = () => null;
