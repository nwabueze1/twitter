export const transformWord = (word: string, size: number) => {
  let builder = "";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (count === size) break;
    builder += word[i];
    count++;
  }
  return builder + (word.length === builder.length ? "" : "...");
};
