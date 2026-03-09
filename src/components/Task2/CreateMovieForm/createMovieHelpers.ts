export function getYear(value: string): number {
  const arr = value.split(".");
  const yearStr = arr[2];
  return Number(yearStr);
}
