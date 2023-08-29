export const formatDate = (input: string | Date, locale = 'en-US'): string => {
  const date = new Date(input);
  return date.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getYearsRange = (startYear: number, endYear: number, step = 1): number[] => {
  const yearsList: number[] = [];
  for (let year = startYear; year <= endYear; year += step) {
    yearsList.push(year);
  }
  return yearsList;
};

export const getDateYear = (input: string | Date) => new Date(input).getFullYear();

export const getDateDay = (input: string | Date) => new Date(input).getDay();

export const getDateMonth = (input: string | Date) => new Date(input).getMonth();
