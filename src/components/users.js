// import React functions
import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// import data from API
const data = 'https://course-api.com/react-tabs-project'

const Users = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] =  useState([]);
    const [value,  setValue] = useState(0);

    // fetch data and get it in json format
    const fetchUsers = async () => {
        const response = await fetch(data);
        const newUsers = await response.json();
        setUsers(newUsers);
        setLoading(false);
    }

    useEffect(()=> {
        fetchUsers();
    }, [])

    // why if loading is removed I get error?
    if (loading) {
        return (
          <section className='section loading'>
            <h1>Loading...</h1>
          </section>
        )
      }
   
    // why variables like that?
    const { company, dates, duties, title } = users[value]
    return (
        <div className='jobs-center'>
            <div className="btn-container">
                {users.map((user, index)=> {
                    return (
                        <button
                        key={user.id}
                        onClick={() => setValue(index)}
                        className={`job-btn ${index === value && 'active-btn'}`}
                        >{user.company}</button>
                    );
                })}
            </div>
            <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                {duties.map((duty, index) => {
                    return (
                        <div key={index} className="job-desc">
                            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                            <p>{duty}</p>
                        </div>
                    )
                })}
                <button type="button" className="btn">More Info</button>
                </article>
        </div>
    )
}
  
  export default Users;