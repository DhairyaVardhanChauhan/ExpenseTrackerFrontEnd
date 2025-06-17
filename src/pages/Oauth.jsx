const Oauth = () => {
  const client_id =
    "336948655730-lsetv612mqftetvbpbb1deheqv3sebmi.apps.googleusercontent.com";
  const redirect_uri = "http://localhost:9898/auth/v1/oauth/callback";

  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_uri}&response_type=code&client_id=${client_id}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&access_type=offline`}
        className="flex items-center gap-3 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition duration-300"
      >
        <span className="font-medium">Sign in with Google</span>
      </a>
    </div>
  );
};

export default Oauth;
