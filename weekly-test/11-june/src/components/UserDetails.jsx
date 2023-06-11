import { useState } from 'react'
import UserDetailsTable from './UserDetailsTable'

const UserDetails = () => {

  const [show, setShow] = useState("All");

  return (
    <div className='user-detail-container'>
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nulla vitae, ullam necessitatibus rem, reiciendis ducimus tempora possimus dolor velit! Distinctio harum quam dolor delectus exercitationem molestias, ullam veritatis qui modi expedita, animi architecto velit itaque nobis dignissimos aspernatur vitae quasi! Dolorem rem amet corporis, saepe praesentium officia aperiam molestias vitae provident obcaecati enim maxime ad, doloremque assumenda, nisi dolor ipsa dolorum eveniet facilis nam voluptatibus. Nostrum libero sed hic facere vel, suscipit inventore labore soluta repellendus, doloribus cum tempora! Odio culpa quisquam facilis veniam, incidunt esse hic doloribus architecto quidem ipsam vel, laudantium dolorem voluptate sint, iure magnam!</p>
        <div className='dropdown-list'>

            <input type="radio" name="gender" id="all" value="all" 
              onChange={e => setShow(e.target.value)} 
            />
            <label htmlFor="all">All</label>

            <input type="radio" name="gender" id="male" value="male" 
              onChange={e => setShow(e.target.value)} 
            />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" 
              onChange={e => setShow(e.target.value)} 
            />
            <label htmlFor="female">Female</label>

        </div>
        <UserDetailsTable sort={show} />
    </div>
  )
}

export default UserDetails