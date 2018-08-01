
//This test suite looks at the cat clicker's data
describe("Cat clicker data", function(){
    
    //spec looks at if the data object exists
    it("catData is defined", function(){
        expect(catData).toBeDefined();
    });

    //spec checks to see if all the cat objects have a name
    it("There are cat names in catData object", function(){
        for(let i = 0; i < catData.length; i++){
            expect(catData[i].name).toBeDefined();
        }
    });

    //spec checks if all the cat objects have an image associated with the object
    it("All cat objects has an img attribute", function(){
        for(let i = 0; i < catData.length; i++){
            expect(catData[i].img).toBeDefined();
        }
    });

    //spec checks if all the img src is defined
    it("All cat objects have a src linking to a file", function(){
        for(let i = 0; i < catData.length; i++){
            expect(catData[i].img).not.toBe(0);
        }
    });

    //spec to see if the clickNumber is defined
    it("All cat objects have the variable clickNumber", function(){
        for(let i = 0; i < catData.length; i++){
            expect(catData[i].clickNumber).toBeDefined();
        }
    });    
});

//This suite looks at the inner workings of cat clicker.
describe("Cat engine", function(){

    //Does the cat engine object exist
    it("Cat engine object exist", function(){
        expect(catEngine).toBeDefined();
    });

    //Does the cat engine have an addCounter() method
    it("addCounter() method exists", function(){
        expect(catEngine.addCounter).toBeDefined();
    });

    //This test checks if the addCounter functions properly
    it("addCounter method increments the clickNumber", function(){
        //when the addCounter is called, the catData clickNumber to increment
        var index = 0;
        catEngine.addCounter(index);
        expect(catData[index].clickNumber).toBe(1);
    });

    //This test checks to see if the currentDisplay method exists
    it("currentDisplay() method exists", function(){
        expect(catEngine.currentDisplay).toBeDefined();
    });

    //This test checks if the currentDisplay() method will return
    //the particular object of the first cat
    it("currentDisplay() will return the particular cat object", function(){
        expect(catEngine.currentDisplay(0)).toBeDefined();
    });

    //This test checks what the error handling if index was negative
    it("if index is negative, currentDisplay() will point to index 0", function(){
        expect(catEngine.currentDisplay(-1)).not.toBeUndefined();
    });
});