
function searchItem() {

    var searchInput = document.getElementById('searchInput');
    var searchInputValue = searchInput.value


    var mobiles = {
        samsung: {
            SamsungGalaxyA60: {
                model: "Samsung Galaxy A60",
                color: "multi",
                price: 30000
            },
            SamsungGalaxyA11: {
                model: "Samsung Galaxy A11",
                color: "red",
                price: 20000
            },
            SamsungGalaxyJ5Pro: {
                model: "Samsung Galaxy J5 Pro",
                color: "black",
                price: 18000
            },
            SamsungGalaxyS8: {
                model: "Samsung Galaxy S8",
                color: "grey",
                price: 32000
            },
            SamsungGalaxyS21: {
                model: "Samsung Galaxy S21",
                color: "light grey",
                price: 40000
            },
            SamsungGalaxyA32: {
                model: "Samsung Galaxy A32",
                color: "black",
                price: 25000
            },
            SamsungGalaxyA12: {
                model: "Samsung Galaxy A12",
                color: "blue",
                price: 35000
            },
            SamsungGalaxyA71: {
                model: "Samsung Galaxy A71",
                color: "light blue",
                price: 48000
            }
        }
    }



    for (var key in mobiles) {
        for (var key1 in mobiles[key]) {
            if (searchInputValue === mobiles[key][key1].model) {

                var searchProduct = document.createElement('div');
                searchProduct.setAttribute("class", "container")
                searchProduct.className += "div"

                var searchProduct1 = document.createElement('div');
                searchProduct1.setAttribute("class", "row")

                var searchProduct2a = document.createElement('div');
                searchProduct2a.setAttribute("class", "col-md-6")

                var searchProduct2b = document.createElement('div');
                searchProduct2b.setAttribute("class", "col-md-6")

                searchProduct1.appendChild(searchProduct2a)

                searchProduct1.appendChild(searchProduct2b)

                searchProduct.appendChild(searchProduct1)

                var product = document.getElementById('products')

                var mobileName = document.getElementsByClassName("card-title")
                
                for (var i = 0; i < mobileName.length; i++) {
                    if (mobileName[i].innerHTML === mobiles[key][key1].model) {
                        var searchProductImg = document.createElement('img')
                        var src = mobileName[i].parentNode.previousSibling.previousSibling.src
                        searchProductImg.setAttribute("src", src)
                        var ul = document.createElement('ul')
                        var li1 = document.createElement('li')
                        var li2 = document.createElement('li')
                        var li3 = document.createElement('li')
                        var searchProductTextModel = document.createTextNode("Model: " + mobiles[key][key1].model)
                        var searchProductTextColor = document.createTextNode("Color: " + mobiles[key][key1].color)
                        var searchProductTextPrice = document.createTextNode("Price: " + mobiles[key][key1].price)
                        li1.appendChild(searchProductTextModel)
                        li2.appendChild(searchProductTextColor)
                        li3.appendChild(searchProductTextPrice)
                        ul.appendChild(li1)
                        ul.appendChild(li2)
                        ul.appendChild(li3)
                        ul.setAttribute("class", "mt-5")

                        searchProduct2a.appendChild(searchProductImg)
                        searchProduct2b.appendChild(ul)

                        product.innerHTML = searchProduct.innerHTML
                    }

                }
            }
        }


    }
}

