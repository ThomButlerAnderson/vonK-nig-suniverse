function sendMessage() {
  const input = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Clear placeholder if it's the first message
  const placeholder = responseBox.querySelector('.placeholder');
  if (placeholder) responseBox.innerHTML = '';

  // Display user's message
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
  responseBox.appendChild(userDiv);

  // Display Karl’s fake response
  const karlDiv = document.createElement("div");
  karlDiv.innerHTML = `<strong>Karl Müller:</strong> ${generateFakeKarlReply(userMessage)}`;
  responseBox.appendChild(karlDiv);

  // Clear input and reset height
  input.value = "";
  autoResize(input);
  responseBox.scrollTop = responseBox.scrollHeight;
}

// Expanding textarea effect
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Placeholder response from Karl
function generateFakeKarlReply(question) {
  return
