class Product {
    constructor(productID, productName, productDetails, stock, size, color, material) {
        this.productID = productID;
        this.productName = productName;
        this.productDetails = productDetails;
        this.stock = stock;
        this.size = size;
        this.color = color;
        this.material = material;
    }

    show() {
        return `
            <div class="product">
                <h2>${this.productName}</h2>
                <p>Product ID: ${this.productID}</p>
                <p>Details: ${this.productDetails}</p>
                <p>Stock: ${this.stock}</p>
                <p>Size: ${this.size}</p>
                <p>Color: ${this.color}</p>
                <p>Material: ${this.material}</p>
            </div>
        `;
    }
}

const clothes = [
    new Product("C001", "Shirt", "A comfortable shirt", 10, "L", "Blue", "Cotton"),
    new Product("C002", "Polo", "A stylish polo shirt", 5, "M", "Red", "Polyester"),
    new Product("C003", "T-shirt", "A casual T-shirt", 20, "S", "Green", "Cotton"),
    new Product("C004", "Shorts", "Comfortable shorts", 15, "L", "Black", "Nylon"),
    new Product("C005", "Long Pants", "Formal long pants", 7, "M", "Gray", "Wool"),
    new Product("C006", "Short Skirt", "Stylish short skirt", 12, "S", "Pink", "Silk"),
    new Product("C007", "Long Skirt", "Elegant long skirt", 8, "L", "White", "Cotton")
];

const electronics = [
    new Product("E001", "TV", "A 50 inch smart TV", 5, "50 inch", "Black", "Plastic"),
    new Product("E002", "Video Player", "A high-definition video player", 8, "Standard", "Black", "Plastic"),
    new Product("E003", "Phone", "A smartphone with 64GB storage", 20, "6 inch", "Black", "Metal and Glass"),
    new Product("E004", "Computer", "A desktop computer with 16GB RAM", 7, "Standard", "Silver", "Metal and Plastic"),
    new Product("E005", "Smartwatch", "A waterproof smartwatch", 15, "Medium", "Silver", "Metal"),
    new Product("E006", "Headphones", "Wireless noise-canceling headphones", 12, "One size", "Black", "Plastic"),
    new Product("E007", "Tablet", "10-inch tablet with quad-core processor", 10, "10 inch", "Gray", "Plastic"),
    new Product("E008", "Camera", "Mirrorless camera with 24MP sensor", 6, "Standard", "Black", "Metal"),
    new Product("E009", "Drone", "HD camera drone with GPS", 4, "Medium", "White", "Plastic"),
];