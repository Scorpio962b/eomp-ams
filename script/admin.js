let products = JSON.parse(localStorage.getItem("products")) || [];

function SubmitItem() {
    let product = {
        imageUrl: "first one",
        name: "",
        catogary: "",
        price: ""
    }

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products))

    displayProducts()
}

function displayProducts() {
    let tbody = document.querySelector('tbody#value');
    tbody.innerHTML = ''
    products.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.imageUrl}</td>
                <td>${item.name}</td>
                <td>${item.catogary}</td>
                <td>${item.price}</td>
            </tr>
        `
    });
}
displayProducts()