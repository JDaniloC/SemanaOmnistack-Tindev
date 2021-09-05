import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from 'services/api';
import logo from 'assets/logo.svg';
import like from 'assets/like.svg';
import dislike from 'assets/dislike.svg';

export default function Main({ match, location }) {
    const [users, setUsers] = useState([]);
    const [avatar, setAvatar] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        async function loadUsers() {
            const { data } = await api.get("/devs/", {
                headers: {
                    user: match.params.id
                }
            });

            setUsers(data);
        }

        loadUsers();
        setAvatar(location.state.avatar);
        setUsername(location.state.username);

    }, [match.params.id, location.state])

    async function handleLike(event) {
        const id = event.target.getAttribute("data-id");
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });
    
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(event) {
        const id = event.target.getAttribute("data-id");
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <div className="user-container">
                <img src = {avatar} alt = "User Avatar" />
                <h2> {username} </h2>
            </div>
            
            <Link to="/"> 
                <img src = {logo} alt = "TinDev" />
            </Link>
            { users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key = {user._id}>
                            <img src = {user.avatar} alt={user.name} />
                            <footer>
                                <strong> {user.name} </strong>
                                <p> {user.bio} </p>
                            </footer>

                            <div className="buttons">
                                <button 
                                    type = "button" 
                                    data-id = {user._id}
                                    onClick = {handleDislike}
                                >
                                    <img src={dislike} alt="Dislike"/>
                                </button>
                                <button 
                                    type = "button" 
                                    data-id = {user._id}
                                    onClick = {handleLike}
                                >
                                    <img src={like} alt="like"/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : 
            <p className="empty">
                Acabou...
            </p>}
        </div>
    )
}