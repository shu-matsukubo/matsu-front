export const formatMonth = (date: Date) => {
  return date.toISOString().slice(0, 7); // YYYY-MM
};

export const formatDate = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const addMonth = (date: Date, diff: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + diff);
  return d;
};

export const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
