import React from "react"
import { useSiteMetadata } from "./useMetadata"
import {Helmet} from "react-helmet";

export const SEO = ({ title, description, pathname, href, keys, haveArticle,articleBody, articleDescription, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        href: `https://${href}`,
        keys: `${keys}`,
        articleBody: `${articleBody}`,
        articleDescription: `${articleDescription}`

    }

    const schemaOrgJSONLD = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: seo.url,
            name: seo.title,
        },
        {
            "@context": "https://schema.org",
            "@type": "Place",
            address: "Краснодарский край, город Новороссийск, улица Котанова, дом 6",
            hasMap: "https://yandex.ru/map-widget/v1/?um=constructor%3Af7f76e8ebad9a602dd6fdcd7ced640122a8e99cc5429da23fd715633b2659154&amp;source=constructor",
        }
    ]
    if (haveArticle === true) {
        schemaOrgJSONLD.push({
            "@context": "http://schema.org",
            "@type": "Article",
            author: {
                "@type": "Person",
                name: "Владимир Конюхов",
                alternateName: "Конюхов Владимир",
                email: "kvr165@mail.ru",
                knowsAbout: ["Юриспруденция", "Гражданское право"],
                image: "../images/profile.jpeg",
            },
            description: seo.articleDescription,
            articleBody: seo.articleBody,
        })
    }

    return (
        <Helmet>
            <title>{seo.title}</title>
            <link rel="canonical" href={seo.href}/>
            <meta name="viewport" content="width=device-width"/>
            <meta property={'og:description'} name="description" content={seo.description} />
            <meta name="keywords" content={seo.keys} />
            <meta name="yandex-verification" content="226191450c33932b" />
            <meta name="google-site-verification" content="694mDeaMvdBfVs5U70NN5yTlJZ63tAT4tIvr9JsQeDo" />
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
            {children}
        </Helmet>
    )
}
