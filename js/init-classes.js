import initElements from './init-elements.js';

export default function initClass() {

  const button = document.querySelector('[data-input="button"]');
  const inputs = document.querySelectorAll('[data-input] input')
  const containerInput = document.querySelector(".container");
  const containerTable = document.querySelector("[data-tables]");

  function classToggle() {
      const classes = containerTable.classList.contains("active");
      if (!classes) {
        containerTable.classList.add("active");
        containerTable.parentElement.appendChild(containerInput);
      } else {
        // verifica se ja foi ativado a função e colocado a classe active, se não foi, então coloca pela primeira vez, caso já tenha sido colocado, então aplico o scroll suave para quando houver um clique, que a window volte para o inicio.
        containerTable.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

  }

  /* 
  
    PRECISA VERIFICAR CAMPOS SAO TRUES E SE OS NUMEROS SÀO VALIDOS, ISSO DE UMA FORMA QUE NAO IMPLEMENTE A CLASSE, E NEM APAREÇA AS TABELAS.

    CRIAR VERIFICADOR DE NUMERO VALIDO EM TEMPO REAL COM RESPOSTA NO HTML

    CRIAR KEYBOARD COPY E ELEMENTO NO TOPO DA PAGINA INFORMANDO QUE AO CLICK SERA COPIADO
  
  */

  function verification() {
    const input1 = +document.querySelector('[data-input="init"]').value;
    const input2 = +document.querySelector('[data-input="end"]').value;
 
    if(input1 > 0 && input2 > 0 && input1 <= input2){
      return 1
    } else {
      containerTable.classList.remove("active");
      return 0
    }
  }

  if (button && containerInput && containerTable) {
      button.addEventListener('click', (e) => {
        verification() ? classToggle() : alert("Informe um número válido");
        initElements(e);
      })
      inputs.forEach((input) => {
        input.addEventListener('keydown', (e) => {
          if(e.keyCode === 13){
            verification() ? classToggle() : alert("Informe um número válido");
            initElements(e);
          }
        })
      })
  }


}
