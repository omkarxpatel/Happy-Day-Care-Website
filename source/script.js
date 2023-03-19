const title = document.querySelector('.hero h1');
const text = ["Happy Day Care"];
let b = 0;

function type() {
  let i = 0;
  const intervalId = setInterval(() => {
    title.textContent += text[b].charAt(i);
    i++;
    if (i >= text[b].length) {
        b = (b + 1) % text.length;

        clearInterval(intervalId);
        setTimeout(() => {
            deleteText();
        }, 1000);
    }
  }, 100);
}

function deleteText() {
  const intervalId = setInterval(() => {
    title.textContent = title.textContent.slice(0, -1);
    if (title.textContent.length === 0) {
      clearInterval(intervalId);
      setTimeout(() => {
        type();
      }, 1000);
    }
  }, 75);
}

type();
