export function Landing({ resolvedUrl }: { resolvedUrl: string }) {
  return <div>ResolvedUrl : {resolvedUrl}</div>;
}

export const getServerSideProps = async (ctx: any) => {
  console.log("getServerSideProps in router", ctx.resolvedUrl);

  return {
    props: {
      resolvedUrl: ctx.resolvedUrl,
    },
  };
};

export default Landing;
