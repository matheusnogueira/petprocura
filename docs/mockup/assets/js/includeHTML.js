function carregarConteudo(arquivo, divId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(divId).innerHTML = this.responseText;
    } else {
      document.getElementById(divId).innerHTML =
        "Falha na localização do arquivo";
    }
  };
  xhttp.open("GET", arquivo, true);
  xhttp.send();
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function changeHTML(file) {
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById("content-change-id");
  element.textContent = contents;
}

function changeHTML3(file) {
  if (file) {
    /*make an HTTP request using the attribute value as the file name:*/
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          elmnt.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          elmnt.innerHTML = "Page not found.(" + file + ")";
        }
      }
    };
    xhttp.open("GET", file, true);
    let toSend = xhttp.send();

    document.getElementById("content-change-id").innerHTML = toSend;
    /*exit the function:*/
    return;
  }
}

function changeHTM2() {
  var myText = 'document.getElementById("textbox").value';
  document.getElementById("content-change-id").innerHTML = myText;
}
