fetch('menu.json')
.then(response =>response.json())
.then(data =>{
    const menuContianer=document.getElementById('menu-container')
    let total = 0;

    data.items.forEach(category => {
        const categoryTitle=document.createElement('h3');
        categoryTitle.textContent = category.category
        menuContianer.appendChild(categoryTitle);
        
        const table =document.createElement('table')
        let tableContent = `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>`;
        let tableBody= '';
        
        category.items.forEach(item =>{
            tableBody +=
            `<tr>
            <td><img scr="${items.image}" alt="${item.name}" style = "width:100px;"></td>
            <td>${item.name}-${item.description}</td>
            <td>${item.price}</td>
            <td><input type="checkbox" data-price = "${item.price.replace('&','')}" onchange="updateTotal()"></td>
            </tr>`;
        });
        table.innerHTML = tableContent;
        menuContianer.appendChild(table);
    })
    function updateTotal() {
        const checkboxes = document.querySelector('input [type="checkbox"][data-price]');
        let currentTotal = 0 ;
        checkboxes.forEach(checkbox =>{
            currentTotal += parsefloat(checkbox.getAttribute('data-price'));
        });
        document.getElementById('total').textContent = currentTotal.toFixed(2);
    }
});