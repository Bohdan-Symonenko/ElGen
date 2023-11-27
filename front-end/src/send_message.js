document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("post_button");
    const inputField = document.getElementById("new_post_input");

    submitButton.addEventListener("click", function(event)
    {
        event.preventDefault();

        const text = inputField.value;

        const messageData = {
            message_text: text
            // Другие поля сущности Message, если они есть
        };

        fetch('http://localhost:8080/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Message sent:', data);
                // Очистка поля после отправки данных
                inputField.value = '';
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});
