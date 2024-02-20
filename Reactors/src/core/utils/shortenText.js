export const shortenText = (text, limit, lan) => {
  if (text.length >= limit) {
    if (lan === "fa") {
      const shortText = text.substring(0, limit) + "...";
      return shortText;
    } else if (lan === "en") {
      const shortText = "..." + text.substring(0, limit);
      return shortText;
    }
  }
  return text;
};
