const aboutBtn=document.getElementById('popup')

let date=document.getElementById('date');

// Setting up the date
let today = new Date();
var options= {
weekday:"long",
day:"numeric",
month:"long",
hour:"numeric",
minute:"numeric"
};

let day=today.toLocaleString("us-en",options);
date.innerText=day;

// From here Magic starts
const tl=new TimelineLite();
const tll=new TimelineLite({paused:true,reversed:true});

 tl.delay(1).to('#h',1,{
     fontSize:"55rem",
     opacity:.5,
    display:'none'
 })

 .to('#e',1,{
    fontSize:"55rem",
    opacity:.5,
    display:'none'
})
.to('#l',1,{
    fontSize:'55rem',
    opacity:.5,
    display:'none'
})
.to('#ll',1,{
    fontSize:"105rem",
    opacity:.5,
    display:'none'
})
.to('#o',1,{
    fontSize:"55rem",
    opacity:.5,
    display:'none'
})
.to('#info-div',1,{
    opacity:1,
    width:'20%',
})

.fromTo('.main-container',2,{
  backgroundColor:'white',
    width:'0%'
},
{
    opacity:1,
width:'100%',
backgroundColor:'black',
ease:Power2.easeOut
})
.fromTo('nav',1,{
    opacity:0,
    width:'0'
},{
    opacity:1,
    width:'100%'
})
.to('#info-div',1,{
    width:'80%',
    ease:Power2.easeOut
})
.fromTo('.welcome',1,{
    opacity:0,
    fontSize:'60rem',
    ease:Power2.easeOut
},
{
    opacity:.3,
    fontSize:'3rem',
    ease:Power2.easeOut
})




   
   
tll.fromTo('#open-about',0.5,{
   top:'0%',
   left:'0',
   display:'none',
   x:'-100'
}, {
    opacity:'1',
    width:'50%',
    marginTop:'6%',
    left:'1rem',
    display:'flex',
    ease:Power1.easeOut,
    x:'0'
},'-=0.5')
.to('#info-div',1, {
position:'absolute',
top: '50%',
left: '50%',
transform:"translate(20%,-50%)",
    width:'30%',
    onComplete:function() {
        aboutBtn.style.pointerElements='auto'
    
    }
    
},'-=0.5')



aboutBtn.addEventListener('click',(e) => {
    if(tll.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tll);
    
})

function toggleTween(tween) {
    tween.reversed() ? tween.play():tween.reverse();
}













// let dateParagraph = document.getElementById('date');
// let checkAvailable=document.getElementById('available');

// let d=new Date();
// let options = {
//   weekday:'short',
//   day:'numeric',
//   month:'long'
// }


// let today=d.toLocaleDateString("en-US",options);

// dateParagraph.innerText=today



// let m=new Date();
// let todayDay = {
//   weekday:'long'
// };

// let currentDay=m.toLocaleString('en-US',todayDay);

// if(currentDay==='Saturday' || currentDay==='Sunday' ) {
// checkAvailable.innerText='Not Available';
// }else{
//   checkAvailable.innerText='AVAILABLE';

// }