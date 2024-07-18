let currentDisplay = 'clothes';

function displayClothes() {
    const container = document.querySelector("#product-list");
    container.innerHTML = '';
    clothes.forEach(item => {
        container.innerHTML += item.show();
    });
    currentDisplay = 'clothes';
}

function displayElectronics() {
    const container = document.querySelector("#product-list");
    container.innerHTML = '';
    electronics.forEach(item => {
        container.innerHTML += item.show();
    });
    currentDisplay = 'electronics';
}

displayClothes();
