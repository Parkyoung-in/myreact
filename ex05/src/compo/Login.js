import {useNavigate, useSearchParams} from 'react-router-dom'
// useSearchParams : 주소값에 있는 쿼리스트링 데이터를 꺼내올 수 있게 만들어줌
import {useState} from 'react'

// function Login() {
    
//     const [params, setParams] = useSearchParams();
    
//     const id = params.get('id');
//     const pw = params.get('pw');

//     const [inputid, setinputId] = useState('');
//     const [inputpw, setinputPw] = useState('');
    
//     function check() {
//         if (id==inputid && pw==inputpw) {
//             return check
//         }
//     }
    
    
//     return(
        
//         <>
//             <h1>Login페이지</h1>
//             ID : <input onChange={(e)=>setinputId(e.target.value)}></input>
//             <br></br>
//             PW : <input onChange={(e)=>setinputPw(e.target.value)}></input>

//             <Link to='/'><button onClick={check}>로그인 시도</button></Link>
//         </>
//     )
// }
function Login() {
    const nav = useNavigate();

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setInputNick] = useState('');
    // params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
    // ex)id=Test&pw=123&nick=냉면

    const [params, setParams] = useSearchParams();
    const id = params.get('id');
    const pw = params.get('pw');
    const nick = params.get('nick');    // Join에서 넘긴 nick

    function tryLogin() {
        if(id==inputId && pw == inputPw) {
            // 로그인 성공
            console.log('성공!')
            nav("/Home?nick="+nick)
            
        }
        else  {
            // 로그인 실패
            console.log('실패!')
        }
    }

    return(
        <>
            <h1>Login 페이지</h1>
            {/* 로그인 무조건 성공 */}
            <form action='/Home'>
            ID : <input name='id' onChange={(e)=>setInputId(e.target.value)}></input>
            <br></br>
            PW : <input name='pw' onChange={(e)=>setInputPw(e.target.value)}></input>
            {/* <button onClick={tryLogin}>로그인 시도</button> */}
            <input value={nick} style={{display:'none'}} name='nick'></input>
            <button>로그인 시도</button>
            </form>
        </>
    )
}
export default Login;