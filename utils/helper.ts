export const changeCase = (input: string) => {
  const words = input.split("_");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return word;
    return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
};
