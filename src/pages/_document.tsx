import { Html, Head, Main, NextScript } from 'next/document';

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
