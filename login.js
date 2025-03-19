document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'Sabya' && password === '23032025') {
      window.location.href = 'messages.html';
    } else {
      alert('Invalid username or password');
    }
  });