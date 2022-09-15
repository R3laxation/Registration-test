import * as React from 'react';
import {CSSObject, styled, Theme} from '@mui/material/styles';
import {Box, Drawer as MuiDrawer} from '@mui/material';
import {Header} from "../header/Header";
import {NavList} from '../navlist/NavList';
import {Outlet} from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
    overflowX: 'hidden',
    background: '#2e82d6',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    borderRight: 'none',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const Layout = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Header open={open} handleDrawer={handleDrawer}/>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                    </DrawerHeader>
                    <NavList open={open}/>
                </Drawer>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <DrawerHeader/>
                </Box>
            </Box>
            <Outlet/>
        </>
    );
};