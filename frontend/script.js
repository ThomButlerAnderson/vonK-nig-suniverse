console.log("✅ script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");

  if (!textarea || !responseBox) {
    console.error("❌ Missing textarea or responseBox element.");
    return;
  }

  textarea.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const message = textarea.value.trim();
      if (!message) return;

      responseBox.textContent = "Karl is preparing his reply…";

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        });

        const data = await res.json();
        responseBox.textContent = data.reply || "Karl was silent.";
      } catch (error) {
        console.error("❌ Fetch failed:", error);
        responseBox.textContent = "An error occurred. Karl is silent.";
      }

      textarea.value = "";
    }
  });
});
