import {IconButton, Typography, Toolbar, Button, Box} from '@mui/material';
import AppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar/AppBar';
import * as React from 'react';
import {Menu} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";
import {PATH} from "../../common/constants";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const HeaderBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(() => (`
   z-index: 1201;
   background: #2e82d6;
   height: 70px;
   box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;
   `
));

const Title = styled(Typography)`
  color: white;
  font-size: 24px;
  display: inline-block;
`

export const Header = ({open, handleDrawer}: HeaderPropsType) => {

    return (
        <HeaderBar open={open} >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{marginRight: 2, color: 'white'}}
                    >
                        <Menu />
                    </IconButton>
                    <Title>Secret company</Title>
                </Box>
                <Link to={PATH.AUTH} style={{textDecoration:'none'}}>
                    <Button color="primary" variant="outlined" sx={{color: 'white', border: '1px solid white'}}>Войти</Button>
                </Link>

            </Toolbar>
        </HeaderBar>
    );
};

type HeaderPropsType = {
    open: boolean
    handleDrawer: () => void
}