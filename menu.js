fetch('menu.json')
//que hace? Esta linia incia la carga del archivo menu.json es una funcion de JavaScript que facilita la realizacion de solicitudes de red , como obtener de una archivo o un endpoint de API
//como funciona? fetch devuelve una promesas que cuando se resuelve ,tendra acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
// que hace? Esta linea toma el objeto de respuesta en un objeto de respuesta en un obtenido del fetch y utiliza el metodo .json() para convertir el cuerpode la respuesta en un objeto JzavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo de un formato JSON.
then(data=>{
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aui se procesa los datos JSON ya convertidos. Se obtiene una referencia al contenido del menu en el HTML mediante getElementBYid ('menu-container'),y luego se itera sobre los elementos(caracteristicas)del menu.
    data.items.forEach(category =>{
        const categoryTitle = document.createElement('h2');
        //Que hace? Aqui se crea un elemento h2,se asigna el nombre de la categoria como su contenido de texto , y luego se añade este titulo al contenedor menu/.
        categoryTitle.textContent= category.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement('table');
        //Que hace? se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tableHead)con las columnas pertinentes.tablebody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead=`<tr><th>foto</th><th>Descripcion</th><th>Precio</th></tr>`;
        let tablebody = '';
        //Como funciona? Para toda categoria en los datos , se realizan varios pasos Crear un titulo para la categoria (se crea un elemento <h2> para el titulo de la categoria,se establece su contenido de texto al nombre de la categoria(category.category),luego se agrega al contenedor del menu).
        //Crear una tabla para los elementos de esas categorias: se genera una tabla por cada categoria(primero se define el encabezado de la tabla <tr><th>foto</th><th>Descricion</th><th>Precio</th></tr> ).
        
        category.items.forEach (item =>{
            tableBody +=`<tr>
              <td><img src="{item.image}"alt="{item.name}"></img></td>
              <td>$(item.name)="${item.description}"</td>
              <td>${item.price}</td>  
            </tr>`;
        });
        table.innerHTML=tableHead+tablebody;
        menuContainer.appendChild(table);
    });
})

