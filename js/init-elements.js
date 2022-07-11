export default function initElements(e) {

  if (e.keyCode === 13 || e.type === "click") {
    const localDelete = document.querySelector("[data-tables]");
    const divsOld = document.querySelectorAll("[data-tables] div + div");
    divsOld.forEach((item) => {
      localDelete.removeChild(item);
    });

    const valueInit = document.querySelector('[data-input="init"]').value;
    const valueEnd = document.querySelector('[data-input="end"]').value;
    createTables(valueInit, valueEnd);
  }

  function createArrayNumbersTable(number) {
    let multiTableNumbers = [];
    for (let i = number; i > 0; i--) {
      multiTableNumbers.push(i);
    }
    return multiTableNumbers.reverse();
  }

  function createTables(valueInit, valueEnd) {
    const AddElements = function (name) {
      this.element = name;

      this.create = function () {
        this.element = document.createElement(this.element);
      };

      this.appendElements = function (elementInside) {
        [1, 2].forEach(() => {
          const inside = document.createElement(elementInside);
          this.element.appendChild(inside);
        });
      };

      this.addContent = function (content, numbers) {
        const tableNumber = numbers;
        const sum = `${content} x ${tableNumber} =`;
        const totalsum = content * tableNumber;
        this.element.children[0].innerText = sum;
        this.element.children[1].innerText = totalsum;
      };
    };

    const numberX = valueEnd - valueInit + 1;

    createArrayNumbersTable(numberX).forEach(() => {
      const div = document
        .querySelector("[data-table='phantom']")
        .cloneNode(true); // clona div exemplo com os filhos

      // seta o data-table Number, com o primeiro valor e vai incrementando a cada loop
      div.setAttribute("data-table", valueInit);
      ++valueInit;

      const tbody = div.querySelector("tbody"); // seleciona onde cada linha (tr) vai ser adicionada

      //muda o valor do Th para o valor do data-table
      const th = div.querySelector("th");
      th.innerText = div.getAttribute("data-table");

      // cria 10 linhas para cada div nova
      createArrayNumbersTable(10).forEach((NumberOfSum) => {
        const newConstru = new AddElements("tr");
        newConstru.create();
        newConstru.appendElements("td");
        newConstru.addContent(th.innerText, NumberOfSum);
        tbody.appendChild(newConstru.element);
      });

      // inserir cada div
      const insertDiv = document.querySelector("[data-tables]");
      insertDiv.appendChild(div);
    });
  }
}
