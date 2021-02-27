import styled from 'styled-components';

const NavStyles = styled.nav`

li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
}
li a:hover,
.menu-btn:hover {
    background-color: #f4f4f4;
}
li:nth-child(3){
    display: none;
}

/* menu */
.menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
}

/* menu icon */
.menu-icon {
    cursor: pointer;
    display: block;
    float: right;
    padding: 28px 20px;
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

/* menu btn */
.menu-btn {
    display: none;
}
.menu-btn:checked ~ .menu {
    max-height: 240px;
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

.logo {
    font-weight: bold;
    padding: 17px 20px;
    float: left;
}

/* 48em = 768px */
@media (min-width: 48em) {
    nav li {
        float: left;
    }
    nav li a {
        padding: 20px 30px;
    }
    .menu {
        clear: none;
        float: right;
        max-height: none;
    }
    .menu-icon {
        display: none;
    }
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
}
li:nth-child(1), li:nth-child(2), li:nth-child(4), li:nth-child(5) {
    font-weight: 600;
}
img {
    max-width: 100%;
}
a {
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
    }
    &[aria-current="page"] {
        color: var(--green);
        &:hover {
            color: var(--black);
        }
    }
}
`;

export default NavStyles;