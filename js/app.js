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

    //The init function
    init: function(){
       render.clickMe();
       render.imgLeft();
       render.imgRight();
       render.resetClick(); 
    },

    //This method will increment the counter
    addCounter : function(index){
        catData[index].clickNumber += 1;
    },

    //This resets the counter
    resetCounter : function(index){
        catData[index].clickNumber = 0;
    },

    //This method will the display object to view a particular object in the
    //catData array
    currentDisplay : function(index){
        if(index >= 0){
            return catData[index];
        }
        else{
            return catData[0];
        }
    },

    //This method will display all the cats
    displayAll : function(){
        return catData;
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
    deleteCat : function(index){
        if(catData.length > 0 && index != null){
            catData.splice(index,1);
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
        const buttonClick = document.querySelector("clickMe");
        let index = catEngine.index;
        buttonClick.addEventListener("click", function(){
            catEngine.addCounter(index);
        });
    },

    //This will move the images to the left
    imgLeft : function(){
        const buttonLeft = document.querySelector("left");
        buttonLeft.addEventListener("click", function(){
            if(catEngine.index > 0){
                catEngine.index -=1;
                catEngine.currentDisplay(catEngine.index);
            }else{
                catEngine.currentDisplay(0);
            }
        });
    },
    //This will move the image to the right
    imgRight: function(){
        const buttonRight = document.querySelector("right");
        buttonRight.addEventListener("click", function(){
            if(catEngine.index < catData.length){
                catEngine.index +=1;
                catEngine.currentDisplay(catEngine.index);
            }else{
                catEngine.currentDisplay(catData.length);
            }
        });
    },
    //This method will reset the click counter
    resetClick: function(){
        const resetClick = document.querySelector("resetClick");
        resetClick.addEventListener("click", function(){
            if(catEngine.index >= 0){
                catEngine.resetCounter(catEngine.index);
            }else{
                //Need to create some sort of error handling message
                console.log("There are no cats");
            }
        });
    }
};
