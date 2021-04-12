
import React, {useEffect} from 'react';
import IconButton from "@material-ui/core/IconButton";
import {Badge} from "@material-ui/core";
import {fetchProductsInCart} from "../../reducks/users/operations";
import {useDispatch, useSelector} from "react-redux";
import {getProductsInCart, getUserId} from "../../reducks/users/selectors";
import {push} from "connected-react-router"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {db} from '../../firebase/index'
import MenuIcon from "@material-ui/icons/Menu";

const HeaderMenus = (props) => {
    return (
        <>
            <IconButton>
                <Badge badgeContent={3} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <IconButton>
                <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HeaderMenus;