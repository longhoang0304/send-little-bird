import numeral from 'numeral';

export const DATE_FORMAT = {
  FULL_DATE_12FORMAT_WITH_TZ: 'YYYY/MM/DD hh:mm:ss A [GMT]Z',
  FULL_DATE_24FORMAT_WITH_TZ: 'YYYY/MM/DD HH:mm:ss A [GMT]Z',
  FULL_DATE_12FORMAT: 'YYYY/MM/DD hh:mm:ss A',
  FULL_DATE_24FORMAT: 'YYYY/MM/DD HH:mm:ss',
  HOUR_12FORMAT: 'hh:mm:ss A',
  HOUR_24FORMAT: 'HH:mm:ss',
  DATE: 'YYYY/MM/DD',
};

export const NUMBER_FORMAT = {
  CURRENCY: '0,0',
  NUMBER: '0,0',
};

export const formatVietnamDong = (price) => `${numeral(price).format(NUMBER_FORMAT.CURRENCY)}đ`;
