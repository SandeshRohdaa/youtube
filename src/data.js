export const API_KEY = "AIzaSyDkXXYniC4JZSTWN4RgIvM8VNlrMLwh7Wo";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
