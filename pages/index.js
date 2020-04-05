import Head from "next/head";
import App from "../components/App";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style.css" />
    </Head>
    <App>
      <main> Subpage</main>
    </App>
  </div>
);

export default Home;
