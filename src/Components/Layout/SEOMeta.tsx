import Head from 'next/head'

const SEOMeta = ({
    title = 'Art Shop',
    description = 'Sell/Buy your Art',
    keywords = 'Art, Ecommerce, buy, sell',
}: {
    title?: string
    description?: string
    keywords?: string
}): JSX.Element => {
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <title>{title + ' | ArteBlvd'}</title>
            <link
                href='/SEO/favicon-16x16.png'
                rel='icon'
                type='image/png'
                sizes='16x16'
            />
            <link
                href='/SEO/favicon-32x32.png'
                rel='icon'
                type='image/png'
                sizes='32x32'
            />
            <link rel='icon' href='/SEO/favicon.ico' type='image/x-icon' />
            <link
                rel='apple-touch-icon'
                href='/SEO/apple-touch-icon.png'
            ></link>
            <meta name='theme-color' content='#333333' />
            <link
                rel='icon'
                type='image/svg+xml'
                href='/SEO/favicon-32x32.png'
            />
            <title>{title}</title>
            <link rel='manifest' href='/SEO/site.webmanifest' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content='@arteblvd' />
            <meta name='twitter:title' content='arteblvd' />
            <meta name='twitter:description' content='arteblvd' />
            <meta name='twitter:image' content={`Url/img/og.png`} />

            {/* Open Graph */}
            <meta property='og:url' content='url' key='ogurl' />
            <meta property='og:image' content={'img/og.png'} key='ogimage' />
            <meta
                property='og:site_name'
                content='arteblvd.co'
                key='ogsitename'
            />
            <meta property='og:title' content={title} key='ogtitle' />
            <meta
                property='og:description'
                content={description}
                key='ogdesc'
            />
        </Head>
    )
}
export default SEOMeta
