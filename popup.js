document.addEventListener('DOMContentLoaded', function() {
  fetch('https://status.riotgames.com/lol?region=eun1&locale=en_GB')
    .then(response => response.json())
    .then(data => {
      const leagueStatus = data.services['league-of-legends'];

      if (leagueStatus && leagueStatus.status === 'online') {
        document.getElementById('status').textContent = '';
      } else {
        document.getElementById('status').textContent = '';
      }
    })
    .catch(error => {
      console.error('Error while fetching data:', error);
      document.getElementById('status').textContent = '';
    });
});

document.getElementById('statusButton1').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=eun1&locale=en_GB' });
});
document.getElementById('statusButton2').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=euw1&locale=en_GB' });
});
document.getElementById('statusButton3').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=br1&locale=pt_BR' });
});
document.getElementById('statusButton4').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=jp1&locale=ja_JP' });
});
document.getElementById('statusButton5').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=kr1&locale=ko_KR' });
});
document.getElementById('statusButton6').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=la1&locale=es_MX' });
});
document.getElementById('statusButton7').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=la2&locale=es_AR' });
});
document.getElementById('statusButton8').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=na1&locale=en_US' });
});
document.getElementById('statusButton9').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=oc1&locale=en_AU' });
});
document.getElementById('statusButton10').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=ru1&locale=ru_RU' });
});