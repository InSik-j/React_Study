
// 섹션5 React.js 입문 5.9) State로 사용자 입력 관리하기 2

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register2 = () =>{
    
    const[input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
        console.log(e.target.name, e.target.value);
        console.log(e);
    }

    return (
        <div>
            <div>
                <input name = "name" value={input.name} onChange={onChange} placeholder={"이름"}/>
                {input.name}
            </div>
            
            <div>
                <input type="date" name = "birth" value={input.birth} onChange={onChange} placeholder={"생년월일"}/>
                {input.birth}
            </div>
            
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} placeholder={"자기소개"}>
                </textarea>
                {input.bio}
            </div>
        </div>
    )
}

export default Register2;