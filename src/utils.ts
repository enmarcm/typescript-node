import { NewDiaryEntry, Weather, DateParse, Visibility } from "./types";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest) || !commentFromRequest) {
    throw new Error("Incorrect or missing comment");
  }

  return commentFromRequest;
};

const parseDate = (date: any): DateParse => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }

  return date;
};

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather: ");
  }

  return weather;
};

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility: ");
  }

  return visibility;
};

const isWeather = (param: any): boolean =>
  Object.values(Weather).includes(param);

const isString = (string: string): boolean => typeof string === "string";

const isDate = (date: string): boolean => Boolean(Date.parse(date));

const isVisibility = (param: any): boolean =>
  Object.values(Visibility).includes(param);

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object?.comment),
    date: parseDate(object?.date),
    weather: parseWeather(object?.weather),
    visibility: parseVisibility(object?.visibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;
