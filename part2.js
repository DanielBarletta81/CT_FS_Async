/* Task 1: Countdown Timer

Create a countdown timer that starts from a user-defined duration (in seconds) 
and updates every second until it reaches zero.

 Use setInterval to update the timer display. */
 function startCountdown(duration) {
    let timeLeft = duration;
    const timerDisplay = document.getElementById('timer');
    
    const countdown = setInterval(() => {
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Timer finished!';
        }
        timeLeft--;
    }, 1000);
}




// setTimeout example part 2
//Task 2: Delayed Notification

function showDelayedNotification(message, delay) {
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 8000);
    }, delay);
}

// Show notification after 4 seconds
showDelayedNotification('Hello! This message has been delayed.', 4000);


//Task 3: Repeat Notification

/* Develop a function that repeatedly displays a notification at
fixed intervals
until the user dismisses it. 

Use setInterval to schedule the notifications. */

function showRepeatNotification(message, interval) {
    const notificationId = setInterval(() => {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        
        notification.innerHTML = `
            ${message}
            <button class="dismiss-btn">Dismiss</button>
        `;
        
        document.body.appendChild(notification);
        
        const dismissBtn = notification.querySelector('.dismiss-btn');
        dismissBtn.addEventListener('click', () => {
            clearInterval(notificationId);
            notification.remove();
        });
    }, interval);
    
    return notificationId;
}


// Show notification every 5 seconds until dismissed
showRepeatNotification('I will appear every 5 seconds until you dismiss me!!!', 5000);
