let Iphone = function(nameIphone, ram, color, price) {
    this.nameIphone = nameIphone;
    this.ram = ram;
    this.color = color;
    this.price = price;


    this.getNameIphone = function () {
        return this.nameIphone;
    };
    this.getRam = function () {
        return this.ram;
    };
    this.getColor = function () {
        return this.color;
    };
    this.getPrice = function () {
        return this.gia;
    };


    this.setNameIphone = function (nameIphone1) {
        this.nameIphone = nameIphone1
    };
    this.setRsam = function (ram1) {
        this.ram = ram1
    };
    this.setColor = function (mau1) {
        this.color = mau1
    };
    this.setPrice = function (Price1) {
        this.price = Price1

    };
    this.thongTinIphone = function () {
        return "Name Phone: " + this.nameIphone + "<br>Ram: " + this.ram + "<br>Color: " + this.color + "<br>Price: " + this.price;
    };

};


let iphoneXsMax64g = new Iphone("Iphone Xs Max 64G", "64G", "white", "29.990.000");
let iphoneXs256g = new Iphone("Iphone Xs 256G", "256G", "black", "32.990.000");
let iphoneX256g = new Iphone("Iphone X 256G", "256G", "red", "27.990.000");
let iphoneXs64g = new Iphone("Iphone Xs 64G", "64G", "black", "26.990.000");
let iphone1164g = new Iphone("Iphone 11 64G", "64G", "black", "17.400.000");
let iphone11Pro512g = new Iphone("Iphone 11 Pro 512G", "64G", "black", "31.400.000");


let arrIphone = [];
arrIphone.push(iphoneXsMax64g);
arrIphone.push(iphoneXs256g);
arrIphone.push(iphoneX256g);
arrIphone.push(iphoneXs64g);
arrIphone.push(iphone1164g);
arrIphone.push(iphone11Pro512g);



function searchIphone() {
    let inputIphone = document.getElementById("search");
    for (let i = 0; i < arrIphone.length; i++) {
        if (inputIphone.value === arrIphone[i].nameIphone) {
            document.getElementById("showIphone").innerHTML = arrIphone[i].thongTinIphone() +`<br><button type='button' onclick='del(${i})'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;<button>Edit</button><br><hr>`;
            break;
        } else {
            document.getElementById("showIphone").innerHTML = "There are no search results"
        }
    }
}

function showAllIphone() {
    document.getElementById("showIphone").innerHTML = "";
    for (let i = 0; i < arrIphone.length; i++) {
        document.getElementById("showIphone").innerHTML += arrIphone[i].thongTinIphone() +`<br><button type='button' onclick='del(${i})'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;<button>Edit</button><br><hr>`;
    }
}

function addIphone() {
    let addIphoneNew = new Iphone();
    arrIphone.push(addIphoneNew);

    let nameIphone = prompt("Name Iphone");
    let ramIphone = prompt("Ram Iphone");
    let colorIphone = prompt("Color Iphone");
    let priceIphone = prompt("Price Iphone");

    addIphoneNew.setNameIphone(nameIphone);
    addIphoneNew.setRsam(ramIphone);
    addIphoneNew.setPrice(priceIphone);
}

function del(index) {
   arrIphone.splice(index,1);
   showAllIphone();
}
