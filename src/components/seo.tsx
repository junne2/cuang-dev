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
  cover = "./code.jpg",
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
    "easy",
    "기술블로그",
    "새내기개발자",
    "김주희",
    "Front-end",
    "python",
    "이지",
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
  keywords: ["easy","python","front-end","React"],
  description: `새내기 개발자 이지의 블로그 입니다.`,
}

export default SEO
