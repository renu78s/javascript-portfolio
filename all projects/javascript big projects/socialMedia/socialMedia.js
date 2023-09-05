                                 // story board code start
let profilePicContainer = document.getElementsByClassName('profile_pic_container');
let carouselControlPrev = document.getElementsByClassName('button_prev');
let carouselControlNext = document.getElementsByClassName('button_next');
let storyBoard = document.getElementsByClassName('story_board');
let storyBoardDetails = [
    {
        id : 0,
        image : 'othersProfilePicture1.jpg' ,
        name : 'aarina',
        occupation:'news anchor',
    },
    {
        id : 1,
        image : 'othersProfilePicture2.jpg' ,
        name : 'lina',
        occupation:'web developer',
    },{
        id : 2,
        image : 'othersProfilePicture3.jpg' ,
        name : 'alia',
        occupation:'photographer',
    },{
        id : 3,
        image : 'otherProfilePicture4.jpg' ,
        name : 'priya',
        occupation:'singer',
    },{
        id : 4,
        image : 'otherProfilePicture5.jpg' ,
        name : 'lara',
        occupation:'editor',
    }
    ,{
        id : 5,
        image : 'otherProfilePicture6.jpg' ,
        name : 'kiara',
        occupation:'web developer',
    }
    ,{
        id : 6,
        image : 'otherProfilePicture7.jpg' ,
        name : 'kra',
        occupation:'business women',
    }
    ,{
        id : 7,
        image : 'otherProfilePicture8.jpg' ,
        name : 'ra',
        occupation:'programmer',
    },{
        id : 8,
        image : 'otherProfilePicture9.jpg' ,
        name : 'kia',
        occupation:'web developer',
    },{
        id : 9,
        image : 'othersProfilePicture1.jpg' ,
        name : 'kira',
        occupation:'blogger',
    }
]

let nextButton  ;

// function to add first 4 story cards
const showStoryProfilePictures =() =>{
  
    for(let i=0 ; i<=3 ; i++){
        let objProp = storyBoardDetails.map(x => x.image);
        let objName = storyBoardDetails.map(x => x.name);
        let spanContainer1 = document.createElement('span');
        let creatingImage = document.createElement('img');
        let creatingProfileName = document.createElement('p');
        creatingImage.src = `pictures/${objProp[i]}`;
        creatingProfileName.innerHTML = `${objName[i]}`;
        spanContainer1.appendChild(creatingImage) ;
        spanContainer1.appendChild(creatingProfileName);
        spanContainer1.classList.add('profile_pic_container');
        creatingImage.classList.add('profile_image');
        creatingProfileName.classList.add('profile_name');
        storyBoard[0].appendChild(spanContainer1);

    }
}
showStoryProfilePictures();

// next button code
let i = 3;
let j = 0 ;
let k = 0 ;
let addStory = document.getElementsByClassName('add_story')[0];
let storyContainer = document.getElementsByClassName('profile_pic_container');
let storyLength= storyContainer.length ;

carouselControlNext[0].addEventListener('click',()=>{
    
    i++;
    if(i < storyBoardDetails.length){
    let objProp = storyBoardDetails.map(x => x.image);
    let objName = storyBoardDetails.map(x => x.name);
    let spanContainer1 = document.createElement('span');
    let creatingImage = document.createElement('img');
    let creatingProfileName = document.createElement('p');
    creatingImage.src = `pictures/${objProp[i]}`;
    creatingProfileName.innerHTML = `${objName[i]}`;
    spanContainer1.appendChild(creatingImage) ;
    spanContainer1.appendChild(creatingProfileName);
    spanContainer1.classList.add('profile_pic_container');
    creatingImage.classList.add('profile_image');
    creatingProfileName.classList.add('profile_name');
    storyBoard[0].appendChild(spanContainer1);
   
    } else{
     
  
    }
   
        if( j<storyBoardDetails.length-4){
            storyContainer[j].style.display = 'none';
            j++;
            console.log(j);
            k=j;
        }else{
        
            console.log('not');
        }
  

})

//prevous button code
carouselControlPrev[0].addEventListener('click',()=>{
   
    k--;
    if(j<storyBoardDetails.length && j>=0){
        storyContainer[k].style.display = 'block';
        storyContainer[i].style.display = 'none';

    }
})

                                         // story board code ends

                                    //left side top nav bar code starts
                            
let profileImage = document.getElementsByClassName('leftBar_image');
let profileName = document.getElementsByClassName('profileName');
let profileOccupation = document.getElementsByClassName('occupation');
let profileDescription = document.getElementsByClassName('description');
let ownerProfile = [{
    name: 'Renu',
    occupation : 'front-end developer',
    company : 'company',
    description : 'love to code',
    profilePicture: 'profilePic.jpg',
}]
profileImage[0].src = `pictures/${ownerProfile[0].profilePicture}`;
profileName[0].innerHTML =`${ownerProfile[0].name}`;
profileOccupation[0].innerHTML =  `${ownerProfile[0].occupation} at ${ownerProfile[0].company}`;
profileDescription[0].innerHTML =`${ownerProfile[0].description}`;

                                                     //right bar check list                    
let rightBarChecklists =document.getElementsByClassName('rightBar_checklists_all');

const addFollowList = () => {
      //json data values maped
      let occupationFollow =storyBoardDetails.map(x => x.occupation) ;
      let nameFollow = storyBoardDetails.map(x => x.name) ;
      let imageFollow = storyBoardDetails.map(x => x.image) ;
     

    for(let i=0 ; i<5 ; i++){
        //create elements
        let divFollow = document.createElement('div');
        let imgFollow = document.createElement('img');
        let paraFollow = document.createElement('p');
        let spanFollow = document.createElement('span');
        let nameImageDiv =  document.createElement('div');

        //add inner content
        imgFollow.src = `pictures/${imageFollow[i]}`;
        paraFollow.innerHTML = `${nameFollow[i]} <br> (${occupationFollow[i]})`;
        spanFollow.innerHTML = 'add';

        //add classes
        divFollow.classList.add('rightBar_checklist');
        imgFollow.classList.add('rightBar_checklist_image');
        paraFollow.classList.add('rightBar_checklist_name');
        spanFollow.classList.add('material-icons');
        spanFollow.classList.add('rightBar_checklist_icon');
        nameImageDiv.classList.add('rightBar_nameImageDiv');

        //append child
        nameImageDiv.appendChild(imgFollow);
        nameImageDiv.appendChild(paraFollow);

        divFollow.appendChild(nameImageDiv);
        divFollow.appendChild(spanFollow);
        rightBarChecklists[0].appendChild(divFollow);
    }

}

addFollowList();
//toggle button to follow

let divButtonFollow = document.getElementsByClassName('rightBar_checklist');
let iconButtonFollow = document.getElementsByClassName('rightBar_checklist_icon');

const buttonsFollow = () => {
    for(let i=0 ; i<5 ; i++){
        iconButtonFollow[i].addEventListener('click',() => {
            if(iconButtonFollow[i].innerHTML=='add'){
                iconButtonFollow[i].classList.remove('material-icons');
                iconButtonFollow[i].innerHTML='how_to_reg';
                iconButtonFollow[i].classList.add('material-symbols-outlined');
            }else{
                iconButtonFollow[i].classList.remove('material-symbols-outlined');
                iconButtonFollow[i].innerHTML='add';
                iconButtonFollow[i].classList.add('material-icons');
            }
        })
    }
}
buttonsFollow();

                                     //share thoughts part 
let pop_image_uploader = document.getElementsByClassName('pop_image_uploader');
let popClose= document.getElementsByClassName('drag_drop');
let uploadButtons = document.getElementsByClassName('shareThoughts_button');
let popImage = uploadButtons[0];
// let popVideo = uploadButtons[1];
// let popEvent = uploadButtons[2];
// let popActivities = uploadButtons[3];
// let popOptions = uploadButtons[4];

popImage.addEventListener('click',()=>{
    pop_image_uploader[0].style.display="block";

})
popClose[0].addEventListener('click',()=>{
    pop_image_uploader[0].style.display="none";
})
// popVideo.addEventListener('click',()=>{
    
// })
// popEvent.addEventListener('click',()=>{
    
// })
// popActivities.addEventListener('click',()=>{
    
// })
// popOptions.addEventListener('click',()=>{
    
// })

$(function(){
    $('.input-images').imageUploader();
  });

                                    //post part 

let createPost = document.getElementsByClassName('post_board');
const postDetailsShow = () => {
    for(let i=0; i<9 ;i++){
    //first part

    //createing elements of post
    let postDiv1 = document.createElement('div');
    let postImage1 = document.createElement('img');
    let postDiv2 = document.createElement('div');
    let postDiv3 = document.createElement('div');
    let postDiv4 = document.createElement('div');
    let postDiv5 = document.createElement('div');
    let postDiv6 = document.createElement('div');
    let postDiv7 = document.createElement('div');
    let postSpan1 = document.createElement('span');
    let postSpan2 = document.createElement('span');
    let postButton1 =document.createElement('button');
    let newdiv = document.createElement('div');

    //inner html
    postImage1.src = "pictures/otherProfilePicture4.jpg";
    postDiv4.innerHTML = 'name';
    postSpan1.innerHTML ="2";
    postSpan2.innerHTML="hours";
    postDiv6.innerHTML = "occupation";
    postButton1.innerHTML ="...";

    // add classes
    postDiv1.classList.add('post_board_Top1');
    postImage1.classList.add('post_board_image');
    postDiv2.classList.add('post_board_Top_name_container');
    postDiv3.classList.add('post_board_Top1');
    postDiv6.classList.add('post_board_Top1');
    postDiv4.classList.add('post_board_Top_name');
    postButton1.classList.add('post_board_Top_button');
    // append childs 

    postDiv1.appendChild(postDiv2);
    postDiv1.appendChild(postButton1);

    postDiv2.appendChild(postImage1);
    postDiv2.appendChild(newdiv);
    newdiv.appendChild(postDiv3);
    newdiv.appendChild(postDiv5);

    postDiv3.appendChild(postDiv4);
    postDiv3.appendChild(postSpan1);
    postDiv3.appendChild(postSpan2);
    
    postDiv5.appendChild(postDiv6);
    postDiv5.appendChild(postDiv7);

    //part 2 

    //createing elements of post
    let postDiv8 = document.createElement('div');

    //inner html
    postDiv8.innerHTML ="life is great ... :)";

    // add classes
    postDiv8.classList.add('post_board_Top_quote');

    // append child
    // part 3 
    //createing elements of post
    let postImage2 = document.createElement('img');
    let postDiv9 = document.createElement('div');
    let postImage2a = document.createElement('img');
    //inner html
    postImage2.src = "pictures/otherProfilePicture5.jpg";
    postImage2a.src = "pictures/otherProfilePicture6.jpg";
    // add classes
    postDiv9.classList.add('post_uploaded_image_container');
    postImage2.classList.add('post_uploaded_image');
    postImage2a.classList.add('post_uploaded_image');
    // append childs 
        
    postDiv9.appendChild(postImage2);
    postDiv9.appendChild(postImage2a);

    //part 4

    //createing elements of post
    let postDiv10 = document.createElement('div');
    let postSpan3 = document.createElement('div');
    let postSpan4 = document.createElement('span');
    let postSpan5 = document.createElement('div');
    let postSpan6 = document.createElement('div');
    let postSpan7 = document.createElement('span');
    let postSpan8 = document.createElement('div');
    let postSpan9 = document.createElement('div');
    let postSpan10 = document.createElement('span');
    let postSpan11 = document.createElement('div');
    let postSpan4a = document.createElement('div');
    let postSpan8a = document.createElement('div');
    let postSpan11a = document.createElement('div');
    //inner html
    postSpan4.innerHTML = 'thumb_up';
    postSpan4a.innerHTML ="likes";
    postSpan5.innerHTML= 23;
    postSpan7.innerHTML ="comment";
    postSpan8a.innerHTML = "comments";
    postSpan8.innerHTML= 4;
    postSpan10.innerHTML ="send";
    postSpan11.innerHTML = 3;
    postSpan11a.innerHTML ="shares";

    // add classes
    postSpan4.classList.add('material-symbols-outlined');
    postSpan7.classList.add('material-symbols-outlined');
    postSpan10.classList.add('material-symbols-rounded');
    postDiv10.classList.add('post_likesCount_container');

    postSpan4a.classList.add('post_likes_content');
    postSpan5.classList.add('post_likes_content');
    postSpan8a.classList.add('post_likes_content');
    postSpan8.classList.add('post_likes_content');
    postSpan11.classList.add('post_likes_content');
    postSpan11a.classList.add('post_likes_content');

    postSpan3.classList.add('post_likes_container');
    postSpan6.classList.add('post_likes_container');
    postSpan9.classList.add('post_likes_container');
    // append childs 
        
    postDiv10.appendChild(postSpan3);
    postDiv10.appendChild(postSpan6);
    postDiv10.appendChild(postSpan9);

    postSpan3.appendChild(postSpan4);
    postSpan3.appendChild(postSpan5);
    postSpan3.appendChild(postSpan4a);

    postSpan6.appendChild(postSpan7);
    postSpan6.appendChild(postSpan8);
    postSpan6.appendChild(postSpan8a);
    
    postSpan9.appendChild(postSpan10);
    postSpan9.appendChild(postSpan11);
    postSpan9.appendChild(postSpan11a);

    //part 5 

    //createing elements of post
    let postDiv11 = document.createElement('div');
    let postImage3 = document.createElement('img');
    let postTextarea = document.createElement('textarea');

    //inner html
    postImage3.src = "pictures/otherProfilePicture4.jpg";
    postImage3.alt = "pics";
    postTextarea.placeholder="add a comment";

    // add classes
    postDiv11.classList.add('post_textarea_container');
    postImage3.classList.add('post_textarea_image');
    postTextarea.classList.add('post_textarea');

    // append childs 
        
    postDiv11.appendChild(postImage3);
    postDiv11.appendChild(postTextarea);

//part 6
     //createing elements of post
     let postImage4 = document.createElement('img');
     let postDiv12 = document.createElement('div');
     let postPara1 = document.createElement('p');
     let postDiv13 = document.createElement('div');
     let postDiv14 = document.createElement('div');
     let postDiv15 = document.createElement('div');
     let postSpan12 = document.createElement('span');
     let postSpan13 = document.createElement('span');
     let postSpan14 = document.createElement('span');
     let postSpan15 = document.createElement('span');
     let postSpan15a = document.createElement('span');
     let postSpan16 = document.createElement('span');
     let postSpan17 = document.createElement('span');
     let postSpan18 = document.createElement('span');
     let postSpan19 = document.createElement('span');
     let postSpan20 = document.createElement('span');
     let postButton2 =document.createElement('button');
     let postDiv12a = document.createElement('div');
     let postDiv13a= document.createElement('div');
     let postDiv12b= document.createElement('div');
     let postSpan17a= document.createElement('span');
     //inner html
     postImage4.src = "pictures/othersProfilePicture2.jpg";
     postImage4.alt = "picture4";
     postSpan12.innerHTML = 'name ';
     postSpan13.innerHTML ="2 hours";
     postPara1.innerHTML="very nice post .... ";
     postSpan15.innerHTML ="3";
     postSpan15a.innerHTML = "like";
     postSpan16.innerHTML='reply';
     postSpan17a.innerHTML='view';
     postSpan18.innerHTML='4';
     postSpan20.innerHTML='replies';
     postButton2.innerHTML =" load more replies";
     postSpan19.innerHTML='...';

 
     // add classes
    postDiv12.classList.add('post_comments_container');
    postImage4.classList.add('post_textarea_image');
    postDiv14.classList.add('post_picture_name_time');
    postDiv12a.classList.add('post_picture_name_time');
    postDiv13a.classList.add('post_picture_comment');
    postSpan12.classList.add('post_picture_name');

    postSpan14.classList.add('post_comment_likes');
    postSpan16.classList.add('post_comment_likes');
    postSpan17.classList.add('post_comment_likes');
    postButton2.classList.add('post_button_load_replies');
     // append childs 
     postDiv12.appendChild(postDiv12b);
     postDiv12.appendChild(postDiv15);
     postDiv12.appendChild(postButton2);
     postDiv12a.appendChild(postImage4);
     postDiv12a.appendChild(postDiv13);
     postDiv12b.appendChild(postDiv12a);
     postDiv12b.appendChild(postDiv13a);
 
     postDiv13.appendChild(postDiv14);
     postDiv13a.appendChild(postPara1);
 
     postDiv14.appendChild(postSpan12);
     postDiv14.appendChild(postSpan13);
     
     postDiv15.appendChild(postSpan14);
     postDiv15.appendChild(postSpan16);
     postDiv15.appendChild(postSpan17);

     postSpan14.appendChild(postSpan15);
     postSpan14.appendChild(postSpan15a);
     postSpan17.appendChild(postSpan17a);
     postSpan17.appendChild(postSpan18);
     postSpan17.appendChild(postSpan20);
  
     postButton2.appendChild(postSpan19);

 
     //part 7 
 //createing elements of post
 let postSpan21 = document.createElement('span');
 let postButton3 =document.createElement('button');

 //inner html
 postButton3.innerHTML ="  load more comments";
 postSpan21.innerHTML='...';

 // add classes
 postButton3.classList.add('post_button_load_comments');

 // append childs 
 postButton3.appendChild(postSpan21);

       //all parts in div 0 
//createing  post
let div0 = document.createElement('div');
let divLast = document.createElement('div');

 // add classes
 div0.classList.add('post_container');
 divLast.classList.add('post_last_div');

 // append childs 
div0.appendChild(postDiv1);
div0.appendChild(postDiv8);
div0.appendChild(postDiv9);
div0.appendChild(postDiv10);
div0.appendChild(postDiv11);
div0.appendChild(postDiv12);
div0.appendChild(postButton3);

 createPost[0].appendChild(div0);
 createPost[0].appendChild(divLast);
}
}

postDetailsShow();
