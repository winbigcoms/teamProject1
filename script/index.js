var openNaviBtn = document.querySelector(".openNavigationBtn");
var navigationBox = document.querySelector(".navigationBox");
var closeNaviBtn = document.querySelector(".closeBtn");

var menuList = document.querySelectorAll(".menuList");
var menuExplain = document.querySelectorAll(".menuExplain");
var exampleCloseBtn = document.querySelectorAll(".exampleBtn");
var exampleCloseBtnCross = document.querySelectorAll(".exampleBtn span");
var navigationItems = document.querySelectorAll(".navigationItems");


// 네비게이션 열기
openNaviBtn.addEventListener("click", function (e) {
    navigationBox.classList.add("openNavi");
})
// 네비게이션 닫기s
closeNaviBtn.addEventListener("click", function (e) {
    navigationBox.classList.remove("openNavi")
})
// 네비게이션 클릭 
for(var i =1; i < navigationItems.length; i++){
    // 최초클릭확인
    var isThemeOn = false;
    // 클릭 이벤트
    navigationItems[i].addEventListener("click",function(e){
        var themeSkyblue = document.querySelector(".backgroundSkyblue")
        // 존재하면 지우고 
        if(isThemeOn == true){
            themeSkyblue.classList.remove("backgroundSkyblue")
        }
        // 클래스부여
        e.target.classList.add("backgroundSkyblue");
        isThemeOn =true;
    })
}

// 상세 설명 열기
for(var i=0; i < menuList.length; i++){
    menuList[i].addEventListener("click",function(e){
        var getTarget = e.currentTarget;
        getTarget.querySelector(".menuExplain").classList.add("show");
        setTimeout(function(e){
            getTarget.querySelector(".menuExplain").style.opacity="1"
        }, 100)
    })
}

// 상세설명 닫기
for(var i=0; i < exampleCloseBtn.length; i++){
    exampleCloseBtn[i].addEventListener("click",function(e){
        e.stopPropagation();
        var setTarget = e.currentTarget.parentNode.parentNode;
        // console.log(setTarget);

        setTarget.style.opacity="0";
        setTimeout(function(){
            setTarget.classList.remove("show")
        }, 300)
    })
}

var appStartWraper = document.querySelector(".appStartWraper");
window.addEventListener("load",function(e){
    // appStartWraper.style.animation="opening 4s 1 forword"
    setTimeout(function(e){
        appStartWraper.style.display="none"
    }, 4100);
})