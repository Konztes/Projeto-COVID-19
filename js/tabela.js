async function tabelaCovid() {
    try {
      // Requisição para a API com dados de COVID-19 para todos os estados
      const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
      const data = await response.json();
      
      // Cria a tabela
      const table = document.createElement("table");
      table.style.width = "70%";
      table.style.borderCollapse = "collapse";
      table.style.marginLeft = '220px';
  
      // Cria o cabeçalho da tabela
      const headerRow = table.insertRow();
      const headers = ["Estado", "Casos Confirmados", "Mortes", "Suspeitos", "Recusados"];
      headers.forEach(headerText => {
        const headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerCell.style.border = "1px solid black";
        headerCell.style.padding = "8px";
        headerCell.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(headerCell);
      });
  
      // Preenche a tabela com dados de cada estado
      data.data.forEach(state => {
        const row = table.insertRow();
        ["state", "cases", "deaths", "suspects", "refuses"].forEach(field => {
          const cell = row.insertCell();
          cell.textContent = state[field];
          cell.style.border = "1px solid black";
          cell.style.padding = "8px";
          cell.style.textAlign = "center";
        });
      });
  
      // Adiciona a tabela ao corpo do documento
      document.body.appendChild(table);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  // Chama a função para buscar e exibir os dados ao carregar a página
  window.onload = tabelaCovid;