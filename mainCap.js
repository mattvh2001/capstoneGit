
if (sessionStorage.getItem("hasCodeRunBefore") === null) {//checks if the code has run before
     localStorage.setItem("number",0);
     sessionStorage.setItem("hasCodeRunBefore", true);
}
function Comment(name,comment){//creates a comment object
    this.nameOf = name;
    this.commentOf = comment;
}
function Contact(name,email,message){//creates a contact details object
    this.fName = name;
    this.emailAddress = email;
    this.fMessage = message;
}
arrayImages =[];//initialises all the arrays
arrayArticles = [];
arrayRecipes = [];


document.querySelectorAll('.theButtImage').forEach(item => {//selects all the elements in theButtImage class and adds an evenlistener to then
    item.addEventListener('click', e => {
        let div = e.target.parentNode;//selects the parent of the events target element
        let c = div.children//lets c equal an array of the parent Elements children
        arrayImages.push(c[0].src);//adds the src of the image to the array of images
        localStorage.setItem("images", JSON.stringify(arrayImages));//saves the array to localStorage
        //console.log(arrayImages);//just used for testing

        let num = parseInt(localStorage.getItem("number"));//saves the number of items that have been saved
        num += 1;
        alert("You have saved " + num + " items.");
        localStorage.setItem("number",num);
    })
  })

  document.querySelectorAll('.theButtArt').forEach(item => {//selects all the elements in theButtArt class and adds an evenlistener to then
    item.addEventListener('click', e => {
        let div = e.target.parentNode;//selects the parent of the events target element
        let content = div.children;//lets content equal an array of the parent Elements children
        
        for (let i = 0; i < content.length-2; i++) {//this for loop cycles through the children array(stops before the last 2)
            arrayArticles.push(content[i].innerHTML);//adds them to the end of the arrayArticles
            //console.log(content[i].innerHTML);//just a test
            //console.log((content[i].tagName));
        }
        
        if (arrayArticles.length <= 6){
            localStorage.setItem("articles", JSON.stringify(arrayArticles));//saves the array to localStorage
            
            let num = parseInt(localStorage.getItem("number"));//saves the number of items that have been saved
            num += 1;
            alert("You have saved " + num + " items.");
            localStorage.setItem("number",num);
        }
        
        console.log(arrayArticles);
        console.log(localStorage.getItem("articles"));
    })
  })

  document.querySelectorAll('.theButtRecipe').forEach(item => {//selects all the elements in theButtRecipe class and adds an evenlistener to then
    item.addEventListener('click', e => {
        let div = e.target.parentNode;//selects the parent of the events target element
        let content = div.children;//lets content equal an array of the parent Elements children
        
        for (let i = 0; i < content.length-2; i++) {//loops through the children elements of the div
            if (content[i].tagName == "OL"){//checks if the element stored in the array is an ordered list
                let list = content[i].children;
                for (let j = 0; j < list.length; j++){  //loops through the list's child elements(listItems)
                    arrayRecipes.push(list[j].innerHTML)//adds the item's innerHTML to the array
                }
            }
            else{
                arrayRecipes.push(content[i].innerHTML); // adds the elements innerHTML to the array
            }
        }
        if (arrayRecipes.length <= 17){
            localStorage.setItem("recipes", JSON.stringify(arrayRecipes));//saves the array to localStorage

            let num = parseInt(localStorage.getItem("number"));//saves the number of items that have been saved
            num += 1;
            alert("You have saved " + num + " items.");
            localStorage.setItem("number",num);
        }   
    })
  });

function leaveComment(){
    
    arrayComments = [];
    let name = document.getElementById("name").value;//retrieves the value of the name input
    let comment = document.getElementById("comment").value;//retrieves the value of the comment input
    
    if(JSON.parse(localStorage.getItem("Comments")) != null){
        arrayComments = JSON.parse(localStorage.getItem("Comments"));//retreives an array of comments
    }
    
    arrayComments.push(new Comment(name,comment));//Adds a new comment object to the array of comments
    localStorage.setItem("Comments",JSON.stringify(arrayComments));//stores the array of comment objects in localStorage
    createComments()
}

function createComments(){//a function to create and display the comments as elements on the website
    let newComment = JSON.parse(localStorage.getItem("Comments"));//retrieves comments from localStorage
    
    if(newComment != null){
        for (i = 0; i < newComment.length; i++){//runs through the array of comment objects
        
        let divItm = document.getElementById("allComments")//finds the div where comments will be added
        let cName = document.createElement("h3");//creates a heading
        let cText = document.createElement("p");//creates a paragraph

        document.body.appendChild(divItm);//the div Item is appended to the body
        
        cName.innerHTML = newComment[i].nameOf;//innerHTML of the comment elements is made equal to the attrbutes stored in the array
        cText.innerHTML = newComment[i].commentOf;

        divItm.appendChild(cName);//both items are appended to the div
        divItm.appendChild(cText);
        }
    }
}
createComments()

    $('#hide').click(function(){
    
        $('.image').hide();//hides all the images
    });

    $('#show').click(function(){
    
        $('.image').show();//shows all the images
    });
    $('.likeButt').click(function(){
        if( $(this).text() == "Like"){
            $(this).css("background-color","#ee90ee").html("Liked").animate({'width': '180px'},175).animate({'width': '58px'},175)//changes color and animates the button to become wider and back
        }
        else if ($(this).text() == "Liked"){
            $(this).css("background-color","#bf90ee").html("Like");//changes the text and background color back

        }
        });
    









