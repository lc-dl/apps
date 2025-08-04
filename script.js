fetch('apps.json')
  .then(res => res.json())
  .then(apps => {
    const appList = document.getElementById('app-list');
    const searchInput = document.getElementById('search');

    function renderApps(filter = '') {
      appList.innerHTML = '';
      apps
        .filter(app => app.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(app => {
          const card = document.createElement('div');
          card.className = 'app-card';
          card.innerHTML = `
            <img src="${app.icon}" alt="${app.name} icon" />
            <div class="app-info">
              <div class="app-name">${app.name}</div>
              <div class="app-version">v${app.version}</div>
            </div>
            <a class="download-button" href="${app.download}" target="_blank">Download</a>
          `;
          appList.appendChild(card);
        });
    }

    searchInput.addEventListener('input', e => {
      renderApps(e.target.value);
    });

    renderApps();
  });
