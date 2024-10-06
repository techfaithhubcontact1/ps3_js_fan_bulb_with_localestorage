
// select dom elements
const body = document.body;
const bulbImgElm = document.querySelector('.bulb_img');
const switchImgElm = document.querySelector('.switch_img');
const fanElm = document.querySelector('.fan_image');
const buttons = document.querySelectorAll('.buttons button');
const onOffBtn = document.querySelector('.buttons button');

let count = 0;
// statements for bulb
switchImgElm.addEventListener('click',()=>{
     count++;
     if(count%2==1){
          switchImgElm.src = "img/off.png";
          bulbImgElm.src = "img/pic_bulboff.gif";
          body.classList.add('light_mode');
          body.classList.remove('white_mode');

          let lightData = {
               bulbImg:"img/pic_bulboff.gif",
               switchBtn:"img/off.png",
               bgLight: "light_mode"
          }
          localStorage.setItem("lData",JSON.stringify(lightData));
     }
     else if(count%2==0){
          switchImgElm.src = "img/on.png";
          bulbImgElm.src = "img/pic_bulbon.gif";
          body.classList.add('white_mode');
          body.classList.remove('light_mode');

          let lightData = {
               bulbImg:"img/pic_bulbon.gif",
               switchBtn:"img/on.png",
               bgLight: "white_mode"
          }
          localStorage.setItem("lData",JSON.stringify(lightData));
     };
});
// statements for fan
buttons.forEach((button)=>{
     button.addEventListener('click',(e)=>{
          count++;
          if(count%2==1 && button.innerText === "On"){
               fanElm.classList.add('on');
               fanElm.classList.remove('normal');
               fanElm.classList.remove('middle');
               fanElm.classList.remove('high');
               onOffBtn.classList.toggle('style');
               onOffBtn.classList.toggle('style2');
               onOffBtn.innerText = "Off";
               let fData = {onC:"on",normalC:"noC",middleC:"noC",highC:"noC",styleC:"noC",style2C:"style2",text:"Off"};
               localStorage.setItem('fanData', JSON.stringify(fData));
          }
          else if(count%2==0 && button.innerText === "Off"){
               fanElm.classList.remove('high');
               fanElm.classList.remove('normal');
               fanElm.classList.remove('middle');
               fanElm.classList.remove('on');
               onOffBtn.classList.toggle('style');
               onOffBtn.classList.toggle('style2');
               onOffBtn.innerText = "On";
               let fData = {onC:"noC",normalC:"noC",middleC:"noC",highC:"noC",styleC:"style",style2C:"noC",text:"On"};
               localStorage.setItem('fanData', JSON.stringify(fData));
          }
          else if(button.innerText === "1"){
               fanElm.classList.add('normal');
               fanElm.classList.remove('middle');
               fanElm.classList.remove('high');
               fanElm.classList.remove('on');
               onOffBtn.classList.remove('style');
               onOffBtn.classList.add('style2');
               onOffBtn.innerText = "Off";
               let fData = {onC:"noC",normalC:"normal",middleC:"noC",highC:"noC",styleC:"noC",style2C:"style2",text:"Off"};
               localStorage.setItem('fanData', JSON.stringify(fData));
          }
          else if(button.innerText === "2"){
               fanElm.classList.add('middle');
               fanElm.classList.remove('normal');
               fanElm.classList.remove('high');
               fanElm.classList.remove('on');
               onOffBtn.classList.remove('style');
               onOffBtn.classList.add('style2');
               onOffBtn.innerText = "Off";
               let fData = {onC:"noC",normalC:"noC",middleC:"middle",highC:"noC",styleC:"noC",style2C:"style2",text:"Off"};
               localStorage.setItem('fanData', JSON.stringify(fData));
          }
          else if(button.innerText === "3"){
               fanElm.classList.add('high');
               fanElm.classList.remove('normal');
               fanElm.classList.remove('middle');
               fanElm.classList.remove('on');
               onOffBtn.classList.remove('style');
               onOffBtn.classList.add('style2');
               onOffBtn.innerText = "Off";
               let fData = {onC:"noC",normalC:"noC",middleC:"noC",highC:"high",styleC:"noC",style2C:"style2",text:"Off"};
               localStorage.setItem('fanData', JSON.stringify(fData));
          };
     });
});
 
// get data from locale storage
let bulbData = JSON.parse(localStorage.getItem('lData')); 
let fanData = JSON.parse(localStorage.getItem('fanData'));

// bulb data from locale storage
body.classList.add(bulbData.bgLight);
bulbImgElm.src = bulbData.bulbImg;
switchImgElm.src = bulbData.switchBtn;

// fan data from locale storage
fanElm.classList.add(fanData.onC);
fanElm.classList.add(fanData.normalC);
fanElm.classList.add(fanData.middleC);
fanElm.classList.add(fanData.highC);
onOffBtn.classList.add(fanData.style);
onOffBtn.classList.add(fanData.style2C);
onOffBtn.innerText = fanData.text;