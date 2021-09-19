import Layout from "../Layout/Layout";

const Search = () => {
  const months = [
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
  let times = [];
  const handleTime = () => {
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
  handleTime();
  return (
    <Layout>
      <form className="search-form">
        <div id="hemisphere">
          <input
            type="radio"
            name="hemisphere"
            id="northern"
            value="northern"
          />
          <label for="northern">Northern</label>
          <input
            type="radio"
            name="hemisphere"
            id="southern"
            value="southern"
          />
          <label for="southern">Southern</label>
        </div>
        <div id="timeMonth"></div>
        <select form="search-form" id="month">
          {months.map((month, index) => {
            return <option value={index + 1}>{month}</option>;
          })}
        </select>
        <select form="search-form" id="time">
          {times.map((time, index) => {
            return <option value={index}>{time}</option>;
          })}
        </select>
        <input type="submit" value="Catch" id="submit" />
      </form>
    </Layout>
  );
};

export default Search;
