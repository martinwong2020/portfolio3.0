
function Search(){
    let input=document.getElementById('Search').value;
    input=input.toLowerCase();
    let items=document.getElementsByClassName("element_tag");
    let captions=document.getElementsByClassName("caption");
    for (let i=0; i<items.length; i++){
        // console.log(captions[i].innerText);
        if(captions[i].innerText.toLowerCase().includes(input)){
            // items[i].style.visibility="visible";
            items[i].style.display="block";
        }
        else{
            // items[i].style.visibility="hidden";
            items[i].style.display="none";
        }
    }
}
function enlarge(){
    let img=document.getElementById("img_1");
    let fullscreen=document.getElementById("fullscreen");
    fullscreen.style.backgroundImage='url('+img.src+')';
    console.log(img.src);
    fullscreen.style.display="block";
}
function pdf_enlarge(){

    console.log("Y")
    let fullscreen=document.getElementById("fullscreen");
    let tag=document.createElement("embed");
    tag.setAttribute('src',"img/Martin Wong resume.pdf");
    tag.setAttribute("width","80%");
    tag.setAttribute("height","100%");
    tag.setAttribute("id","pdf_tag");
    fullscreen.appendChild(tag);
    fullscreen.style.display="block";
}
