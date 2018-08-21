//This the Cat Clicker data for the app.
let catData = [
    {   name: "fluffy",
        img: "pic/christmas kitty.png",
        clickNumber: 0,
        quote: "Meow all too much"
    },
    {
        name: "furball",
        img: "pic/fluffy kitten.png",
        clickNumber: 0,
        quote: "That was purrfect"
    },
    {
        name: "sleepy",
        img: "pic/sleepy cat.png",
        clickNumber: 0,
        quote: "You are such a furrball!"
    },
    {
        name: "peppy",
        img: "pic/wakeup cat.png",
        clickNumber: 0,
        quote: "Cats are special"
    }
];

//This is the catEngine which coordinates between the cat clicker model and the UI
const catEngine = {
    //keeps track of current index
    index : 0,

    //keeps track of the total number of cats
    total : catData.length,

    //This method will increment the counter
    addCounter : function(index){
        catData[index].clickNumber += 1;
    },

    //This resets the counter
    resetCounter : function(index){
        if(this.total > 0){
            catData[index].clickNumber = 0;
        }
        else{
            return  0;
        }
    },

    //This method will the display object to view a particular object in the
    //catData array
    currentDisplay : function(){
        return catData[this.index];
    },

    //This method will add a cat into the catData array
    addCat : function(newName, url){
        let newCat = {}; //initialize a new cat object

        if(newName != null && url != null){ //This ensures that the user does not enter nothing
            newCat = {
                name: newName,
                img: url,
                clickNumber: 0
            };
        }
        else{
            return 0;
        }
        catData.push(newCat);
    },

    //This method will delete a cat from the catData array
    deleteCat : function(){
        if(catData.length != 0 && this.index != null){
            catData.splice(this.index,1);
            this.total -=1;
        }
        else{
            return 0;
        }
    }
};

//Display object that renders the cats and functionality of the buttons
const render = {
    //This allows the clickMe button to increment the clickCount number
    clickMe : function(){
        let index = catEngine.index;
        catEngine.addCounter(index);
    },

    //This will move the images to the left
    imgLeft : function(){
        if(catEngine.index > 0){
            catEngine.currentDisplay(catEngine.index);
            catEngine.index -=1;
        }else{
            catEngine.currentDisplay(catEngine.total - 1);
            catEngine.index = catEngine.total - 1;
        }
    },

    //This will move the image to the right
    imgRight : function(){
        if(catEngine.index < catEngine.total -1){
            catEngine.currentDisplay(catEngine.index);
            catEngine.index +=1;
        }else{
            catEngine.currentDisplay(0); 
            catEngine.index = 0;
        }
    }, 

    //This method will reset the click counter
    resetClick : function(){
        if(catEngine.index >= 0){
            catEngine.resetCounter(catEngine.index);
        }
    },

    //This method will parse the img to its components
    parseImg : function(){
        if(catEngine.total != 0){
            let cat = catEngine.currentDisplay();
            return cat.img;
        }
        else{
            return 0;
        }
    },

    //This method will parse the number of clicks
    parseClick : function(){
        if(catEngine.total != 0){
            let cat = catEngine.currentDisplay();
            return cat.clickNumber;
        }
        else{
            return 0;
        }
    },

    //This parse method will grab the saying to be displayed
    parseQuote : function() {
        if(catEngine.total != 0){
            let cat = catEngine.currentDisplay();
            return cat.quote;
        }
        else{
            return 0;
        }

    },

    //This method will display the cats and various pieces of info on the screen
    display : function(){
        let canvas = document.getElementById("mainImage");
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = this.parseImg();
        img.onload = function(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        };
    },

    //This method will update the number of clicks
    clickNumberDisplay : function(){
        document.getElementById("clickNumber").innerHTML = this.parseClick();
    },

    //This method will display the parsed quote
    catQuote : function(){
        document.getElementById("catPun").innerHTML = this.parseQuote();
    }
};

//This will draw the image initially and show the cat Quote
render.display();
render.catQuote();

//These are the various buttons that sent info to the render object
//clickMe button
let button = document.getElementById("clickMe");
button.addEventListener("click", function(){
    render.clickMe();
    render.clickNumberDisplay();
    render.catQuote();
});

//Left button
let buttonLeft = document.getElementById("left");
buttonLeft.addEventListener("click", function(){
    render.imgLeft();
    render.display();
    render.clickNumberDisplay();
    render.catQuote();
});

//Right button
let buttonRight = document.getElementById("right");
buttonRight.addEventListener("click", function(){
    render.imgRight();
    render.display();
    render.clickNumberDisplay();
    render.catQuote();
});

//Reset Clicker number
let resetClickButton = document.getElementById("resetClick");
resetClickButton.addEventListener("click", function(){
    render.resetClick();
    render.clickNumberDisplay();
});

//Delete Cat button
let deleteCatButton = document.getElementById("deleteCat");
deleteCatButton.addEventListener("click", function(){
    if(catEngine.total > 0){
        catEngine.deleteCat();
        render.display();
        render.catQuote();
        render.clickNumberDisplay();
    }
    else{
        return 0;   //Find a way to deal with an empty array
    }   
});