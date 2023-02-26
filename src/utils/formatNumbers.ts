export const formatListingAmount = (amount: number) => {
  return amount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', 'R').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}