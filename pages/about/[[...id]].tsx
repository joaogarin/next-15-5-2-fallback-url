export function About({ resolvedUrl }: { resolvedUrl: string }) {
  return <div>ResolvedUrl: {resolvedUrl}</div>;
}

export const getServerSideProps = async (ctx: any) => {
  console.log("getServerSideProps in about", ctx.resolvedUrl);

  return {
    props: {
      resolvedUrl: ctx.resolvedUrl,
    },
  };
};

export default About;
