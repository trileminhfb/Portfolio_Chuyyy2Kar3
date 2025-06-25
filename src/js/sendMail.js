(function () {
  emailjs.init("nSdo94Iuw_Y-tyahB");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const spinner = document.getElementById("loading-spinner");
    const form = this;
    const message = document.getElementById("form-message");
    const buttonText = form.querySelector("span");

    spinner.classList.remove("hidden");
    message.classList.add("hidden");
    buttonText.textContent = "Đang gửi...";

    emailjs.sendForm("service_efg6mr4", "template_0w6o3he", form).then(
      () => {
        message.textContent = "Tin nhắn đã được gửi thành công!";
        message.classList.remove("hidden", "text-red-500");
        message.classList.add("text-green-500");
        form.reset();
        spinner.classList.add("hidden");
        buttonText.textContent = "Gửi Tin Nhắn";
      },
      (error) => {
        message.textContent = "Lỗi khi gửi: " + JSON.stringify(error);
        message.classList.remove("hidden", "text-green-500");
        message.classList.add("text-red-500");
        spinner.classList.add("hidden");
        buttonText.textContent = "Gửi Tin Nhắn";
        console.error(error);
      }
    );
  });
