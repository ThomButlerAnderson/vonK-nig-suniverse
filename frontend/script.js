function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userMessage = input.value;
  if (!userMessage.trim()) return;

  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${userMessage}`;
  chatbox.appendChild(userDiv);

  const karlResponse = document.createElement("div");
  karlResponse.innerHTML = `<strong>Karl Müller:</strong> ${generateFakeKarlReply(userMessage)}`;
  chatbox.appendChild(karlResponse);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function generateFakeKarlReply(question) {
  return `Ah, mein Freund, that is a question worthy of contemplation. But alas, I am currently disconnected from the archives. Once our funding is restored, I shall search the records properly.`;
}
