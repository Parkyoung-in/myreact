import {useState, useRef} from 'react'
// useRef : 컴포넌트 안의 특정 DOM(요소) 선택할 수 있게끔 도와주는 기능이다!!
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// useNavigate : ---> 특정 주소값으로 화면을 전환 할 수 있는 역할!!

function Join() {

    const useId = useRef();

    // const [inputId, setinputId] = useState('');
    // const [inputPw, setinputPw] = useState('');
    // const [inputNick, setinputNick] = useState('');


    // function id(e) {
    //     setinputId(e.target.value)
    // }
    // function pw(e) {
    //     setinputPw(e.target.value)
    // }
    // function nick(e) {
    //     setinputNick(e.target.value)
    // }
    // function reset() {
    //     setinputId('');
    //     setinputPw('');
    //     setinputNick('');
    // }

    
    // return (
    //     <>
    //         <h1>회원가입 페이지 입니다</h1>
    //         ID : <input onChange={id} value={inputId}></input>
    //         <br></br>
    //         PW : <input onChange={pw} value={inputPw}></input>
    //         <br></br>
    //         NICK : <input onChange={nick} value={inputNick}></input>
    //         <br></br>
    //         <button>Join</button>
    //         <button onClick={reset}>초기화</button>
    //     </>
    // );
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [nick, setNick] = useState('');

    function reset() {
        setId('');
        setPw('');
        setNick('');

        // ref.current -> ref가 적용된 태그를 의미~
        useId.current.focus();
    }

    const nav = useNavigate();
    // function tryJoin() {
    //     nav('/Login?id='+id+'&pw='+pw+'&nick='+nick);
    // }
    
    // form : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달

    return(
        <>
            <h1>회원가입 페이지 입니다</h1>
            <form action='/Login'>
            ID : <input name='id' onChange={(e)=>setId(e.target.value)} value={id} ref={useId}></input>
            <br></br>
            PW : <input name='pw' onChange={(e)=>setPw(e.target.value)} value={pw}></input>
           <br></br>
            NICK : <input name='nick' onChange={(e)=>setNick(e.target.value)} value={nick}></input>
            <br></br>
            {/* <Link to = './Login'><button>Join</button></Link> */}
            <button>Join</button>
            {/* <button onClick={reset}>초기화</button> 폼태그 안에서는 기본적으로 타입이 submit으로 설정된다 */}
            {/* 따라서 form 태그 밖으로 빼거나, type을 따로 지정해줘야 한다 */}
            <button onClick={reset} type='button'>초기화</button>
            </form>
        </>
    )
}
export default Join;