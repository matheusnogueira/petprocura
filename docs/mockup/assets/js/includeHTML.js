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
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}



function changeHTML(file) {
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
  xhttp.send();

  document.getElementById("content-change-id").innerHTML = myText;
  /*exit the function:*/
  return;
}
}

function changeHTM2() {
  var myText = 'document.getElementById("textbox").value';
  document.getElementById("content-change-id").innerHTML = myText;
}
