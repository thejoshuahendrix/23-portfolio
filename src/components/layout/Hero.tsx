import styled from 'styled-components';


const HeroImage = styled.div`
  width: 100%;
  height: 500px;
  background: url(${({theme})=> theme.background.image});
  background-repeat: no-repeat;
  background-position: middle;
  background-size: cover;
  background-attachment: fixed;
`

const HeroText = styled.div`
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme})=> theme.text.primary};
  font-size: 72px;
  
`
const HeroLowerText = styled.div`
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme})=> theme.text.primary};
  font-size: 45px;
`
const Hero = () => {

  return (
    <>
      <HeroImage>
        <HeroText id="hero">Josh Hendrix</HeroText>
        <HeroLowerText id="herotext">Software Engineer</HeroLowerText>
      </HeroImage> 
    </>
  )
}

export default Hero