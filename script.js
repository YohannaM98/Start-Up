
document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.getElementById("audienceSwitch");
      const label = document.getElementById("audienceLabel");
      const employee = document.getElementById("employeeContent");
      const employer = document.getElementById("employerContent");

      toggle.addEventListener("change", () => {
        if (toggle.checked) {
          employee.classList.remove("show");
          employer.classList.add("show");
          label.textContent = "For Employers";
        } else {
          employer.classList.remove("show");
          employee.classList.add("show");
          label.textContent = "For Employees";
        }
      });
    });

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


  const chatOutput = document.getElementById("chat-output");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function appendMessage(message, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("msg", sender);
    msgDiv.textContent = message;
    chatOutput.appendChild(msgDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight; // auto-scroll
  }
  
  async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    appendMessage(userMessage, "user");

    // Simulate bot reply
      const botReply = await puter.ai.chat({ system: context });
      appendMessage(botReply, "bot");


    userInput.value = "";
  }

  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUserInput();
    }
  });

  // Back to top functionality
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
