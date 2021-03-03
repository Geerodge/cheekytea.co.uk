import styled from 'styled-components';

const NavStyles = styled.nav`

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    li:nth-child(1), li:nth-child(2), li:nth-child(4), li:nth-child(5) {
        font-weight: 600;
    }
    li:nth-child(3){
        display: none;
    }
}
nav ul li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
    font-size: 2rem;
    color: var(--black);
    text-decoration: none;
    text-transform: uppercase;
    &:visited {
        text-decoration: none;
        color: var(--black);
    }
    &:hover {
        color: var(--green);
        background-color: #f4f4f4;
    }
    &[aria-current="page"] {
        color: var(--green);
        &:hover {
            color: var(--black);
        }
    }
}
img {
    max-width: 100%;
}

/* Nav Menu */
.menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
    margin-bottom: 20px;
    a {
        border-right: none;
    }
}

/* Nav Menu Icon (Hamburger) */
.menu-icon {
    cursor: pointer;
    display: block;
    float: right;
    padding: 7% 20px;
    position: relative;
    user-select: none;
}
.menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
}
.menu-icon .navicon:before,
.menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}
.menu-icon .navicon:before {
    top: 5px;
  }
.menu-icon .navicon:after {
    top: -5px;
}

/* Nav Menu Button */
.menu-btn {
    display: none;
}
.menu-btn:checked ~ .menu {
    max-height:260px;
}
.menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
}
.menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
}
.menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
}
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
}

.logo-nav {
    padding: 0;
    float: left;
    max-width: 70%;
}

@media only screen and (min-width: 768px) {
    nav ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        text-align: center;
        li a {
            padding: 20px 30px;
        }
        li a:hover {
            background-color: var(--white);
        }
    }
    .outer-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            ". logo-nav logo-nav .";
    }
    .logo-nav { 
        grid-area: logo-nav;
        align-items: center;
        text-align: center;
        margin: 0 auto;
    }
    .menu {
        max-height: none;
        margin: 0 auto;
    }
    .menu-icon {
        display: none;
    }
}

@media only screen and (min-width: 1000px) {
    nav ul {
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        li {
            float: left;
        }
        li a {
            padding: 20px 30px;
        }
        li:nth-child(3) {
            display: block;
        }
        li:nth-child(3) a {
            &:hover {
                background-color: var(--white);
            }
        }
    }
    .logo-nav {
        display: none;
    }
}
`;

export default NavStyles;