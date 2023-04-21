import { Link, json, useNavigate } from "react-router-dom"
import "./login.css"
import { useState } from "react"
import axios from "axios"
import Error from "../error/Error"

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })


  const handlechange = (e) => {

    const { name, value } = e.target

    setData((e) => ({ ...e, [name]: value }))

  }
  const UserLogin = async () => {

    try {

      const userData = (await axios.post("http://localhost:5001/api/login", data)).data

      localStorage.setItem("currentUser", JSON.stringify(userData))

      navigate("/home")


    } catch (response) {
      setError(true)

      setErrorMessage(response.response.data.message);
    }
  }


  async function handleSubmit(e) {

    e.preventDefault()

    UserLogin()
  }


  return (
    <div className="login_page">
      <div className="container">
        <div className="login_content">
          <div className="left_login_content" style={{ backgroundImage: "url('https://images.pexels.com/photos/6156517/pexels-photo-6156517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", }}></div>
          <div className="right_login_content">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username / Email" value={data.email} onChange={handlechange} name="email" id="email" required maxLength={60} />
              <input type="password" placeholder="Password" value={data.password} onChange={handlechange} name="password" id="Password" required maxLength={8} />
              <input type="submit" placeholder="Submit" name="txtSubmit" id="LoginSubmit" className="loginSbutmit" />
              {error && <Error message={errorMessage} />}
            </form>
            <p>If you don't have account? <Link to={'/register'}>Sign-up Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login