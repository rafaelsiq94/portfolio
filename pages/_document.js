import Document, { Html, Head, NextScript, Main} from "next/document";

class MyDocument extends Document {
  render() {
    return <Html lang="pt-br">
      <Head>
        <link rel="preload" href="/fonts/Roboto-Bold.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto-Medium.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto-Regular.ttf" as="font" crossOrigin="anonymous" />
      </Head>
      <body className="bg-white dark:bg-background">
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument;