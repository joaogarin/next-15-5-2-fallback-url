export default function Home() {
  return <div>Homepage</div>;
}

export const getServerSideProps = (ctx: any) => {
  console.log("getServerSideProps in index");
  return {
    props: {},
  };
};
