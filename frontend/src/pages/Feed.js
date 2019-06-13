import React, { Component } from 'react';

import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>user.name</span>
                            <span className="place">user.place</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/fairtek.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>980 curtidas</strong>
                        <p>Um post
                            <span>#react</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>user.name</span>
                            <span className="place">user.place</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/fairtek.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>980 curtidas</strong>
                        <p>Um post
                            <span>#react</span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;