import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="이지ㄴ 소개 | 새내기 개발자 블로그"
        description="열심히 기초를 쌓아가는 새내기 개발자 입니다."
      />
      <About />
    </Layout>
  )
}

export default AboutPage
