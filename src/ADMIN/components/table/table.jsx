import "./table.scss";

const Table = ({data,className}) => {
  return (
    <div className={`table-block ${className}`}>
      {data.map((item, index) => (
        <div className="table-row G-align-center" key={index}>
          <div className="table-cell table-cell--time">{item.time}</div>
          <div className="table-cell table-cell--merchant">
            <div className="table-merchant">{item.merchant}</div>
            <div className="table-uuid">{item.uuid}</div>
          </div>
          <div className="table-cell table-cell--pair">{item.pair}</div>
          <div className={`table-cell table-cell--status status--${item.status.toLowerCase()}`}>
            {item.status}
          </div>
          <div className="table-cell table-cell--amount">
            <p>{item.amount} </p>
            <span>{item.currency}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
