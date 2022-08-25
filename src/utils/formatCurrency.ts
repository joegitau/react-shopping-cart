const CURRENCY_FORMAT = new Intl.NumberFormat('fin', { currency: 'EUR', style: 'currency' });

export const formatCurrency = (currency: number) => {
  return CURRENCY_FORMAT.format(currency);
};
