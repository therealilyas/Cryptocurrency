let bigData = [];
let tbody = document.getElementById("tbody");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      displayItem(data[i], i + 1);
    }
  });

function displayItem(data, id) {
  let table = document.createElement("tr");

  table.innerHTML = `
      <th scope="row">${id}</th>
      <td>
      <image width="30" src="${data.image}"/>
    <b>${data.name}</b> <span>${data.symbol}</span>
      </td>
      <td>${data.market_cap}</td>
      <td>$${data.current_price}</td>
      
      `;

  tbody.appendChild(table);
}
