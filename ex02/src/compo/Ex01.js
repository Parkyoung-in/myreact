import {useState} from 'react'

function Ex01() {

    // const array = ['눈', '바람', '비', '해']; 
    const [array, setArray] = useState(['눈', '바람', '비', '해']);

    function deleteData(e) {
        // e.target.value      // 버튼의 밸류값, 즉 인덱스 값을 가져온다
        setArray(array.filter(function(data,index) {
            return index != e.target.value; // e.target.value : 내가 선택한 인덱스 번호
        }));
    }


    return(
        <>
            <ul>
                {array.map(function(data, index){       // index는 중복값이 있을수 없다
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>  // 따라서 li에 인덱스를 key값으로 주면 warning이 뜨지 않는다
                })}
            </ul>
        </>
    )
}

export default Ex01;