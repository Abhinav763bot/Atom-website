const btns=[
    {
        id: 1,
        name: 'Mobiles'
    },
    {
        id: 2,
        name: 'Watches'
    },
    {
        id: 3,
        name: 'Accessories'
    },
    {
        id: 4,
        name: 'Laptops'
    },
    {
        id: 5,
        name: 'Air Pods & Headphones'
    },
    {
        id: 6,
        name: 'Clear filters'
    },
    ]
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    const product = [
    {
        id: 1,
        image: 'page1img/iph12.jpg',
        title: 'Refurbished-Apple Iphone 12',
        price: 26000,
        category: 'mobile'
    },
    {
        id: 5,
        image: 'page1img/apgen2.jpg',
        title: 'Airpods Gen 2',
        price: 14560,
        category: 'airpods'
    },
    {
        id: 2,
        image: 'page1img/watch6.jpg',
        title: 'Apple Watch S6 - Refurbished',
        price: 29000,
        category: 'watches'
    },
    {
        id: 1,
        image: href="page1img/xr.jfif",
        title: 'Refurbished-Apple Iphone XR',
        price: 23200,
        category:'mobile'
    },
    {
        id: 5,
        image: 'page1img/appro.jpg',
        title: 'Air Pods Pro',
        price: 28065,
        category: 'airpods'
    },
    {
        id: 5,
        image: 'page1img/131.jpg',
        title: 'Boat Airdopes 131',
        price:  999,
        category: 'airpod'
    },
    {
        id: 4,
        image: 'page1img/chromebook.jfif',
        title: 'Refurbished-ASUS Vivobook',
        price: 29898,
        category: 'Laptop'
    },
    {
        id: 4,
        image: 'page1img/tufa15.jfif',
        title: 'Refurbished - ASUS TUF Gaming A15',
        price: 32350,
        category: 'Laptop'
    },
    {
        id: 3,
        image: 'page1img/blujyte.jpg',
        title: 'BluKyte iPhone 13 Pro Protective Cover Case',
        price: 130,
        category: 'accessories'
    },
    {
        id: 4,
        image: 'page1img/chromebook.jfif',
        title: 'Refurbished - HP Chromebook',
        price: 18985,
        category: 'Laptop'
    },
    {
        id: 5,
        image: 'page1img/bt550.jpg',
        title: 'boAt Rockerz 550',
        price: 1799,
        category: 'airpods'
    },
    {
        id: 1,
        image: 'page1img/vivoy22.jpg',
        title: 'Vivo Y22 2022 - Refurbished',
        price: 11199,
        category: 'mobile'
    },
    {
        id: 3,
        image: 'page1img/splitter1.jpg',
        title: 'VOROID Jade Black 2 in 1 Headphone & Charger Splitter Connector',
        price: 859,
        category: 'Accessories'
    },
    {
        id: 3,
        image: 'page1img/mipowerbank.jpg',
        title: 'MI Power Bank 3i 20000mAh',
        price: 2049,
        category: 'Accessories'
    },
    {
        id: 1,
        image: 'page1img/oneplus7.jpg',
        title: 'OnePlus 7 - Refurbished',
        price: 14599,
        category: 'mobile'
    }, 
    {
        id: 2,
        image: 'page1img/smgw4lte.jpg',
        title: 'Refurbished - Samsung Galaxy Watch4 LTE',
        price: 10999,
        category: 'watches'
    }, 
    {
        id: 3,
        image: 'page1img/watchstrap.jpg',
        title: 'MARVIK 22MM Smart Watch Strap Belt',
        price: 385,
        category: 'Accessories'
    }, 
    {
        id: 2,
        image: 'page1img/fngladiator.jpg',
        title: 'Fire-Boltt Gladiator ',
        price: 2499,
        category: 'Smart watch'
    },    
    ];
    
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>₹ ${price}.00</h2>
                <button>Buy Now</button>
                <button>Add to cart</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);

/*range slider */

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});