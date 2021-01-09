import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Drawer, Menu, MenuItem, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {ContactSupport, FileCopy, Group, Home, Widgets} from "@material-ui/icons";
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Layout(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const open = Boolean(anchorEl);
    let history = useHistory();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => setMenuOpen(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => {
                                handleClose();
                                history.push('/meu-perfil');
                            }}>
                                Meu Perfil
                            </MenuItem>
                            <MenuItem onClick={() => {
                                handleClose();
                                history.push('/login');
                            }}>
                                Sair
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer open={menuOpen} anchor={"left"} onClose={() => setMenuOpen(false)}>
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText primary={"Página Inicial"}/>
                    </ListItem>
                    <ListItem button onClick={() => history.push('/vagas')}>
                        <ListItemIcon><Widgets/></ListItemIcon>
                        <ListItemText primary={"Vagas"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><FileCopy/></ListItemIcon>
                        <ListItemText primary={"Relatórios"}/>
                    </ListItem>
                    <ListItem button onClick={() => history.push('/tutorial')}>
                        <ListItemIcon><ContactSupport/></ListItemIcon>
                        <ListItemText primary={"Tutorial"}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon><Group/></ListItemIcon>
                        <ListItemText primary={"Contatos"} />
                    </ListItem>
                </List>
            </Drawer>

            {props.content}
        </div>
    )
}