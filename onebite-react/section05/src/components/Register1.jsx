
// 섹션5 React.js 입문 5.8) State로 사용자 입력 관리하기 1

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () =>{
    const [name, setName]  = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setContry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) =>{
        setName(e.target.value);
    }

    const onChangeBirth = (e) =>{
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setContry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder={"이름"}/>
                {name}
            </div>
            
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} placeholder={"생년월일"}/>
                {birth}
            </div>
            
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio} placeholder={"자기소개"}>
                </textarea>
                {bio}
            </div>
        </div>
    )
}

export default Register;