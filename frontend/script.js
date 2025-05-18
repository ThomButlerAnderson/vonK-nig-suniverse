async function sendMessage() {
  const input = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  const placeholder = responseBox.querySelector('.placeholder');
  if (placeholder) responseBox.innerHTML = '';

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

    const karlDiv = document.createElement("div");
    karlDiv.innerHTML = `<strong>Karl Müller:</strong> ${data.reply}`;
    responseBox.appendChild(karlDiv);
    responseBox.scrollTop = responseBox.scrollHeight;

  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<em>Karl is momentarily unreachable. Bitte versuch es später erneut.</em>`;
    responseBox.appendChild(errorDiv);
  }
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
