import {useEffect, useState} from 'react'


function Ex01 () {
    
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);

    // useEffect : 렌더링 되자마자 이거부터 실행해주세요!
    // --> 상태값이 바뀔 때 마다(다시 렌더링 된다) 다시 실행시킨다. 

    useEffect(function() {
            console.log('Test')
        }, [data]) 
        // console로 확인하면 Test가 뜬 것을 알 수 있음 
        // 왜 두 번 찍힐까? -> index.js에 있는 React.StrictMode 때문에 (안전장치로 한 번 실행하기 때문에 총 2번 찍힘)
        // [data] 를 넣으면 data의 상태값이 바뀌었을 때만 실행시켜주세요 -> data 렌더링 할 때 test 출력함 
    function add () {
        setData(data+1); 
    }

    function minus () {
        setData(data-1);
    }
    // 버튼을 클릭할 때마다 test가 계속 뜸 
    // -> 상태값이 바뀌어서 (렌더링이 계속 되기 때문에) 

    function add1 () {
        setData1(data1+1); 
    }

    function minus1 () {
        setData1(data1-1);
    }

    return (
        <>
            <h1>useEffect 첫 번째</h1>
            <button onClick={add}>+</button>
            <span>{data}</span>
            <button onClick={minus}>-</button>
            <br></br>
            <button onClick={add1}>+</button>
            <span>{data1}</span>
            <button onClick={minus1}>-</button>
        </>
    )
}

export default Ex01;