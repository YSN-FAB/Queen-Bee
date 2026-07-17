// ===============================
// Queen Bee App JavaScript
// ===============================


// فتح وإغلاق القائمة الجانبية

function toggleMenu(){

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("active");

}



// ===============================
// نظام مشاهدة الإعلانات
// ===============================


let adsLeft = 5;
let balance = 0;
let watching = false;



const watchButton = document.querySelector(".watch-btn");



watchButton.addEventListener("click", function(){


    if(watching){
        return;
    }


    if(adsLeft <= 0){

        alert("No ads available. Come back later!");

        return;

    }


    watching = true;


    let seconds = 15;


    watchButton.innerHTML = 
    "⏳ Watching " + seconds + "s";


    let timer = setInterval(function(){


        seconds--;


        watchButton.innerHTML =
        "⏳ Watching " + seconds + "s";



        if(seconds <= 0){


            clearInterval(timer);


            adsLeft--;

            balance += 0.01;


            watchButton.innerHTML =
            "✅ Claim $0.01";



            watchButton.onclick = function(){


                updateStats();


                watchButton.innerHTML =
                "📺 Watch Ads";


                watching = false;


                watchButton.onclick = null;


            }



        }



    },1000);



});



// تحديث البيانات

function updateStats(){


    const cards = document.querySelectorAll(".card h3");


    // الرصيد

    cards[0].innerHTML =
    "$" + balance.toFixed(2);



    // الإعلانات

    cards[1].innerHTML =
    5 - adsLeft;



    // الأرباح

    cards[3].innerHTML =
    "$" + balance.toFixed(2);



}



// ===============================
// تأثير عند تحميل الصفحة
// ===============================


window.onload = function(){


    console.log(
        "🐝 Queen Bee Loaded Successfully"
    );


};
