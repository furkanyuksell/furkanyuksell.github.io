const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src = "https://media.giphy.com/media/c76IJLufpNwSULPk77/giphy.gif";
});

noBtn.addEventListener("mouseover", (event) => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height - 150;

  // Function to reposition the button
  const repositionButton = () => {
    let randomX, randomY;
    do {
      randomX = Math.floor(Math.random() * maxX);
      randomY = Math.floor(Math.random() * maxY);
    } while (
        Math.abs(randomX - event.clientX + wrapperRect.left) < noBtnRect.width &&
        Math.abs(randomY - event.clientY + wrapperRect.top) < noBtnRect.height
        );

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  };

  // Reposition the button immediately
  repositionButton();

  // Add a mousemove listener to track the cursor
  const onMouseMove = (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    // Check if the mouse is still over the button
    if (
        e.clientX >= btnRect.left &&
        e.clientX <= btnRect.right &&
        e.clientY >= btnRect.top &&
        e.clientY <= btnRect.bottom
    ) {
      repositionButton();
    }
  };

  // Attach the mousemove event listener
  document.addEventListener("mousemove", onMouseMove);

  // Remove the mousemove listener when the mouse leaves the button
  noBtn.addEventListener("mouseout", () => {
    document.removeEventListener("mousemove", onMouseMove);
  }, {once: true});
});