const divisas = document.getElementById("divisas");
const today = new Date();
let date = "Actualizado: " + today.getDate()+'-'+(today.getMonth()+1)+'-'+ today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      if (
        element.casa.nombre != "Dolar Soja" &&
        element.casa.nombre != "Bitcoin" &&
        element.casa.nombre != "Argentina"
      ) {
        debugger
        let elDiv = document.createElement("div");
        elDiv.className = "tarjeta-divisa";

        nombre = document.createElement("h2");
        nombre.innerHTML = element.casa.nombre;

        let valores = document.createElement("div");
        valores.className = "valores";

        compra = document.createElement("p");
        compra.innerHTML = "Compra " + "<br>" + "$ " + element.casa.compra;
        valores.append(compra);

        venta = document.createElement("p");
        venta.innerHTML = "Venta " + "<br>" + "$ " + element.casa.venta;
        valores.append(venta);

        variacion = document.createElement("p");
        variacion.innerHTML = element.casa.variacion + "%";
        console.log(element.casa.variacion);
        debugger
        if (element.casa.variacion.includes("-")) {
          debugger
          variacion.className = "variacion-red";
          debugger
        }else{
          debugger
          variacion.className = "variacion-green";
          debugger
        }

        elDiv.append(nombre);
        elDiv.append(valores);
        elDiv.append(variacion);
        elDiv.append(date);
        divisas.append(elDiv);
      }
    });
  });
