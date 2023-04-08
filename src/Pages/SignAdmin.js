import '../Styles/Admin.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignAdmin() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    var item_value = sessionStorage.getItem("token");
    sessionStorage.setItem("token", item_value);

    const LogInAdm = () => {
        axios({
            method: 'post',
            url: 'https://localhost:7108/api/Authenticate/login',
            data: {
                "userName": userName,
                "password": password
            },
            dataType: "dataType",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(data => sessionStorage.setItem('token', data['data']['token']))
            .then(response => { navigate('/table') })
    }

    return (
        <div className="adm-container">
            <div className="window-enter-adm">
                <p id="enter">Привет сотрудник!</p>
                <input id="login-enter" type="text" placeholder="Введите логин" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <input id="password-enter" type="text" placeholder="Введите пароль" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className="button-adm" onClick={() => { LogInAdm() }}>Enter</button>
            </div>
        </div>
    );
}

export default SignAdmin;