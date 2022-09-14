import React, {useState} from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Feed as News, Home as Home, Person as Person} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {PATH} from '../../common/constants';

export const NavList = ({open}: NavListPropsType) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const listItem = [
        {id: 1, name: 'Main', icon: <Home sx={{color: 'white'}}/>, route: PATH.MAIN},
        {id: 2, name: 'Profile', icon: <Person sx={{color: 'white'}}/>, route: PATH.PROFILE},
        {id: 3, name: 'News', icon: <News sx={{color: 'white'}}/>, route: PATH.NEWS},
    ]

    const setActiveHandler = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div>
            <List>
                {
                    open && listItem.map((item, index) => {
                        const activeClass = activeIndex === index;
                        return (
                            <ListItem key={item.id} disablePadding sx={{
                                display: 'flex',
                                color: 'white',
                                opacity: `${activeClass ? '1' : '0.7'}`,
                                backgroundColor: `#2e82d6`,
                                transition: 'background-color 200ms ease',
                                height: '64px',
                                ":hover": {
                                    opacity: '1',
                                },
                            }
                            }>
                                <Link to={item.route}
                                      style={{textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                                    <ListItemButton onClick={() => setActiveHandler(index)}
                                                    sx={{backgroundColor: 'transparent !important',}}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} sx={{opacity: open ? 1 : 0}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )
                    })}
            </List>
        </div>
    );
};

type NavListPropsType = {
    open: boolean
}