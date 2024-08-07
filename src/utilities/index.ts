export function getTime(date: string): number {
  const dateString = date;
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6);

  return new Date(`${day}/${month}/${year}`).getTime();
}
