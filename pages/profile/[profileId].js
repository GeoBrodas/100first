function ProfilePage() {
  return (
    <div>
      <h3>Hello Profile</h3>
    </div>
  );
}

getStaticPaths;
export async function getStaticPaths() {
  return {
    paths: [
      { params: { profileId: '1' } },
      { params: { profileId: '2' } },
      { params: { profileId: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: { words: ['Hello'] },
  };
}

export default ProfilePage;
