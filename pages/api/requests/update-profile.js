async function handler(req, res) {
  if (req.method === 'POST') {
    //  protect the API routes from unauthenticated users
    if (req.query.API_ROUTE_KEY !== process.env.NEXT_PUBLIC_API_ROUTE_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // extract data from request body
    const { name, bio, githubUsername, twitterUsername, portfolio, imageUrl } =
      req.body;
  }
}

export default handler;
