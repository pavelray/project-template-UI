import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, withRouter } from 'react-router-dom';
import ManageProduct from '../ManageProduct/manage-product.component';
import { useStyles } from './admin-home.styles'
import Sidebar from '../SideBar/side-bar.component';
import HeaderAppBar from '../AppBar/app-bar.component';

function AdminHomePage(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen)};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderAppBar handleDrawerToggle={handleDrawerToggle}/>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
            <Route path='/admin/product'  component={ManageProduct} />
        </Switch>
      </main>
    </div>
  );
}

AdminHomePage.propTypes = {
  window: PropTypes.func,
};

export default withRouter(AdminHomePage);