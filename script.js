document.addEventListener("DOMContentLoaded", () => {
  const vfChatContainer = document.getElementById("vf-chat");

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = function () {
      window.voiceflow.chat.load({
          verify: { projectID: "67767c60295927a88b27bafc" }, // Replace with your actual project ID
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          render: {
              mode: "embedded",
              target: vfChatContainer, // Embed directly into #vf-chat
          },
          autostart: true,
          assistant: {
              stylesheet: "https://richaall93.github.io/Chatbot-css/chatbot.css", // Hosted chatbot.css URL
          },
      });
  };
  script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  document.head.appendChild(script);
});
