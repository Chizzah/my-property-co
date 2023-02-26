export const formatLongDescription = (description: string) => {
  const maxLength = 98;
  if (description.length > maxLength) {
    return description = description.substring(0, maxLength) + '...';
  }
  return description
};