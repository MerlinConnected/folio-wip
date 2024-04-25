import '@/styles/index.scss'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/images/icons/favicon-16x16.png' sizes='16x16' />
				<link rel='icon' type='image/png' href='/images/icons/favicon-32x32.png' sizes='32x32' />
				<link rel='apple-touch-icon' href='/images/icons/apple-touch-icon.png' />
				<link
					rel='icon'
					type='image/png'
					href='/images/icons/android-chrome-192x192.png'
					sizes='192x192'
				/>
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-TileImage' content='/images/icons/mstile-144x144.png' />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
