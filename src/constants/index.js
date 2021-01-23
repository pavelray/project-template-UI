import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssessmentIcon from '@material-ui/icons/Assessment';
export const AdminMenu = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: DashboardIcon
    },
    {
        name: 'Manage Product',
        url: '/admin/product',
        icon: StoreIcon
    },
    {
        name: 'Manage Order',
        url: '/admin/order',
        icon: LocalShippingIcon
    },
    {
        name: 'Reports',
        url: '/admin/reports',
        icon: AssessmentIcon
    }
]