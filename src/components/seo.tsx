import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SEOProps = {
  description?: string
  lang?: string
  meta?: any
  keywords?: any
  title: string
  cover?: string
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  cover = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvelog.io%2F%40chltndid724%2F%25EC%2599%259C-%25EA%25B0%259C%25EB%25B0%259C%25EC%259E%2590%25EB%25A5%25BC-%25ED%2595%2598%25EC%2598%2580%25EB%258A%2594%25EA%25B0%2580&psig=AOvVaw2sTgDdIMwhEBijG7-eXdNG&ust=1647090971361000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiwuZSSvvYCFQAAAAAdAAAAABAJ",
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const KEYWORDS_SET = [
    "cuang",
    "기술블로그",
    "새내기개발자",
    "김주희",
    "Front-end",
    "python",
    "쿠앙",
    "",
  ]
  const currentKeywords = [...keywords, ...KEYWORDS_SET]

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "google-site-verification",
          content: "VfQVOE4yPiSKT5CLjSodmAQlY9NJxwkxCzEOOf36SpQ",
        },
        {
          property: `og:title`,
          content: `${title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: cover,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat({
        name: "keywords",
        content: currentKeywords.join(", "),
      })}
    />
  )
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  keywords: ["cuang","python","front-end","React"],
  description: `새내기 개발자 쿠앙이의 블로그 입니다.`,
}

export default SEO
