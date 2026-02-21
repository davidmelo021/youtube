import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin} = useContext(UserContext)

  return (
    <>
      <div>Login</div>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        value={password}
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleLogin(email,password)}>Login</button>
    </>
  )
}

export default Login;