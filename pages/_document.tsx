import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return <Html lang="en">
      <Head>
      </Head>
      <body className="bg-white dark:bg-background">
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument;
