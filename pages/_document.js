import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="../public/favicon.ico"
            type="image/x-icon"
            sizes="16x16"
          />
        </Head>
        <body className="scrollbar-hide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
