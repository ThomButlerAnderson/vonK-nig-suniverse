function sendMessage() {
  const input = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  const placeholder = responseBox.querySelector('.placeholder');
  if (placeholder) responseBox.innerHTML = '';

  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
  responseBox.appendChild(userDiv);

  const karlDiv = document.createElement("div");
  karlDiv.innerHTML = `<strong>Karl Müller:</strong> ${generateFakeKarlReply(userMessage)}`;
  responseBox.appendChild(karlDiv);

  input.value = "";
  autoResize(input);
  responseBox.scrollTop = responseBox.scrollHeight;
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function generateFakeKarlReply(question) {
  return `Ah, mein Freund, that is a question worthy of contemplation. Alas, the archives remain offline—but soon, I shall retrieve the truth from our records.`;
}
