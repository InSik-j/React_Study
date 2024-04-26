// 단락평가
//  - && 나 || 같은 논리연산식에서 
//    첫 번째 피연산자의 값만으로도 해당 결과를 확정할 수 있다면 
//    두번째 피연산자에 접근하지 않은 JS의 특징
// 예시 코드) varA && varB
// -> varA가 False이면 결과가 False일 수 밖에 없는 상황이라 varB에 접근하지 않는 특징

function returnFalse(){
    console.log("False 함수");
    return false;
}
function returnTrue(){
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue()); 
// -> 첫 번째 피연산자가 F여서 두 번째 피연산자의 값 여부와 상관없이 값이 F이기 때문에 
//    단락평가가 실행되어 returnTrue()에 접근하지 않고 returnFalse()만 실행됨

console.log(returnTrue() && returnFalse() );
// -> 두 번째 피연산자의 값에 따라 결과가 정해지기 때문에
//    단락평가가 실행되지 않고 둘 다 실행됨

// * Boolean 값 외에도 Truthy와 Falsy 같은 값에도 사용 가능

// 단락 평가 활용 사례

// 리팩터링 전
function printName(person){
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// 단락 평가를 이용한 리팩터링
function printName(person){
    console.log(person && person.name);
}

// 개선
function printName(person){
    const name = person && person.name; 
    console.log(name || "person의 값이 없음");
}