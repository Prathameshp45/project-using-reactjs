
import React, {useContext,createContext,useState } from 'react';

const UserContext = createContext();

const UserContextExample = () => {
    const [user, setUser] = useState({ name: 'prathamesh patil ', isLoggedIn: true });
    return (
        <div>
            <UserContext.Provider value={{ user, setUser }} >
                <Navbar />
                <Dashboard/>
            </UserContext.Provider>


        </div>
    )
    function Navbar() {
        const { user } = useContext(UserContext)
        return (
            <div className='container bg-light ' style={{ height: '100px' }}>
                <h3>username: {user.name}</h3>
            </div>
        )
    }

    function Dashboard() {
        const { setUser } = useContext(UserContext)
        return (
            <div>
                <p> welcome to our website </p>
                <button onClick={() => setUser({name:'', isLoggedIn: false })} className='btn btn-danger'>logout</button>
            </div>
        )
    }
}

export default UserContextExample






