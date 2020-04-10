var openNaviBtn = document.querySelector(".openNavigationBtn");
// openNavigationBtn 이라는 클래스를 가진 태그들을 모두 openNaviBtn이라는 변수로 부르겠다 선언
// 단 querySeletor는 그 태그들 중 가장 첫 번째의 태그만을 선택한다.

var navigationBox = document.querySelector(".navigationBox");
// navigationBox 라는 클래스를 가진 태그를 navigationBox라는 변수로 선언
// 단 querySeletor는 그 태그들 중 가장 첫 번째의 태그만을 선택한다.

var closeNaviBtn = document.querySelector(".closeBtn");
// navigationBox 라는 클래스를 가진 태그를 navigationBox라는 변수로 선언
// 단 querySeletor는 그 태그들 중 가장 첫 번째의 태그만을 선택한다.

var menuList = document.querySelectorAll(".menuList");
// menuList 라는 클래스를 갖는 html태그를 menulist라는 변수로 선언,
// 단  querySeletorAll은 선택된 클래스를 갖는 모든 html태그를 선택한다.

var menuExplain = document.querySelectorAll(".menuExplain");
// menuExplain 이라는 클래스를 갖는 html태그를 menuExplain라는 변수로 선언,
// 단  querySeletorAll은 선택된 클래스를 갖는 모든 html태그를 선택한다.


var exampleCloseBtn = document.querySelectorAll(".exampleBtn");
//exampleBtn이라는 클래스를 갖는 html태그를 exampleCloseBtn 이라는 변수로 선언
// 단  querySeletorAll은 선택된 클래스를 갖는 모든 html태그를 선택한다.


var navigationItems = document.querySelectorAll(".navigationItems");
//navigationItems라는 클래스를 갖는 html태그를 navigationItems라는 변수로 선언
// 단  querySeletorAll은 선택된 클래스를 갖는 모든 html태그를 선택한다.

window.addEventListener("keydown",function(e){
    if(e.keyCode == 38 || e.keyCode == 40){
        console.log("1")
        e.preventDefault();
    }
})

// 네비게이션 열기
openNaviBtn.addEventListener("keydown",function(e){
    e.preventDefault();
    if(e.keyCode == 9){
        var startMenu = document.querySelector(".menuList");
        startMenu.focus();
    }
    else if(e. keyCode == 13){
        navigationBox.classList.add("openNavi");
        var startNavigation = document.querySelector(".navigationItems");
        startNavigation.focus();
    }
})

openNaviBtn.addEventListener("click", function (e) {
    // 대상.addEventListener("이벤트종류", "함수")      > addEventListener의 기본 모양
    //ㄴ openNaviBtn변수 즉 openNavigationBtn이라는 클래스를 갖는 html을 "click"하면
    // function 즉 함수가 실행됨.
    navigationBox.classList.add("openNavi");
    // 함수의 내용은 navigationBox 즉 navigationBox라는 클래스를 갖는 html태그에 
    // openNavi 이라는 클래스를 classList.add(추가) 해준다.
})

// 네비게이션 닫기기능
closeNaviBtn.addEventListener("click", function (e) {
    //closeNaviBtn변수 즉 closeBtn이라는 클래스를 갖는 html 태그를 "click"(클릭이벤트)하면
    
    //function실행
    navigationBox.classList.remove("openNavi")
    // function은 navigationBox 즉 navigationBox이라는 클래스명을 갖는 html태그에 
    // classList.remove("openNavi") > openNavi라는 클래스를 지운다. 
})

//닫기 버튼에서 tab을 누르면 다시 첫번째 네비게이션 요소로 이동하기
closeNaviBtn.addEventListener("keydown",function(e){
    //키보드 키를 누를때 이벤트 발생하도록 이벤트 생성
    // 이벤트가 일어나는 요소의 기본이벤트를 막기
    if(e.keyCode == 9 || e.keyCode == 40 ){
        e.preventDefault();
        //만약 눌러진 키가 tab이라면
        // var firstNaviItem = document.querySelectorAll(".navigationItems");
        navigationItems[0].focus();
        //첫 네비게이션 요소에 포커스 주기
    }else if(e.keyCode == 13 || e.keyCode == 27 || e.keyCode == 39){
        e.preventDefault();
        
        // 만약 눌러진 키가 enter(13) 혹은 esc(27) 혹은 오른쪽 화살표(39) 이라면
        navigationBox.classList.remove("openNavi");
        //클래스제거 
        menuList[0].focus();
        //메뉴 리스트의 첫 번째 객체로 포커스 주기
    }else if(e.keyCode == 38){
        // 만약 눌린 키가 윗 방향 화살표(38) 이라면
        var targetOn =e.currentTarget.previousElementSibling.lastElementChild;
        // e.currentTarget 현제 이벤트가 발생한 태그에서
        // previousElementSibling html상에서 이전에 존재하는 형재 태그 중
        // lastElementChild 마지막 자식요소를 선택

        targetOn.firstElementChild.focus();
        // lastElemtChild 는 li라서 포커스가 안되요. 그래서 그 자식요소인 a 태그를 선택
        // childNodes 는 배열로 선택되니까 첫 번째 자식요소는 0번이 되겠죠?
        // .focus() 그거에 포커스를 준다.
    }
})


// 네비게이션 클릭 
for(var i =0; i < navigationItems.length; ++i){
    console.log(i)
    // 변수 i는 0인데 , navigationItems 즉 navigationItems이라는 클래스를 갖는 html태그들의 집합인
    //navigationItems의 내부 아이템들의 갯수가 변수 i보다 크면 아래의 코드를 실행한 후 코드가 끝나면
    // i++ 즉 i에 1을 더해준다.
    
    // 최초클릭확인 최초의 클릭이 되어있는지 확인하는 변수, 
    var isThemeOn = false;


    // 네비게이션 메뉴 클릭 시 색들어가는 이벤트
    navigationItems[i].addEventListener("click",function(e){
        // navigationItems의 모든 아이템들에 click이벤트를 추가해준다. 이 클릭이벤트는 아래와 같다

        var themeSkyblue = document.querySelector(".backgroundSkyblue");
        //backgroundSkyblue라는 클래스를 갖는 태그를 themeSkyblue라고 선언한다.

        if(isThemeOn == true){
            //만약 isThemeOn 아까 선언한 최초클릭확인을 위한 변수의 값이 true라면
    
            themeSkyblue.classList.remove("backgroundSkyblue");
            //themeSkyblue라는 변수 즉 backgroundSkyblue라는 클래스를 갖는 html태그에
            // backgroundSkyblue라는 클래스를 제거해준다.
            //만약 isthemeOn이라는 변수가 true가 아닌 false라면 이 코드는 무시되어 스킵된다.
        }
        //스킵되어서 여기부터 시작
    
        // 클래스부여
        e.target.classList.add("backgroundSkyblue");
        //e = 이벤트 정보를 담고있는 객체
        // e.target = 이벤트가 실행된 객체 여기선 navigationItems라는 클래스를 갖는 객체
        //  에 backgroundSkyblue라는 클래스를 추가해준다.
    
        isThemeOn =true;
        //추가후엔 isTemeOn의 값을 true로 변경해준다.
        //이러면 다른 네비게이션 아이템을 클릭했을때 if문으로 넘어가게 된다.
        // 즉 최초에 한번만 실행된다는 이야기
    });
    // 메뉴 리스트에서 아래 방향키 누르면 다음 메뉴로 이동
    
    navigationItems[i].addEventListener("keydown",function(e){
        // 네비게이션에 키를 누를때 이벤트가 발생하는 이벤트를 걸어준다.

        if(e.keyCode == 40){
            //만약 눌린 키가 아래방향키(40) 이라면
            var nextTarget =e.currentTarget.parentNode.nextElementSibling;
            // e.currentTarget 현제 이벤트가 발생한 태그에서
            // parentNode html상에서 부모 태그에서
            // nextElementSibling 부모 태그의 형제 레벨의 태그에서 부모 다음에 존재하는
            
            // 태그를 선택
            if( !nextTarget ){
                //만약 위에서 선택한 태그가 존재하지 않으면 ! > 없다. not 의 의미에요
                closeNaviBtn.focus();
                //닫기버튼에 포커스
            }
            else if(nextTarget){
                // 만약 존재한다면 

                //nextTarget.childNodes[0].focus(); 
                nextTarget.lastElementChild.focus(); 
                //위에서 선언한 태그의 자식요소 중 첫 번째 
                //여기선 a태그가 되겠죠? 거기에 포커싱
            } 
        }
        if(e.keyCode == 38){
            // 만약 눌린 키가 위화살표 (38)라면
            var prevTarget = e.currentTarget.parentNode.previousElementSibling;
            // e.currentTarget 현제 이벤트가 발생한 태그에서
            // parentNode html상에서 부모 태그에서
            // previousElementSibling 부모 태그의 형제 레벨의 태그에서 부모 이전에 존재하는
            // 태그를 선택
            if( !prevTarget){
                //존재하지않으면
                closeNaviBtn.focus();
                //버튼에 포커싱
            }else if(prevTarget){
                //존재하면
                prevTarget.lastElementChild.focus();
                //위에서 선언한 태그의 자식태그 인 a태그에 포커싱
            }
        }
    })
}

// 상세 설명 열기
for(var i=0; i < menuList.length; i++){
    //menulist라는 변수의 집합의 아이템의 갯수보다 i가 크면 아래의 코드를 실행하고 i에 1을 더한다.
    
    // 클릭시 열기
    menuList[i].addEventListener("click",function(e){
        //menuList의 각각의 아이템들에 click 이벤트를 추가해준다.

        // e.currentTarget = 현재 이벤트가 걸려있는 객체
        //이벤트가 걸려있는 객체와 그냥 이벤트 객체의 차이점은 구두로 설명해줄게요

        var getTarget = e.currentTarget;
        // 변수선언은 이제 설명 안할게요

        getTarget.querySelector(".menuExplain").classList.add("show");
        // 이 변수중에 .menuExplain이라는 클래스를 갖고 있는 html태그에 show라는 
        //클래스를 추가해준다.

        setTimeout(function(e){
            //setTimeOut은 시간차 함수 실행이라고 생각하시면 되요

            //setTimeOut(function(),딜레이시간) 단 이때 시간의 단위는 ms 1천분의 1초 입니다
            // 1000이라고 하면 1초 인거죠

            getTarget.querySelector(".menuExplain").style.opacity="1"
            //이 변수중에 .menuExplain이라는 클래스를 갖고 있는 html태그에 스타일중에
            //opacity값을 1로 변경합니다.

        }, 100)
        // 0.1초 뒤에
    })


    // 엔터 입력시 열기
    menuList[i].addEventListener("keypress",function(e){
        //addEventListener 설명 안할게요
        // 이번 이벤트의 종류는 keypress 입니다. keypress의 이벤트객체엔 
        // keycode라고 이용자가 누른 키보드의 키가 코드값으로 저장이 됩니다.
        // keycode 검색해보세요 지금 13은 키보드의 enter키 입니다.

        if(e.keyCode == "13"){
            //만약 이 이벤트가 focus를 받은 상태에서 눌린 키보드가 enter라면
            var getTarget = e.currentTarget;
            //변수 선언

        getTarget.querySelector(".menuExplain").classList.add("show");
        //변수중에 menuExplain이라는 클래스를 같는 객체에 show클래스를 추가
        setTimeout(function(e){
            getTarget.querySelector(".menuExplain").style.opacity="1";
        }, 100)
        //0.1초 뒤에 변수중에 menuExplain이라는 클래스를 같는 객체의 opacity값을
        // 1로 변경
        }
    })
}

// 상세설명 닫기
for(var i=0; i < exampleCloseBtn.length; i++){
//for문 설명 안할게요

    exampleCloseBtn[i].addEventListener("click",function(e){
        //addEventListener 설명 안할게요
        
        e.stopPropagation();
        //stopPropagation은 이벤트가 bubbling되는 것을 막아 주는 함수에요
        //이건 구두 설명 할게요

        var setTarget = e.currentTarget.parentNode;
        //변수 선언

        setTarget.style.opacity="0";
        // opacity값을 0으로 변경
        
        setTimeout(function(){
            setTarget.classList.remove("show")
        }, 300)
        //이후 0.3초 이후에 show 클래스 제거
    })
}


var appStartWraper = document.querySelector(".appStartWraper");
//변수 선언

if(document.body.offsetWidth < 561){
    //document.body 즉 브라우저의 사이즈에요
    //브라우저 사이즈의 offsetWidth 즉 브라우저 너비가 561보다작으면
    
    window.addEventListener("load",function(e){
        //load 이벤트는 html문서가 로딩될 때 실행되는 이벤트에요

        setTimeout(function(e){
            appStartWraper.style.display="none"
        }, 5000);
        //5초 뒤에 변수의 dispaly값을 none으로 변경합나디.
    })
}else{
    appStartWraper.style.display="none"
    //브라우저 너비가 561보다 크면 바로 display를 none으로 변경합니다.
}