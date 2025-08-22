export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const bgImageURL = (link: string): string => {
  return `url('${link}')`;
};
