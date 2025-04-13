const reviews =[
    {
        id:1,
        name:"Nemat",
        job: "Developer",
        img: "img/pallaviphoto.jpg",
        text: "Hello I am Here to give you a review to ypur cources very good content",
     
    },{
        id:1,
        name:"joby",
        job: " web Developer",
        img: "img/nature.jpg",
        text: "Hello I am Here to give you a review to ypur cources very good content",
    

    },{
        id:1,
        name:"poonam",
        job: " android Developer",
        img: "img/th.jpg",
        text: "Hello I am Here to give you a review to ypur cources very good content",

    },{
        id:1,
        name:"siya",
        job: "linux Developer",
        img: "img/istockphoto-2166282428-612x612.webp",
        text: "Hello I am Here to give you a review to ypur cources very good content",

    }
    ];


    const img= document.getElementById("person-img");
    const author= document.getElementById("author");
    const job= document.getElementById("job");
    const info= document.getElementById("info");


    const perBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let.currentItem = 0;
    
    window.addEventListener("DOMContentLoaded",function(){
    ShowPerson(currentItem);
    });


 function ShowPerson(person){
        const item = reviews[currentItems];
   
    img.src = item.img;
    author.textContent=item.name;
    job.textContent = item.job;
    info.textContent = item.text;

    }
        nextBtn.addEventListener("click",function(){
            currentItem++;
            if(currentItem > reviews.length -1){
                currentItem = 0;
            }

            ShowPerson(currentItem);

        });
        perBtn.addEventListener("click", function(){
            currentItem--;
            if(currentItem < 0){
                currentItem = reviews.length -1;
                
            }
            ShowPerson(currentItem);
        })