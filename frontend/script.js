async function sendMessage() {
  const input = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Clear placeholder if needed
  const placeholder = responseBox.querySelector('.placeholder');
  if (placeholder) responseBox.innerHTML = '';

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
  responseBox.appendChild(userDiv);

  input.value = "";
  autoResize(input);

  try {
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();

    // Display Karl's reply
    const karlDiv = document.createElement("div");
    karlDiv.innerHTML = `<strong>Karl Müller:</strong> ${data.reply}`;
    responseBox.appendChild(karlDiv);
    responseBox.scrollTop = responseBox.scrollHeight;

  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<em>Karl is momentarily unavailable. Bitte versuch es später erneut.</em>`;
    responseBox.appendChild(errorDiv);
  }
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
