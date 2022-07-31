import type { NextPage } from "next";
import axios from "axios";

const Home: NextPage = () => {
  return <h1 className="text-3xl font-light underline">Hello world!</h1>;
};

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: { videos: data },
  };
}

export default Home;
