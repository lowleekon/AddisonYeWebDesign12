var toggleStatus = 1;
function toggleMenu(){
    if(toggleStatus === 1){
        toggleStatus = 0;
        document.getElementById("menu").style.left = "-240px";
        document.getElementById("toggleMenu").style.border = "5px solid #ffffff"
    }
    else if(toggleStatus === 0){
        toggleStatus = 1;
        document.getElementById("menu").style.left = "0px";
        document.getElementById("toggleMenu").style.border = "5px solid #000000"
    }
}
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function () {bannerLoop();};

var startbannerLoop = setInterval(function(){bannerLoop();}, bannerTimer);

var allowance = true;

function bannerLoop(){
    document.getElementById("imgBanner1").style.backgroundSize = "cover";
    document.getElementById("imgBanner2").style.backgroundSize = "cover";
    document.getElementById("imgBanner3").style.backgroundSize = "cover";
    if (allowance === true) {
        allowance = false;
        if (bannerStatus === 1) {
            document.getElementById("imgBanner2").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner1").style.right = "0";
                document.getElementById("imgBanner1").style.zIndex = "1000";
                document.getElementById("imgBanner2").style.right = "-1200px";
                document.getElementById("imgBanner2").style.zIndex = "1500";
                document.getElementById("imgBanner3").style.right = "1200px";
                document.getElementById("imgBanner3").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner2").style.opacity = "1";
            }, 1000);
            bannerStatus = 2;
        }
        else if (bannerStatus === 2) {
            document.getElementById("imgBanner3").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner2").style.right = "0";
                document.getElementById("imgBanner2").style.zIndex = "1000";
                document.getElementById("imgBanner3").style.right = "-1200px";
                document.getElementById("imgBanner3").style.zIndex = "1500";
                document.getElementById("imgBanner1").style.right = "1200px";
                document.getElementById("imgBanner1").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner3").style.opacity = "1";
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus === 3) {
            document.getElementById("imgBanner1").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner3").style.right = "0";
                document.getElementById("imgBanner3").style.zIndex = "1000";
                document.getElementById("imgBanner1").style.right = "-1200px";
                document.getElementById("imgBanner1").style.zIndex = "1500";
                document.getElementById("imgBanner2").style.right = "1200px";
                document.getElementById("imgBanner2").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner1").style.opacity = "1";
            }, 1000);
            bannerStatus = 1;
        }
        setTimeout(function () {
            allowance = true;
        }, 1000);
    }
}
function bannerLoopBack(){
    document.getElementById("imgBanner1").style.backgroundSize = "cover";
    document.getElementById("imgBanner2").style.backgroundSize = "cover";
    document.getElementById("imgBanner3").style.backgroundSize = "cover";
    if (allowance === true) {
        allowance = false;
        if (bannerStatus === 1) {
            document.getElementById("imgBanner1").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner2").style.right = "0";
                document.getElementById("imgBanner2").style.zIndex = "1000";
                document.getElementById("imgBanner3").style.right = "-1200px";
                document.getElementById("imgBanner3").style.zIndex = "1500";
                document.getElementById("imgBanner1").style.right = "1200px";
                document.getElementById("imgBanner1").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner1").style.opacity = "1";
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus === 2) {
            document.getElementById("imgBanner2").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner3").style.right = "0";
                document.getElementById("imgBanner3").style.zIndex = "1000";
                document.getElementById("imgBanner1").style.right = "-1200px";
                document.getElementById("imgBanner1").style.zIndex = "1500";
                document.getElementById("imgBanner2").style.right = "1200px";
                document.getElementById("imgBanner2").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner2").style.opacity = "1";
            }, 1000);
            bannerStatus = 1;
        }
        else if (bannerStatus === 3) {
            document.getElementById("imgBanner3").style.opacity = "0";
            setTimeout(function () {
                document.getElementById("imgBanner1").style.right = "0";
                document.getElementById("imgBanner1").style.zIndex = "1000";
                document.getElementById("imgBanner2").style.right = "-1200px";
                document.getElementById("imgBanner2").style.zIndex = "1500";
                document.getElementById("imgBanner3").style.right = "1200px";
                document.getElementById("imgBanner3").style.zIndex = "500";
            }, 500);
            setTimeout(function () {
                document.getElementById("imgBanner3").style.opacity = "1";
            }, 1000);
            bannerStatus = 2;
        }
        setTimeout(function () {
            allowance = true;
        }, 1000);
    }
}