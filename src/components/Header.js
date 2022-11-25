import React from 'react';
import { Link } from "react-router-dom";
import HomeButton from './HomeButton';

export default function Header() {
  return (
    <div>
        <div>
            <HomeButton />
        </div>
        <div>
        <Link to="/">Visit Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}
