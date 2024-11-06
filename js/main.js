//Scroll reveal
function revealFunction() {
    window.sr = ScrollReveal({ duration:1200 , distance:`320px` , easing: `ease-out`});

    sr.reveal(`.reveal-left` , {origin: `left` , reset: false});
    sr.reveal(`.reveal-right` , {origin: `right`, delay: 600 ,  rotate:{x:1000 , z: 1000} ,  reset: false});
    sr.reveal(`.reveal-top` , {origin: `top` , reset: false});
    sr.reveal(`.reveal-bottom` , {origin: `bottom` , delay: 600 , reset: false});
}

window.addEventListener("load" , () => {
    revealFunction();
})


let headLink = document.querySelectorAll(".header a")
headLink[0].addEventListener("click",goToUp)
headLink.forEach(head => {
    head.addEventListener("click" , (e) => {
        header.classList.remove("hide");
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth',
        });
    })
})

document.addEventListener("click" , (e) => {
    if(!e.target.classList.contains("menu")) {
        header.classList.remove("hide");
    } 
})

let header = document.querySelector(".header");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close-header");
menu.addEventListener("click" , () => {
    header.classList.toggle("hide")
})
close.addEventListener("click" , () => {
    header.classList.toggle("hide")
})


var typed = new Typed('.text', {
    strings:["Front End Developer" , "Web Developer" , "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let workVideos = document.querySelectorAll(".work-video");

workVideos.forEach(work => {
    let video = work.querySelector(".web-video video");
    // Play the video on hover
    work.addEventListener("mouseover", () => {
        if(video) {
            video.play();
        }
        // })
    });
    // Pause the video and show the poster on mouse out
    work.addEventListener("mouseout", () => {
        // videos.forEach(video => {
            if(video) {
                video.pause();
                video.currentTime = 0; // Reset the video to the start
            }
        // })
    });
})



// الحصول على العنصر الذي يحتوي على الرقم
const counterElement = document.querySelectorAll(".degree .number");

// دالة لزيادة الرقم تدريجيًا
let hasStarted = false; // للتحقق إذا تم بدء العد أم لا
const duration = 3000; // المدة الزمنية للوصول إلى الرقم النهائي بالمللي ثانية (2 ثانية)
function incrementCounter() {
counterElement.forEach(ele => {
    const targetNumber = ele.dataset.number; // الرقم النهائي
    // إعداد القيم للعد
        const start = 0; // الرقم الذي سنبدأ منه
        const increment = targetNumber / (duration / 20); // مقدار الزيادة في كل خطوة
        let currentNumber = start;
    
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                ele.textContent = targetNumber;
                clearInterval(timer);
            } else {
                ele.textContent = Math.floor(currentNumber);
            }
        }, 20); // التحديث كل 20 مللي ثانية
    })
}

//  التحقق من موضع الصفحة
window.addEventListener("scroll" , () => {
    if (window.scrollY >= 4600 && !hasStarted) {
            hasStarted = true;
            incrementCounter();
        }
    }
) 


let goUp = document.querySelector(".go-up");

goUp.addEventListener("click", goToUp)

function goToUp() {
    window.scrollTo({
        top: 0,
    })
}
window.addEventListener("scroll" , () => {
    if (window.scrollY >= 600 ) {
            goUp.classList.add("right");
        } else {
            goUp.classList.remove("right");
        }
    }
) 


let footer = document.querySelector(".footer");
window.addEventListener("scroll" , () => {
    if(window.scrollY >= 6200){
        footer.classList.add("sh-footer"); 
    } else {
        footer.classList.remove("sh-footer"); 
    }
})

// My portfolio
let myWorks = document.querySelectorAll(".work-video");
let laptopScreen = window.matchMedia("(min-width: 992px)");
let tabletScreen = window.matchMedia("(min-width: 767px) and (max-width: 991px)");
let mobileScreen = window.matchMedia("(max-width: 767px)");

// دالة لتحديث الصور والفيديوهات بناءً على حجم الشاشة
function updateMedia() {
    myWorks.forEach(work => {
        let imgs = work.querySelector("img");
        let vids = work.querySelector("video");

        if (!imgs || !vids) return;
         // إزالة الصنف الذي يظهر العنصر ليتم تحديثه
        imgs.classList.remove("show");
        vids.classList.remove("show");
        
        if (laptopScreen.matches) {
            // تحديث على شاشة اللابتوب
            imgs.setAttribute("src", `${imgs.dataset.imagel}`);
            vids.setAttribute("src", `${vids.dataset.video}`);
            vids.setAttribute("poster", `${vids.dataset.poster}`);
        } 
        else if (tabletScreen.matches) {
            // تحديث على شاشة التابلت
            imgs.setAttribute("src", "imgs/tablet.png");
            vids.setAttribute("src", `${vids.dataset.video}`);
            vids.setAttribute("poster", `${vids.dataset.poster}`);
        } else if (mobileScreen.matches) {
            // تحديث على شاشة الموبايل
            imgs.setAttribute("src", `${imgs.dataset.image}`);
            vids.setAttribute("src", `${vids.dataset.videoo}`);
            vids.setAttribute("poster", `${vids.dataset.posterm}`);
        }

         // الانتظار قليلاً حتى يتم تحميل المصادر الجديدة
        setTimeout(() => {
            // إظهار العنصر تدريجياً بعد تحديث المصدر
            imgs.classList.add("show");
            vids.classList.add("show");
        }, 100);
    });
}

// إضافة الأحداث عند تغيير حجم الشاشة
laptopScreen.addEventListener("change", updateMedia);
tabletScreen.addEventListener("change", updateMedia);
mobileScreen.addEventListener("change", updateMedia);

// تحديث عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", updateMedia);
