// Date 객체와 날짜

// 1. Date 객체 생성하는 방법
let date1 = new Date();
let date2 = new Date("1997/01/07");
let date3 = new Date("1997, 01, 07,10:10:10");

// 2. 타임 스템프
// 특정 시간이 UTC로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC ( 협정 세계 시) : "97.01.01 00시 00분 00초"로  
//                      세계의 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();

// Date() 객체를 생성하며 인수로 사용 가능
let date4 = new Date(ts1);

// 3. Date() 객체로부터  시간 요소들을 추출하는 방법
//  * 월은 인덱스값으로 0부터 시작하여 해당 월 -1로 추출되니 추출시 +1을 하는 것이 좋음
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();
// 등등 시분초도 추출 가능

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 마찬가지로 설정할 땐 수정할 월의 -1 ex) 1월로 수정할거면 setMonth(0)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocalString());

