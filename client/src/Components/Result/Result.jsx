const Result = (props) => {
  const { result } = props;
  return (
    <div className="result-card">
      <img src={result.icon_uri} alt={`${result.name} icon`} />
      <div className="card-name">{result.name["name-USen"]}</div>
      <div className="card-price">{result.price}</div>
      <div className="card-months">
        {result.availability.isAllYear
          ? "All Year"
          : `North: ${result.availability["month-northern"]} | Southern: ${result.availability["month-southern"]}`}
      </div>
      <div className="card-location">{result.availability.location}</div>
      <div className="card-time">
        {result.availability.isAllDay ? "All Day" : result.availability["time"]}
      </div>
    </div>
  );
};

export default Result;
