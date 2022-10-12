

const list = document.getElementById('countryList');
const addBtn = document.getElementById('addBtn');
const addItemInput = document.getElementById('addItem');

const countryList = {
    country: [],
    likes: 0
};


// add item to a list once clicking on "add" btn
addBtn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = addItemInput.value;
    document.body.appendChild(li);
    countryList.country.push(addItemInput.value);


    // add a like icon next to any item in the list
    const likeIcon = document.createElement('img');
    likeIcon.src = "https://img.cppng.com/download/2020-06/65446-emoticon-button-facebook-like-emoji-free-png-hq.png"
    likeIcon.width = 20;
    likeIcon.id = "likeIcon";
    li.appendChild(likeIcon);

    var likeCountValue = 1;
    var likeCountStep = 1;
    likeCount = document.createElement('span');
   
    console.log(countryList.country.length)
    // count the number of clikcs on the like icon and add the number next to the list item
    likeIcon.addEventListener('click', function() {
        likeCount.innerText = likeCountValue;
        likeCountValue = likeCountValue + likeCountStep; 
        li.appendChild(likeCount);
                
        /*
        for (var i=0 ; i<countryList.country.length ; i++) {
        likeCount.innerText = likeCountValue;
        likeCountValue = likeCountValue + likeCountStep
        console.log(likeCount.innerText);
        li.appendChild(likeCount);
        }
        */
        

    })
    
    
})


