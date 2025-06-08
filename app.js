async function loadAssets() {
  const response = await fetch('assets.json');
  const assets = await response.json();
  const listContainer = document.getElementById('asset-list');
  const options = {
    valueNames: ['name', 'property', 'token_id', 'wallet'],
  };

  assets.forEach(asset => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3 class="name"></h3>
      <p class="property"></p>
      <p><strong>Token ID:</strong> <span class="token_id"></span></p>
      <p><strong>Wallet:</strong> <span class="wallet"></span></p>
      <p><a href="${asset.rune_link}" target="_blank">Rune</a> |
      <a href="${asset.metadata}" target="_blank">Metadata</a></p>
    `;
    listContainer.appendChild(li);
  });

  new List('asset-section', options);
}

document.addEventListener('DOMContentLoaded', loadAssets);
