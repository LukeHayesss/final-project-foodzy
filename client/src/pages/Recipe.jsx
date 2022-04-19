import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ToggleBookmark from "../components/ToggleBookmark";
import { BiPrinter } from 'react-icons/bi';
import SpinningCircle from "../components/SpinningCircle";


const Recipe = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    let params = useParams()
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const printPageHandler = () => {
        window.print();
    };

    useEffect(() => {
    async function fetchData(name) {
        const response = await fetch(`/recipe/${name}`)
        const data = await response.json()
        setDetails(data);
        console.log(data, 'DETAILZZZ')
        setIsLoaded(true)
    }
    fetchData(params.name)
}, [])

return (
        <>
        {(!isLoaded &&
        <LoadingIconWrapper>
        <SpinningCircle />
        </LoadingIconWrapper>)}
        {(isLoaded && 
        <div>
        <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <MoreDetails>
            <h3>Servings: {details.servings}</h3>
            <Minutes><h3>Ready in {details.readyInMinutes} minutes.</h3></Minutes>
             </MoreDetails>
              <img src={details.image} alt={''}/>
                <MiniWrap>
                  <ToggleBookmark id={details.id} title={details.title} image={details.image}/>
                   <Button2 onClick={printPageHandler}>
                    <BiPrinter size={18}/> Print Recipe
                    </Button2>
                      </MiniWrap>
                </div>
                <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} 
                onClick={() => setActiveTab('instructions')}>Instructions
                </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} 
                onClick={() => setActiveTab('ingredients')}>Ingredients
                </Button>
                <Button className={activeTab === 'wine' ? 'active' : ''}
                onClick={() => setActiveTab('wine')}>Wine Pairings 
                </Button>
                {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
                )}
                {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => 
                <li key={ingredient.id}>{ingredient.original}</li>
                )}
                </ul>
                )}
                {activeTab === 'wine' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.winePairing.pairingText}}></h3>
                </div>
                )}
               </Info>
              </DetailWrapper>
            </div>)}
        </>
)}

const MiniWrap = styled.div`
display: flex;
width: 200px;
align-items: center;
`

const MoreDetails = styled.div`
display: flex;
width: 400px;
align-items: center;
`

const Minutes = styled.div`
margin-left: 20px;
`

const DetailWrapper = styled.div`
margin-top: 10rem;
margin: 0% 8%;
margin-bottom: 5rem;
padding-top: 50px;
display: flex;
.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2 {
    /* margin-bottom: 0.5rem; */
    font-size: 2.5rem;
} 
li {
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul {
    margin-top: 2rem;
}
h3 {
    font-size: 1.2rem;
}
p {
    font-size: 14px;
    text-decoration: none;
    cursor: default;
}
img {
    margin-bottom: 0.6rem;
    }
`

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 1px solid black;
margin-right: 1rem;
font-weight: 600;
font-size: 14px;
cursor: pointer;
border-radius: 2px;
`

const Button2 = styled.button`
background-color: #313131;
color: white;
border: 1px solid black;
font-size: 12px;
border-radius: 2px;
padding: 8px 15px;
margin-left: 30px;
font-weight: 600;
width: 110px;
cursor: pointer;
&:hover {
    background-color: #404040;
}
`

const Info = styled.div`
margin-left: 3.5rem;
width: 900px;
`

const LoadingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  padding-bottom: 500px;
`

export default Recipe;

    // const fetchDetails = async () => {
    //     const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    //     const detailData = await data.json();
    //     setDetails(detailData);
    //     console.log(detailData, 'TESTING');
    //     setIsLoaded(true);
    // };

    // useEffect(() => {
    //     fetchDetails();
    // }, [params.name])
