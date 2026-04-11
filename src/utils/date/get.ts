/**
 * diffの分だけ月をずらしたdateオブジェクトを返却する
 *
 * @param date 比較対象のDateオブジェクト1つ目
 * @param diff ずらしたい月
 * @returns diffの分ずらされたdateオブジェクト
 *
 * @example
 * addMonth(new Date(2025, 0, 1), -1) // "2024年12月のdateオブジェクト"
 */
export const addMonth = (date: Date, diff: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + diff);
  return d;
};

/**
 * 指定された日付オブジェクトの開始日を取得
 *
 * @param date 月取得対象のdateオブジェクト
 * @returns 指定された月の
 *
 * @example
 * getFirstDay(new Date(2025, 11, 17);) // "2025年12月1日のdateオブジェクト"
 */
export const getFirstDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};
