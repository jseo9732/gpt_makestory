// 천 단위마다 쉼표 찍어주는 코드
export const numberComma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
