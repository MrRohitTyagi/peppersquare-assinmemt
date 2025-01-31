export type SingleEvent = {
  title: string;
  date: string;
  category: string;
  picture: { formats: { small: { url: string } } }[];
};
