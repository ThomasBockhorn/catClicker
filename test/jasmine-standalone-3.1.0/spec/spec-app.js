
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
        expect(catEngine.addCounter()).toBeDefined();
    });
});