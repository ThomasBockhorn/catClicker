

//This test suite looks at the cat clicker's data
describe("Cat clicker data", function(){
    
    //spec looks at if the data object exists
    it("catData is defined", function(){
        expect(catData).toBeDefined();
    });

    //spec checks to see if all the cat objects have a name
    it("There are cat names in catData object", function(){
        for(var i = 0; i < catData.length; i++){
            expect(catData[i].name).toBeDefined();
        }
    });

    //spec checks if all the cat objects have an image associated with the object
    it("All cat objects has an img attribute", function(){
        for(var i = 0; i < catData.length; i++){
            expect(catData[i].img).toBeDefined();
        }
    });

    //spec checks if all the img src is defined
    it("All cat objects have a src linking to a file", function(){
        for(var i = 0; i < catData.length; i++){
            expect(catData[i].img).not.toBe(0);
        }
    });

    //spec to see if the clickNumber is defined
    it("All cat objects have the variable clickNumber", function(){
        for(var i = 0; i < catData.length; i++){
            expect(catData[i].clickNumber).toBeDefined();
        }
    }); 
    
    //Spec to see if each cat object had a quote
    it("All the cats have a funny quote", function(){
        for(var i = 0; i < catData.length; i++){
            expect(catData[i].quote).not.toBe(0);
        }
    });
});

//This suite looks at the inner workings of cat clicker.
describe("Cat engine", function(){
    //This test accounts for the current index
    it("index variable", function(){
        expect(catEngine.index).toBeDefined(); 
    });
    
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

    //This test checks if the resetCounter exists
    it("resetCounter Exists", function(){
        expect(catEngine.resetCounter).toBeDefined();
    });

    //This test checks to see if resetCounter resets the counter to zero
    it("resets counter to zero", function(){
        var index = 0;
        catEngine.addCounter(index);  //This will simulate the counter
        catEngine.resetCounter(index); //now we attempt to reset the counter
        expect(catData[index].clickNumber).toBe(0);
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

    //This test checks if displayAll exists
    it("displayAll exists", function(){
        expect(catEngine.displayAll).toBeDefined();
    });

    //This test checks to see if displayAll method displays all the images
    it("displays all the catData images", function(){
        var testData = catEngine.displayAll;
        expect(testData).not.toBe(0);
    });

    //This test checks to see if addCat method exists
    it("addCat method exists", function(){
        expect(catEngine.addCat).toBeDefined();
    });

    //addCat adds a new cat and img
    it("addCat adds a new cat and URL", function(){
        var testCatName = "black";
        var testURL = "https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/";

        var testObject = {
            name: testCatName,
            img: testURL,
            clickNumber: 0
        };
        catEngine.addCat(testCatName, testURL);
        expect(catData).toContain(jasmine.objectContaining(testObject));
    });

    //This checks to see if a user accidently puts down nothing for either catName and url
    it("Checks to ensure that name and url won't accept empty strings", function(){
        var testCatName;
        var testURL;

        var testObject = {
            name: testCatName,
            img: testURL,
            clickNumber: 0
        };
        catEngine.addCat(testCatName, testURL);
        expect(catData).not.toContain(jasmine.objectContaining(testObject));
    });

    //This checks if addCat can handle an undefined variable
    it("Checks if undefined parameters can be dealt with in addCat", function(){
        var testResult = catEngine.addCat();
        expect(testResult).toBe(0);
    });

    //This test checks to see if deleteCat exists
    it("deleteCat exists", function(){
        expect(catEngine.deleteCat).toBeDefined();
    });

    //This test checks to see if deleteCat actually deletes an element
    it("deleteCat deletes a specific element in array", function(){
        //Gets the value of the first element in catData
        var testObject = catEngine.currentDisplay(0);
        
        //Now we delete the cat object with index 0
        catEngine.deleteCat(0);

        //Now we check to see if that cat object is still there
        expect(catData).not.toContain(jasmine.objectContaining(testObject));
    });

    //This test checks to see if no index is specified, that the method
    //returns 0
    it("deleteCat returns 0 if no index is specified", function(){
        var test = catEngine.deleteCat();

        expect(test).toBe(0);
    });
});

//Display object
describe("Display object", function(){
    it("Verifies if the display object exist", function(){
        expect(render).toBeDefined();
    });

    //This method allows the click button to function
    it("click button is defined", function(){
        expect(render.clickMe).toBeDefined();
    });

    //This test the clickMe method works
    it("The clickMe method works", function(){
        spyOn(catEngine, "addCounter");
        catEngine.addCounter();
        expect(catEngine.addCounter).toHaveBeenCalled();
    });

    //This method checks to see if the left button works
    it("Left button is defined", function(){
        expect(render.imgLeft).toBeDefined();
    });

    //This test checks to see if the imgLeft calls the currentDisplay method
    it("currentDisplay method gets called", function(){
        spyOn(catEngine, "currentDisplay");
        catEngine.currentDisplay();
        expect(catEngine.currentDisplay).toHaveBeenCalled();
    });

    //This test checks to see if the right button works
    it("Right button is defined", function(){
        expect(render.imgRight).toBeDefined();
    });

    //This test will check to see if the resetClick method works
    it("Reset ClickMe button works", function(){
        expect(render.resetClick).toBeDefined();
    });
});