const products =[
    {
        "name":"Tomato Paste (tin)",
        "category":"Groceries",
        "price":348.0,
        "image":"./images/Tomato paste tin.jpeg",
        "description":"rich tomato paste tin, perfect for stews and jollof rice"

    },
    { 
        "name":"Onions 1kg",
        "category":"Produce",
        "price":687.0,
        "image":"./images/Onions 1kg.jpeg",
        "description":"fresh onions from local farms in knwen"
    },
    {
        "name":"Rice 25kg",
        "category":"Grains",
        "price":17935.0,
        "image":"./images/Rice 25kg.jpeg",
        "description":"premium long-grain white rice 25kg bag, clean and stone-free, ideal for families"
    },
    {
        "name":"Soap (bar)",
        "category":"Household",
        "price":398.0,
        "image":"./images/Soap bar.jpeg",
        "description":"bathing soap bar, keep skin fresh germ-free"
    },
    {
        "name":"Palm Oil 5L",
        "category":"Oils",
        "price":7010.0,
        "image":"./images/Palm oil 5l.jpeg",
        "description": " pure red palm oil, 5 liters - perfect for cooking and frying"
    },
    {
        "name":"Palm Oil 1L",
        "category":"Oils",
        "price":1400.0,
        "image":"./images/Palm oil 1l.jpeg",
        "description": "pure red palm oil 5 litters,"
    },
    {
        "name":"Maggi Cubes (pack)",
        "category":"Groceries",
        "price":478.0,
        "image":"./images/Maggi cube pack.jpeg",
        "description": "maggi seasoning cubes pack of 50, add great taste to soup"
    },
    {
        "name":"Beans (Red)",
        "category":"Grains",
        "price":890.0,
        "image":"./images/Beans red.jpeg",
        "description": "clean red beans, rich in protien and perfect for daily cooking"
    },
    {
        "name":"Rice 50kg",
        "category":"Grains",
        "price":36222.0,
        "image":"./images/Rice 50kg.jpeg",
        "description":"premuin long-grain white rice 50kg,best value for families and businesses"
    },
    {
        "name":"Beans (White)",
        "category":"Grains",
        "price":818.0,
        "image":"./images/beans_white.jpeg",
        "description":"clean white beans, sweet taste, rich in protien and easy to cook"
    },
    {
        "image":" ",
        "name":"Detergent 1kg",
        "category":"Household",
        "price":1747.0,
        "image":"./images/Detergent_1kg.jpeg",
        "description":"strong washing powder 1kg, removes tough stains and keeps cloths fresh"
    },
    {
        "name":"Plantain (bunch)",
        "category":"Produce",
        "price":2547.0,
        "image":"./images/Plantain bunch.jpeg",
        "description":"fresh ripe plantain bunch, sweet and perfect for frying or boiling"
    },
    {
        "name":"Salt 1kg",
        "category":"Groceries",
        "price":297.0,
        "image":"./images/Salt 1kg.jpeg" ,
        "description":"fine iodized cooking salt 1kg, essential for all your cooking needs"  
        
    },
    {
        "name":"Cassava (bag)",
        "category":"Produce",
        "price":4203.0,
        "image":"./images/casava_bags.jpeg",
        "description":"fresh cassava bag, high quality, great for fufu, garri and koki"
    },
    {
        "name":"Milk Powder 400g",
        "category":"Dairy",
        "price":2746.0,
        "image":"./images/Milk powder 400g.jpeg",
        "description":"nutritious milk powder 400g, creamy and ideal for tea, coffee and baking"
    },
    {
        "name":"Vegetable Oil 5L",
        "category":"Oils",
        "price":7544.0,
        "image":"./images/Vegetable Oil 5L.jpeg",
        "description":"pure vegetable cooking oil 5l, perfect for frying and cooking"
    },
    {
        "name":"Matches (box)",
        "category":"Household",
        "price":103.0,
        "image":"./images/matches box.jpeg",
        "description":"safety matches box, lights quickly, essential for kitchen and  household use"
    },
    {
        "name":"Sugar 1kg",
        "category":"Groceries",
        "price":796.0,
        "image":"./images/Sugar 1kg.jpeg",
        "description":"granulated white sugar 1kg, sweet and pure,baking and cooking"
    },
    {
        "name":"Tomatoes 1kg",
        "category":"Produce",
        "price":785.0,
        "image":"./images/Tomatoes 1kg.jpeg",
        "description":"fresh red tomatoes 1kg, perfect for stews and salads"

    },
    {
       
        "name":"Bread (loaf)",
        "category":"Bakery",
        "price":594.0,
        "image":"./images/bread_loaf.jpeg",
        "description":"soft fresh bread loaf, perfect for breakfast and sandwiches "
    }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productCard = document.createElement("div");

    productCard.innerHTML = `

        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 150px; object-fit: cover;border-radius: 8px; margin-bottom:10px;">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price} FCFA</p>
        </div>
    `;

    productList.appendChild(productCard);
});