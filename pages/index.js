import fetch from "node-fetch";
import Router from "next/router";
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";

const Row = ({ item }) => {
  const { currency, quote } = item;
  return (
    <tr>
      <td>{currency.value}</td>
      <td>{quote.value}</td>
    </tr>
  );
};

const Table = ({ items }) => {
  return (
    <div className="table-responsive-sm">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <Row key={item.currency.value} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const Index = ({ data }) => {
  const { base, rates } = data.rates;

  return (
    <Layout>
      <div className="exchange">
        <h1 className="mb-3">Historical data</h1>
        <div className="card">
          <div className="card-body">
            <p>Base Currency: {base.value}</p>
            <Table items={rates} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Index);

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8080/rates/EUR/2011-01-01`);
  const data = await res.json();
  return { props: { data } };
}
