import React from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Sucess from '../success/Sucess'
import Error from '../error/Error'

const Register = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState()
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] =useState("")
  const [data, setData] = useState({

    name: "",
    password: "",
    email: ""
  })


  const handleChange = (e) => {

    const { name, value } = e.target

    setData((e) => ({ ...e, [name]: value }))

  }
  const UserRegister = async () => {

    try {

      const userData = (await axios.post("http://localhost:5001/api/register", data)).data
      setSuccess(true)

      navigate("/")


    } catch (res) {
      setError(true)
      setData({
        name: "",
        password: "",
        email: ""
      })
      setErrorMessage(res.response.data.message)
    }
  }


  async function handlesubmit(e) {

    e.preventDefault()

    UserRegister()
  }

  return (
    <div className="login_page">
      <div className="container">
        <div className="login_content">
          <div className="left_login_content" style={{ backgroundImage: "url('https://images.pexels.com/photos/6156517/pexels-photo-6156517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", }}></div>
          <div className="right_login_content">
            <h2>Register Form</h2>
            <form onSubmit={handlesubmit}>
              <input type="text" placeholder="Name" name="name" value={data.name} onChange={handleChange} id="name" maxLength={60} required />
              <input type="text" placeholder="Username / Email" name="email" value={data.email} onChange={handleChange} id="Username" required maxLength={60} />
              <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} id="Password" required maxLength={8} />
              <input type="submit" placeholder="Submit" name="txtSubmit" id="LoginSubmit" className="loginSbutmit" />
              {
                error && <Error message={errorMessage} />
              }

              {
                success && <Sucess message={"registation succesfully"} />
              }

            </form>
            <p>If you alreay have account? <Link to={'/'}>Login</Link></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register