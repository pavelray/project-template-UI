
import React from 'react';
import ManageProductForm from '../../../components/manager-product-form/manage-product-form.component';
import { Button, Paper } from '@material-ui/core';

import ReceiptIcon from '@material-ui/icons/Receipt';
import CategoryIcon from '@material-ui/icons/Category';
import { ManageProdcutContiner } from './manage-product.styles';

const ManageProduct = () => {

    return(
        <ManageProdcutContiner>
            <Paper className="manage-product-toolbar">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<CategoryIcon />}
                >
                    New Category
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<ReceiptIcon />}
                >
                    New Product
                </Button>
            </Paper>
            <br/>
            <ManageProductForm />
        </ManageProdcutContiner>
    )
}

export default ManageProduct;