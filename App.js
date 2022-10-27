
//  const Forall = document.getElementByClassName("for-all");
//  const ServicePerc = document.getElementById("servicePerc");

//  function mainFunction(){
//  if(Forall === ServicePerc){
   
//  }
// }



  ////////////////////////////////////////////////////////

    // document.getElementById("sign-in").addEventListener("click",function(){
    //     document.querySelector(".form").style.display = "flex"
    // });

    //   document.querySelector(".close").addEventListener("click",function(){
    //     document.querySelector(".form").style.display = "none"
    //   });

// /////////////////
      const bar = document.getElementById('bar');
      const close = document.getElementById('close');
      const nav = document.getElementById('navbar');

      if(bar){
        bar.addEventListener('click',() =>{
            nav.classList.add('active');
        })
      }

      if(close){
        close.addEventListener('click',() =>{
            nav.classList.remove('active');
        })
      }
  
///////////////////////////////////////////
  // For log in Form
 
  // document.getElementById("fo-close").style="" ;

  // function closeHandler(){
  //     document.getElementById("fo-close").style="display:none";   
  // }

///////////////////////////////////////////

////////////////////////////////////////////



//////////////////////////////////////////////

//Moving banners

let image = document.getElementById('image');
let images = ['main-banner1.jpg','main-banner2.jpg','main-banner3.jpg','main-banner4.jpg','main-banner5.jpg']
setInterval(function(){
  let random = Math.floor(Math.random()*4);
  image.src = images[random];
  // image.style.width = "430px";
  // image.style.height = "300px";

},2000);

////////////////////////////////////////////////

const login = document.querySelector(".sign-up");
const Btn = document.getElementById("btn5");

function mainLogin(){
const loginInput = login.value;
let pattern = /^[a-zA-Z0-9]{0-40}@gmail.com$/;
let result = pattern.test(loginInput);
if(!result){
 alert("email-id Accepted");
}
else{
  alert("please enter the proper email-id");
}
} 

//////////////////////////////////////////////

/// Add to cart


// const addBtnElement=document.getElementById("s1");
// const removeBtnElement=document.getElementById("remove");
// // const displayBtnElement=document.getElementById("display");
// const mainElement=document.getElementById("1st");

// addBtnElement.addEventListener("click",addFunc)
// removeBtnElement.addEventListener("click",removeFunc);
// // displayBtnElement.addEventListener("click",displayFunc);


// function addFunc()
// {
//     const listElement=document.createElement("option");
//     let addInput=prompt("Enter what to add");

//     listElement.value=addInput;
//     listElement.id=addInput;
//     listElement.innerText=addInput;

//     mainElement.appendChild(listElement);
// }

// function removeFunc()
// {
//     let removeInput=prompt("enter what you need to delete");

//     document.getElementById(removeInput).remove();
 
// }

// function displayFunc()
// {
//     let arr=[];
    
//     for(let i=0;i<mainElement.length;i++)
//     {
//         arr[i]=document.getElementsByTagName("option")[i].value;
//     }
//     let count=0;
//         count=mainElement.length;
//     alert("List as follow:"+arr+"     "+"Count:"+count);
// }

////////////////////////////////////////////////














  



  
