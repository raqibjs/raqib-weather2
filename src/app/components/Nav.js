import React from 'react';
import { Link, IndexLink } from 'react-router';


export default class Nav extends React.Component {

    onSearch(e){
        e.preventDefault();
        alert('Wire it up');
    }

    render() {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className="menu">
                        <li className="menu-text">Get Weather</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                            Home
                    </IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About </Link></li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link></li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type='search' placeholder='Search Weather' />
                            </li>
                            <li>
                                <input type='submit' className='button' value='Get Weather' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}