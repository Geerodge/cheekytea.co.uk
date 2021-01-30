import styled from 'styled-components';

const NavStyles = styled.nav`
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        text-align: center;
    }
    li:nth-child(1), li:nth-child(2), li:nth-child(4), li:nth-child(5) {
        font-weight: 600;
        /* &:hover {
            transform: rotate(2deg);
        } */
    }
    img {
        max-width: 100%;
    }
    a {
        font-size: 2.5rem;
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
            /* background-image: linear-gradient(120deg, var(--green) 0%, var(--white) 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.2em;
            background-position: 0 105%;
            transition: background-size 0.25s ease-in; */
            &:hover {
                color: var(--black);
            }
        }
    }
`;

export default NavStyles;