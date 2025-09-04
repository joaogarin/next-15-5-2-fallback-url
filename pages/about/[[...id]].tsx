export default function About(ctx: any) {
  return <div>About</div>;
}

export const getServerSideProps = async (ctx: any) => {
  console.log("getServerSideProps in about");
  return {
    props: {},
  };
};
