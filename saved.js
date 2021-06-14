function createImages(){//creates an element to display the content of the images array stored in localStorage
    let images = JSON.parse(localStorage.getItem("images"));//retrieves the array from  localstorage
    
    if(images != null){
        for (let i = 0; i < images.length; i++) {//loops through the array of image src's
            let div =  document.createElement("div");//creates a div
            let imageSaved = document.createElement("img");//creates an image
            imageSaved.src = images[i];//sets the src of the image to the one stored in this position of the array
            document.body.appendChild(div);//appends the container div
            div.appendChild(imageSaved);//appends the image
        }
    }
}

function createArticles(){//creates an element to display the content of the images array stored in localStorage
    let articles = JSON.parse(localStorage.getItem("articles"));//retrieves the array from  localstorage

    if(articles != null ){
        console.log(articles.length);
            for (let i = 0; i < articles.length; i+=3) {//loops through the array of element innerHTML's
                let div = document.createElement("div");
                let heading = document.createElement("h2");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");

                heading.innerHTML = (articles[i]);//adds the innerHTML to the created element
                p1.innerHTML = (articles[i+1]);//adds the innerHTML to the created element
                p2.innerHTML =(articles[i+2]);//adds the innerHTML to the created element

                document.body.appendChild(div);//appends the container div
                div.appendChild(heading);//appends the heading to the container div
                div.appendChild(p1);//appends the paragraph to the container div
                div.appendChild(p2);//appends the paragraph to the container div
            }
    }
}

function createRecipes(){//creates an element to display the content of the images array stored in localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes"));//retrieves the array from  localstorage

    if(recipes != null){    
        
        for (let i = 0; i < recipes.length; i+=8) {//loops through the array of element innerHTML's
                let div = document.createElement("div");//creates a div
                let heading = document.createElement("h2");//creates a heading
                let p1 = document.createElement("p");//creates a paragraph element
                let list = document.createElement("ol")//creates an ordered list element

                heading.innerHTML = recipes[i];//adds the innerHTML to the created element
                p1.innerHTML = recipes[i+1];//adds the innerHTML to the created element
                
                
                for (j = i+2; j < i+8; j++){//loops through an array of list item innerHTMLs
                    let listItm = document.createElement("li");
                    listItm.innerHTML = recipes[j];//adds the innerHTML to the created element
                    list.appendChild(listItm);//appends the list item to the list
                }
                document.body.appendChild(div);//appends the container div
                div.appendChild(heading);//appends the heading to the container div
                div.appendChild(p1);//appends the paragraph to the container div
                div.appendChild(list);//appends the list to the container div
            }    
    }
}
createArticles();
createRecipes();
createImages();

//localStorage.clear();