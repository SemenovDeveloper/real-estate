import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: red;
`

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px;
  font-size: 24px;
`
const StyledBox = styled.div`
  padding: 5px;
`

const StyledText = styled.p`
  color: grey;
  font-size: 16px;
  font-weight: 400;  
`
const LargeText = styled(StyledText)`
  font-size: 24px;
`
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Banner = ({ purpose, title1, title2, desc1, linkName, buttonText, imageUrl}) => {
  console.log(imageUrl)
  return (
  <StyledBanner>
    <Image src={imageUrl} width={500} height={300}/>
    <StyledBox />
    <StyledText>{ purpose }</StyledText>
    <LargeText>{ title1 }<br />{ title2 }</LargeText>
    <StyledText>{ desc1 }</StyledText>
    <Button primary>
      {/* <Link href={linkName}>
        <StyledText>{buttonText}</StyledText>
      </Link> */}
    </Button>
  </StyledBanner>
  )
}


export default function Home() {
  return (
    <>
      <Global />
      <StyledWrapper>
        <Head>
          <title>Real Estate App</title>
        </Head>
        <Banner 
          purpose='RENT A HOME'
          title1='Rental Homes for'
          title2='Everyone'
          desc1='Explore Apartments, Vilas, Homes'
          desc2='and more'
          buttonText='Explore Renting'
          linkName='/search?purpose=for-rent'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Banner purpose={'For Sale'}/>
        <section>
          <h2>Real Estate App</h2>          
          <p>
            Here are available <Link href="/listings">listings</Link>.
          </p>
        </section>
        <section>          
        </section>
      </StyledWrapper>
    </>
  )
}
