const getBoxes = document.querySelectorAll(".boxes");

for(var i = 0; i < getBoxes.length; i++){
        getBoxes[i].addEventListener("mouseenter",function(){
        // console.log(this);
        if(this.classList.contains("left")){
                this.classList.remove("left");
                this.classList.add("right");
        }else{
                this.classList.remove("right");
                this.classList.toggle("left");
        }
      });
}