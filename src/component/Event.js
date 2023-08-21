import {useEffect} from 'react'; 

// use로 시작되는 것 : 훅 
    // 훅 : 함수형 컴포넌트에서 클래스형 컴포넌트의 기능을 지원 하도록 적용 
        // 컴포넌트의 상태를 제어할 수 있도록 리엑트 16버젼부터 지원됨 
        // useState : 값이 수정되면 다시 랜더링 
            // const [name , setName] = useState(""); 

        // useEffect : 값이 변경이 되면 콜백함수를 호출 
            // useEffect( 콜백함수, 배열); 


export default function Event() {

    useEffect(
        () => {
            return () => {
                console.log("Event 컴포넌트 언마운트")
            };
        }
        , []
    ); 

    return <div> 현재 카운트는 짝수 입니다. </div>
}