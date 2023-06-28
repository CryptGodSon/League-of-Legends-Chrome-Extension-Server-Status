chrome.runtime.onInstalled.addListener(() => {
  console.log('Riot Games Status Checker installed.');
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://status.riotgames.com/lol?region=eun1&locale=en_GB' });
});
