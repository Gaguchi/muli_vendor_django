// my-ecommerce-site/src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Plugins JS File */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            strategy="beforeInteractive"
            data-cfasync="false"
            src="https://meetsomnox.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          />
          <Script strategy="beforeInteractive" src="/js/jquery.min.js" />
          <Script strategy="beforeInteractive" src="/js/plugins.min.js" />
          <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js" />
          <Script strategy="beforeInteractive" src="/js/jquery.appear.min.js" />
          <Script strategy="beforeInteractive" src="/js/jquery.plugin.min.js" />
          <Script strategy="beforeInteractive" src="/js/jquery.countdown.min.js" />
          {/* Main JS File */}
          <Script strategy="beforeInteractive" src="/js/main.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;