import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          keywords
          themeColor
        }
      }
    }
  `)
  return (
    <Helmet
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.description,
        },
        {
          name: "keywords",
          content: data.site.siteMetadata.keywords,
        },
        {
          name: "theme-color",
          content: data.site.siteMetadata.themeColor,
        },
      ]}
      title={`${data.site.siteMetadata.title} | ${title} `}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <html lang="en" />
    </Helmet>
  )
}

export default Head
