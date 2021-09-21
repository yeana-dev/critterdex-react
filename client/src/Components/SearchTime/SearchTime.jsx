import Layout from "../Layout/Layout";
import { useState } from "react";

const Search = (props) => {
  const { bugs } = props;
  const [hemisphere, setHemisphere] = useState("");
  const [time, setTime] = useState(0);
  const [month, setMonth] = useState(0);
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let times = ["Time"];
  const displayTime = () => {
    for (let i = 0; i <= 23; i++) {
      if (i <= 11) {
        times.push(`${i}:00 AM`);
      } else if (i === 12) {
        times.push("12:00 PM");
      } else {
        times.push(`${i - 12}:00 PM`);
      }
    }
  };
  displayTime();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = bugs.filter(
      (bug) =>
        bug["availability"][`month-array-${hemisphere}`].includes(month) &&
        bug["availability"]["time-array"].includes(time)
    );
    props.setSearchResult(data);
  };

  return (
    <Layout>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div id="hemisphere">
          <input
            type="radio"
            name="hemisphere"
            id="northern"
            onChange={() => setHemisphere("northern")}
          />
          <label for="northern">Northern</label>
          <input
            type="radio"
            name="hemisphere"
            id="southern"
            onChange={() => setHemisphere("southern")}
          />
          <label for="southern">Southern</label>
        </div>
        <div id="timeMonth"></div>
        <select
          form="search-form"
          id="month"
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {months.map((month, index) => {
            return <option value={index}>{month}</option>;
          })}
        </select>
        <select
          form="search-form"
          id="time"
          onChange={(e) => setTime(Number(e.target.value))}
        >
          {times.map((time, index) => {
            return <option value={index - 1}>{time}</option>;
          })}
        </select>
        <input type="submit" value="Catch" id="submit" />
      </form>
    </Layout>
  );
};

export default Search;
