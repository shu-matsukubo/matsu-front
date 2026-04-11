/**
 * 日付を YYYY-MM 形式にフォーマットする
 *
 * @param d フォーマット対象のDateオブジェクト
 * @returns "YYYY-MM" 形式の文字列
 *
 * @example
 * formatMonth(new Date(2025, 0, 1)) // "2025-01"
 */
export const formatMonth = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
};

/**
 * 日付を YYYY-MM-DD 形式にフォーマットする
 *
 * @param d フォーマット対象のDateオブジェクト
 * @returns "YYYY-MM-DD" 形式の文字列
 *
 * @example
 * formatDate(new Date(2025, 0, 1)) // "2025-01-01"
 */
export const formatDate = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};
