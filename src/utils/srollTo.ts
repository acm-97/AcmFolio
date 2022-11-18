export const scrollToTop = () => {
  const element = document.getElementById('terminal-container');
  if (element) {
    element.scrollTop = 0;
  }
};

export const scrollToBottom = () => {
  const element = document.getElementById('terminal-container');
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
};
