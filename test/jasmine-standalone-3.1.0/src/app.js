//This the Cat Clicker data for the app.
const catData = [
    {   name: "fluffy",
        img: "pic/christmas kitty.png",
        clickNumber: 0
    },
    {
        name: "furball",
        img: "fluffy kitten.png",
        clickNumber: 0
    },
    {
        name: "sleepy",
        img: "sleepy cat.png",
        clickNumber: 0
    },
    {
        name: "peppy",
        img: "wakeup cat.png",
        clickNumber: 0
    }
];

//This is the catEngine which coordinates between the cat clicker model and the UI
const catEngine = {
    //This method will increment the counter
    addCounter : function(index){
        catData[index].clickNumber += 1;
    },

    //This method will the display object to view a particular object in the
    //catData array
    currentDisplay : function(index){
        if(index >= 0){
            return catData[index];
        }
        else{
            return(catData[0]);
        }
    },

    //This method will display all the cats
    displayAll : function(){
        return catData;
    },

    //THis method will add a cat into the catData array
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
    }
};
