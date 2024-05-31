// script.js
function generateBirthdayCard() {
    const recipientName = document.getElementById('recipient-name').value;
    const birthdayMessage = document.getElementById('birthday-message');
    birthdayMessage.innerHTML = `Chúc mừng sinh nhật ${recipientName}! 🎂🎉`;
}
