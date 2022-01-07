import { connectToDb } from 'lib/mongodb';

function ProfilePage({ profileId }) {
  return (
    <div>
      <h3>Hello {profileId}</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { profileId } = context.query;

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ id: profileId })
    .toArray();

  console.log(response);

  return {
    props: { profileId },
  };
}

export default ProfilePage;
