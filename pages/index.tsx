const Home = () => {
  return <div>Enter</div>;
};

export default Home;
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: 'https://dhal.dev',
    },
    props: {},
  };
}
