import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assert/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer className='header'>
        <LogoContainer className='logo-container' to= "/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer className='options'>
            <OptionLink className="option" to="/shop">
                SHOP
            </OptionLink>
            <OptionLink className="option" to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionDiv>
                :
                <OptionLink className='option' to="/signin">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ?
            null :
            <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);