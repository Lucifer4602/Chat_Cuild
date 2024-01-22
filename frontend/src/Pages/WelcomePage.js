import React from 'react'
import './WelcomePage.css'
import Color from '../assets/colors'
import { ColorButton } from '../HomePage_components/ColorButton'
export const WelcomePage = () => {
    return (
        <div id='main'>
            <h1>cUilD</h1>
            <div id='innerFrame'>
                <div id='leftSideDiv'>
                    <h1>Code
                        Develop
                        Connect</h1>
                    <p> dfsahfkdjhufeuoqoisdafljalksf sda3-==2polkfjalkl;ldclnkdg </p>
                    <div id='btnDiv'><ColorButton text ='Get Started' color = {Color.oragne} fontSize = '20px'/></div>
                </div>
                <div id='rightSideDiv'>
                    <img src='https://s3-alpha-sig.figma.com/img/8055/1602/4e93f41ce1f405a888d4bf032ed3b201?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cl9kzARxrbgyy5144okRuUPek6yAEjQeGRd6g~sEnWdMIzQt0y0bqF~3LxjgdDN5LwijDqRLWl2cZnDdgapGMLiWMz1IGsrDP5pNlaAvhzkBfoLR5libZW2SuoASDrhbPe1y~oVKiMLkP7YjmzfVe3EHEFlF5qQf1F42nn99-oI~q~P0O9ensdbPLwbL1dZlWrjw-kFMt4QLh6witMk-JdADfRMW6SyCmtgKIYbxbwM1RpKrZrnlLPX5JTLP0TT~n272wEThMYqy5ojval18~QYVWOc9hjhmoexIH9nAXHbNXCUQ2K1NHluaF2Cta48cVGBD0-YV1sojKVmYS~BlNg__' ></img>
                </div>
            </div>
        </div>
    )
}
