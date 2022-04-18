import styled from "styled-components";

const SpinningCircle = () => {
    return(<>
    <SpinnerDiv>
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r= "20"/>
        </svg>
    </SpinnerDiv>
    

    </>)
}

const SpinnerDiv = styled.div`
width: 200px;
height: 200px;
svg{
    animation: rotate 1.5s linear infinite;

}
circle{
    animation: 
    color 6s ease-in-out infinite, 
    dash 1.5s ease-in-out infinite;
    
    fill:none;
    stroke: black;
    stroke-width: 3;

}

@keyframes rotate {
    from{
        transform: rotate(0 deg);
    }
    to{
        transform: rotate(360deg);
    }
}
@keyframes color {
    0%{
        stroke: #4285f4;
    }
    25%{
        stroke: #de3e35;
    }
    50%{
        stroke: #f7c223;
    }
    75%{
        stroke: #1da760;
    }
    100%{
        stroke: #4285f4;
    }
    
}
@keyframes dash {
    0%{
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
    }
    50%{
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35;

    }
    100%{
        stroke-dasharray: 89,200;
        stroke-dashoffset: -124;

    }
    
}
`


export default SpinningCircle;