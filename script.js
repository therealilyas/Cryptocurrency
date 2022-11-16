let bigData = [];
let tbody = document.getElementById("tbody");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=30&sparkline=false"
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
      ${data.name}</td>
      <td>${data.current_price} USD </td>`;

  tbody.appendChild(table);
}
