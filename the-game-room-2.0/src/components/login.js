const Login = () => {
  return (
    <div>
      <h2>Sign up</h2>
      <form action="/auth" method="post">
        <label for="username">
          <i class="fas fa-user"></i>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="sign-username"
        />

        <label for="username">
          <i class="fas fa-at"></i>
        </label>
        <input type="text" name="email" placeholder="Email" id="sign-email" />

        <label for="password">
          <i class="fas fa-lock"></i>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="sign-password"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Login;
