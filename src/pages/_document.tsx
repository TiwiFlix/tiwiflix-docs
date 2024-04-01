import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="
          bg-[#fff]

        dark:bg-[#0E1433]
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
