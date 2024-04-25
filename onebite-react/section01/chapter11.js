// 함수

// * JS는 호출과 선언 위치와 상관없이 실행 됨 

// 함수 선언
// - function 함수명(매개변수){
//       실행할 문장
//       return 반환 값 ;
//   }
function greeting(){
    console.log("함수 실행");
}

// 함수 호출
// 함수명(인수);
greeting(); 

// 사각형의 넓이 구하기
function getArea(width, height) {
    let area = width * height;    
    return area;
}

let area1 = getArea(10, 20);


function getArea2(width, height) {

    function another(){
        console.log("중첩함수 호출됨");
    }
    another();
    let area = width * height;    
    return area;
}

let area2 = getArea(10, 20);