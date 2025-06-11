document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("scroll-container");
  const dots = document.querySelectorAll(".dot");

  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  });
});
const questions = document.querySelectorAll('.faq-question');
questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;

    // Collapse all others
    document.querySelectorAll('.faq-answer').forEach((el) => {
      if (el !== answer) el.classList.remove('open');
    });

    // Toggle current one
    answer.classList.toggle('open');
  });
});
const context = `
You are a helpful assistant for a startup chatbot. Use the following info to answer ONLY these five questions:

1. Who founded the startup?  
The startup was founded by a group of passionate students and tech enthusiasts in 2024.

2. What problems does it solve?  
It addresses communication gaps in startups by providing AI-powered chat interfaces for customer support and engagement.

3. What services or products does it offer?  
It offers customizable chatbot solutions, knowledge bases, and integration tools for websites.

4. How can someone support or contact the team?  
They can reach the team via email at support@startup.ai or through the contact form on their website.

5. What’s the startup’s vision or long-term goal?  
To become a leading provider of accessible AI tools that empower small businesses to scale smartly.
`;

  const chat = puter.ai.chat({ system: context });

  const input = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const output = document.getElementById('chat-output');

  function appendMessage(text, className) {
    const msg = document.createElement('div');
    msg.className = `msg ${className}`;
    msg.innerText = text;
    output.appendChild(msg);
    output.scrollTop = output.scrollHeight;
  }

  async function sendMessage() {
    const question = input.value.trim();
    if (!question) return;

    appendMessage("You: " + question, 'user');
    input.value = "";

    const reply = await chat.ask(question);
    appendMessage("Chaty: " + reply, 'bot');
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });
