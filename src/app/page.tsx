import StatusLabel, { Status } from './components/StatusLabel';

const Home = () => {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active} />
      <StatusLabel status={Status.NotActive} />
      <StatusLabel status={Status.Pending} />
      <StatusLabel status={Status.Suspended} />
    </main>
  );
};

export default Home;
