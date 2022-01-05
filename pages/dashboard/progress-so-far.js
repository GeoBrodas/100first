function ProgressPage() {
  return <div></div>;
}

// getServerSideProps -> do authentication as well
export async function getServerSideProps(context) {
  return {
    props: { words: ['Hello'] },
  };
}

export default ProgressPage;
