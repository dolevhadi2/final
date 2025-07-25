    function updateClock() {
      document.getElementById('datetime').textContent =
        new Date().toLocaleString('he-IL');
    }

    function updateDateTime() {
      document.getElementById('datetime').textContent = new Date().toLocaleString('he-IL');
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();