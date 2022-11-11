async function logOut(event) {
    event.preventDefault()
  
    const response = await fetch('/api/login/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
      console.log('logout')
    } else {
      alert('fail');
    }
  }
  