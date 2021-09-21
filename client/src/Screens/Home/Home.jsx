import Layout from "../../Components/Layout/Layout";
import SearchTime from "../../Components/SearchTime/SearchTime";
import SearchName from "../../Components/SearchName/SearchName";
import Result from "../../Components/Result/Result";
import { getBug, getFish, getSea } from "../../Services/data";
import { useState, useEffect } from "react";

const Home = () => {
  const [bugs, setBugs] = useState([]);
  const [fishes, setFishes] = useState([]);
  const [seas, setSeas] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const resp = await getBug();
      setBugs(resp);
    };
    const fetchFish = async () => {
      const resp = await getFish();
      setFishes(resp);
    };
    const fetchSea = async () => {
      const resp = await getSea();
      setSeas(resp);
    };
    fetchBugs();
    fetchFish();
    fetchSea();
    const allData = [...bugs, ...fishes, ...seas];
    console.log(allData);
  }, [searchResult]);
  return (
    <Layout>
      <SearchTime bugs={bugs} setSearchResult={setSearchResult} />
      <SearchName bugs={bugs} setSearchResult={setSearchResult} />
      {searchResult.map((result) => {
        return <Result result={result} />;
      })}
    </Layout>
  );
};

export default Home;
