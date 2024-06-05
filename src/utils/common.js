export const getEmojiType = (totalQuestions, correctAnswers) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  if (percentage >= 0 && percentage <= 30) return "tear";
  if (percentage > 30 && percentage <= 40) return "trash";
  if (percentage > 40 && percentage <= 60) return "bad";
  if (percentage > 60 && percentage <= 70) return "good";
  if (percentage > 70 && percentage <= 85) return "best";
  if (percentage > 85 && percentage <= 100) return "super";

  return "tear"; // Default case if no condition matches
};

export const getSpendedTime = () => {
  const savedSeconds = localStorage.getItem("seconds");
  return savedSeconds ? parseInt(savedSeconds, 10) : 0;
};

export const formatTime = (secs) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};
