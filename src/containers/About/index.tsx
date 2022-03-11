import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "../../components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"
import { Desciption } from "../HomePage/Intro/style"

const SocialLinks = [
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/junne2",
    tooltip: "Github",
  },
  // {
  //   icon: <IoLogoLinkedin />,
  //   url: "https://www.linkedin.com/in/donggeun-lee-568916160/",
  //   tooltip: "Linkedin",
  // },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/",
    tooltip: "Facebook",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>안녕하세요. 이지입니다.</h2>
        <p>
          새로운 도전하는 새내기 개발자 입니다.:)<br />
          새로운 도전에 겁은 나지만 도전 과 알아가는 것을 좋아하는 사람이라 늦었지만 개발자 라는 열차에 탑승하려 합니다.<br /> 
          현재 저는 프론트 엔드 개발을 위해 준비중이며,기초를 열심히 다져나가고 있습니다. 많은 것을 보고 배워 좋은 개발자가 되겠습니다.
          <br />
          
        </p>
      </AboutPageTitle>
      {/*<AboutImage>*/}
      {/*  <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />*/}
      {/*</AboutImage>*/}
      <AboutDetails>
        <h2 style={{ marginTop: "32px" }}>개발 언어</h2>
        <div>
          <li>python</li>
          <li>javascript</li>
          <li>React.js</li>
        </div>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
