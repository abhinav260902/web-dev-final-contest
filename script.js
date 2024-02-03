document.getElementById('tweetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var tweetInput = document.getElementById('tweetInput');
    var tweetText = tweetInput.value;
    tweetInput.value = '';

    var tweet = document.createElement('div');
    tweet.className = 'tweet';
    tweet.innerHTML = `
        <p>${tweetText}</p>
        <span class="like">Like</span>
        <span class="comment">Comment</span>
        <span class="delete">Delete</span>
    `;

    tweet.querySelector('.like').addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'blue' : 'red';
    });

    tweet.querySelector('.comment').addEventListener('click', function() {
        var comment = prompt('Enter your comment:');
        var commentElement = document.createElement('p');
        commentElement.textContent = comment;
        tweet.appendChild(commentElement);
    });

    tweet.querySelector('.delete').addEventListener('click', function() {
        tweet.remove();
    });

    document.getElementById('tweetsContainer').appendChild(tweet);
});




document.getElementById('tweetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tweetInput = document.getElementById('tweetInput');
    const tweetText = tweetInput.value.trim();
    if (tweetText) {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.textContent = tweetText;
        document.getElementById('tweetsContainer').appendChild(tweetElement);
        tweetInput.value = '';
    }
});

document.getElementById('tweetInput').addEventListener('input', function() {
    const tweetInput = document.getElementById('tweetInput');
    const tweetText = tweetInput.value.trim();
    const charCountElement = document.getElementById('charCount');
    charCountElement.textContent = `${tweetText.length}/1300`;
});
