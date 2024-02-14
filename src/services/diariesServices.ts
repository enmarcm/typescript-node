import diaryData from "../mocks/diaries.json";
import { DiaryEntry } from "../types";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const addEntry = () => null;
