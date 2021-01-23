import React from 'react';
import AppDetails from '../../../manifest';
import { useStyles } from './side-bar.styles';
import { AdminMenu } from '../../../constants';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';

const Sidebar = (props) =>{
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;
    const renderSideDrawer = (
        <div>
            <div className={classes.drawerHeader}>
              <h1>{AppDetails.appName}</h1>
            </div>
            <Divider />
            <List>
                {AdminMenu.map((menuItem, index) => (
                <Link to={`${menuItem.url}`} key={`menu-id-${index}`}>
                  <ListItem button>
                      <ListItemIcon><menuItem.icon/></ListItemIcon>
                      <ListItemText primary={menuItem.name} />
                  </ListItem>
                </Link>
                ))}
            </List>
        </div>
      );
    
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper}}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          >
            {renderSideDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open
          >
            {renderSideDrawer}
          </Drawer>
        </Hidden>
      </nav>
    )
}

export default Sidebar;