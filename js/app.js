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
        if(catData.length > 0 && this.index != null){
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
    }
};

//These are the various buttons that sent info to the render object
//clickMe button
let button = document.getElementById("clickMe");
button.addEventListener("click", function(){
    render.clickMe();
});

//Left button
let buttonLeft = document.getElementById("left");
buttonLeft.addEventListener("click", function(){
    render.imgLeft();
    console.log(catEngine.currentDisplay());
});

//Right button
let buttonRight = document.getElementById("right");
buttonRight.addEventListener("click", function(){
    render.imgRight();
    console.log(catEngine.currentDisplay());
});

//Reset Clicker number
let resetClickButton = document.getElementById("resetClick");
resetClickButton.addEventListener("click", function(){
    render.resetClick();
});

//Delete Cat button
let deleteCatButton = document.getElementById("deleteCat");
deleteCatButton.addEventListener("click", function(){
    catEngine.deleteCat();
});