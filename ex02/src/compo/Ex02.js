import {useState} from 'react'

function Ex02() {

    // const [todoArray, setTodoArray] = useState([]);

    // let result='';
    // function insertData(e) {
    //     setTodoArray(todoArray.concat(result));
    // }
    // function getData(e) {
    //     result = e.target.value
    // }

    // return (
    //     <>
    //         <h1>TodoList</h1>
    //         <input onChange={getData}></input>
    //         <button onClick={insertData}>추가</button>
    //         {todoArray.map(function(data,index) {
    //             return <h1 key={index}>{data}</h1>
    //         })}
    //     </>
    // )
    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState('');

    function getText(e) {
        setInputData(e.target.value);
    }

    function setTodo() {
        // todoArray에 inputData 추가
        // 리액트에서 배열에 값을 추가 할 때는 -> push가 아니라 concat을 사용한다!

        // 불변성 유지 : 상태값을 업데이트 할때는 기존 상태를 그대로 두면서 새로운 값으로 상태를 업데이트 해줘야함!!!
        setTodoArray(todoArray.concat(inputData))
    }
    
    function deleteData(e) {
        // e.target.value

        // 배열의 index -> 숫자타입
        // e.target.value -> 문자열타입
        setTodoArray(todoArray.filter(function(data,index) {
            return index != e.target.value
        }));
    }

    return(
        <>
            <h1>TodoList</h1>
            <input onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data,index) {
                return (
                <div>
                    <h1 key={index}>{data}</h1>
                    <button value={index} onClick={deleteData}>삭제</button>
                </div>
                )
            })}
        </>
    )
}

export default Ex02;