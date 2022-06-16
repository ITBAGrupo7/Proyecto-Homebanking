const divisas = document.getElementById("divisas");
const today = new Date();
let date = "Actualizado: " + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();
let i = 0;

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
        let elemc=0;
        let elDiv = document.createElement("div");
        elDiv.className = "tarjeta-divisa";

        nombre = document.createElement("h2");
        nombre.innerHTML = '<img src="img/b1.png" style="padding: 0px 10px;">' + element.casa.nombre;

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
        detalle=document.createElement("p");
        detalle.className = "detalle";
        detalle.innerHTML = "Variación en las últimas 24h";
        elDiv.append(nombre);
        elDiv.append(valores);
        elDiv.append(variacion);
        elDiv.append(detalle);
        elDiv.append(date);
        elDiv.setAttribute("id", "item" + i);
        i++;
        divisas.append(elDiv);
        elemc++;
      }
    });
  });
