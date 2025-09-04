export default function Landing() {
  return <div>Landing</div>;
}

export const getServerSideProps = async (ctx: any) => {
  console.log("getServerSideProps in router", ctx.resolvedUrl);

  return {
    redirect: {
      destination: `/from-router`,
      permanent: false,
    },
    notFound: true,
    props: {},
  };
};
