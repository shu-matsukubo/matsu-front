/**
 * 年月日が同じか判定する
 *
 * @param date1 比較対象のDateオブジェクト1つ目
 * @param date2 比較対象のDateオブジェクト1つ目
 * @returns true/false 一致していた場合true
 *
 * @example
 * isSameDay(new Date(2025, 0, 1), new Date(2025, 0, 2)) // "false"
 */
export const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
