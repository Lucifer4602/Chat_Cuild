import React ,{useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { ColorButton } from '../HomePage_components/ColorButton';
import Color from '../assets/colors';
import './WelcomePage.css';


export const WelcomePage = () => {
    const [code,setCode] = useState('');

    const navigate = useNavigate();
    function onClickStarted(){
        navigate("/LoginPage");
    }

    useEffect(()=>{
        const codeText = "Code\nDevelop\nConnect";
        let currentIndex = 0;

        function writeCode() {
            if (currentIndex <= codeText.length) {
                var newText = codeText.slice(0, currentIndex);
                setCode(newText);
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }
        // Adjust the interval time based on your preference
        const timer = setInterval(writeCode, 200);
    },[])

    return (
        <div id='main'>
            <h1>cUilD</h1>
            <div id='innerFrame'>
                <div id='leftSideDiv'>
                    <h1 id='code-h1'>{code}<span className='cursor'></span></h1>
                    <p> Connect today and experience the synergy of like-minded programmers working seamlessly together. Your coding buddies are just a <span>click away!</span></p>
                    <div id='btnDiv'><ColorButton text ='Get Started' color = {Color.oragne} fontSize = '20px' onClick = {onClickStarted}/></div>
                </div>
                <div id='rightSideDiv'>
                    <img src='https://s3-alpha-sig.figma.com/img/8055/1602/4e93f41ce1f405a888d4bf032ed3b201?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cl9kzARxrbgyy5144okRuUPek6yAEjQeGRd6g~sEnWdMIzQt0y0bqF~3LxjgdDN5LwijDqRLWl2cZnDdgapGMLiWMz1IGsrDP5pNlaAvhzkBfoLR5libZW2SuoASDrhbPe1y~oVKiMLkP7YjmzfVe3EHEFlF5qQf1F42nn99-oI~q~P0O9ensdbPLwbL1dZlWrjw-kFMt4QLh6witMk-JdADfRMW6SyCmtgKIYbxbwM1RpKrZrnlLPX5JTLP0TT~n272wEThMYqy5ojval18~QYVWOc9hjhmoexIH9nAXHbNXCUQ2K1NHluaF2Cta48cVGBD0-YV1sojKVmYS~BlNg__' alt='Jelly'></img>
                </div>
            </div>
        </div>
    )
}
