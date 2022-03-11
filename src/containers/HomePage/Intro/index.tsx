import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "../../../components/SocialProfile/SocialProfile"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from "./style"
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/junne2/",
    tooltip: "Github",
  },
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

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/pika.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

  const { author } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          안녕하세요 이지 입니다.
        </IntroTitle>
        <Desciption>
          새로운 도전하는 새내기 개발자 입니다.:)<br />
          새로운 도전에 겁은 나지만 도전 과 알아가는 것을 좋아하는 사람이라 늦었지만 개발자 라는 열차에 탑승하려 합니다.<br /> 
          현재 저는 프론트 엔드 개발을 위해 준비중이며,기초를 열심히 다져나가고 있습니다. 많은 것을 보고 배워 좋은 개발자가 되겠습니다.
          <br />
        </Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  )
}

export default Intro
