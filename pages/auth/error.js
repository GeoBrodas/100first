import { useRouter } from 'next/router';

function ErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  const errors = {
    Signin: 'Try signing with a different account.',
    OAuthSignin: 'Try signing with a different account.',
    OAuthCallback: 'Try signing with a different account.',
    OAuthCreateAccount: 'Try signing with a different account.',
    EmailCreateAccount: 'Try signing with a different account.',
    Callback: 'Try signing with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  };

  const errorMessage = error && (errors[error] ?? errors.default);

  return (
    <div className="h-screen grid place-content-center">
      {error ? (
        <p className="text-white text-xl font-semibold">{errorMessage}</p>
      ) : (
        <p className="text-white text-xl font-semibold">
          Something went wrong{' '}
        </p>
      )}
    </div>
  );
}

export default ErrorPage;
