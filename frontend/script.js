function sendMessage() {
  const input = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Display user question
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
  responseBox.appendChild(userDiv);

  // Display Karl's placeholder response
  const karlDiv = document.createElement("div");
  karlDiv.innerHTML = `<strong>Karl Müller:</strong> ${generateFakeKarlReply(userMessage)}`;
  responseBox.appendChild(karlDiv);

  // Clear input and reset height
  input.value = "";
  autoResize(input); // reset height after clearing
  responseBox.scrollTop = responseBox.scrollHeight;
}

// Expanding textarea effect
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Karl's fake reply (to be replaced with API call)
function generateFakeKarlReply(question) {
  return `Ah, mein Freund, that is a question worthy of contemplation. But alas, I am currently disconnected from the archives. Once our funding is restored, I shall search the records properly.`;
}
