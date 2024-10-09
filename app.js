var productsList = [];

function add_product() {
    
    var product = document.getElementById('producto').value;
    const list = document.getElementById('show_list');
    list.innerHTML = '';

    productsList.push(product);
    console.log(productsList);

    for(let i = 0; i < productsList.length; i++){
       
        const item = document.createElement("li");
        item.textContent = productsList[i]; 
        list.appendChild(item); 
    }
    var product = document.getElementById('producto').value = "";
}

function deleteAll() {
  productsList = [];
  const list = document.getElementById('show_list').innerHTML = "";
  
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
      });
  }