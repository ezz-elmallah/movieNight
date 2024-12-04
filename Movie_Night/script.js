
let main_imge = document.getElementById("mainimge");
let imges = document.querySelectorAll(".images");
for (let i = 0; i < imges.length; i++) {
    imges[i].onmouseover = () => {
        main_imge.src = imges[i].src; 
    };
}
