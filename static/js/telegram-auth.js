document.addEventListener('DOMContentLoaded', function () {
    const initData = window.Telegram.WebApp.initData;

    if (!initData) {
        console.error('Telegram WebApp is not initialized.');
    } else {
        console.log('initData:', initData);

        fetch('/telegram-auth/', {
            method: 'POST',
            body: JSON.stringify({ initData }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                console.log('User authorized');
            } else {
                console.error('Authorization failed');
            }
        })
        .catch(error => console.error('Error in fetch:', error));
    }
});