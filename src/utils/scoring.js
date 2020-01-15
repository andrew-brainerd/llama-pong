export const isScoreValid = score => {
  if (score < 0) {
    return false;
  }

  return true;
};
