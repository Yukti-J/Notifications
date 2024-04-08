import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <link rel="manifest" href="/manifest.json"></link> */}
      <link rel="manifest" href="https://progressier.app/iyMlRYwbIct59hEMG1gG/progressier.json"/>
      <script defer src="https://progressier.app/iyMlRYwbIct59hEMG1gG/script.js"></script>
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
