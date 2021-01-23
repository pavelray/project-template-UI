import React from 'react';
import { Button, Checkbox, 
    Divider, 
    FormControl, 
    FormControlLabel, 
    Grid, 
    InputAdornment, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField, 
    Typography 
} from '@material-ui/core';
import MUIRichTextEditor from 'mui-rte'
import { FromContainer} from './manage-product-form.styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

const ManageProductForm = () => {
    const defaultTheme = createMuiTheme();

    Object.assign(defaultTheme, {
        overrides: {
            MUIRichTextEditor: {
                editor: {
                    borderBottom: "1px solid gray",
                    minHeight: '60px' 
                }
            },
        }
    });

    const [state, setState] = React.useState({
        outOfStock: false,
        featureProduct: false,
        showDiscount: false,
        category: 0,
        name: '',
        basePrice: '',
        discount: '',
        description: ''
      });

    const checkBoxChange = (event) => {
        setState({[event.target.name]: event.target.checked });
    };

    const handleChange = (event) => {
        setState({[event.target.name]: event.target.value});
    };

    return(
        <FromContainer>
            <Typography variant="h5" component="h2">
                Product Form
            </Typography>
            <br/>
            <Divider />
            <form noValidate autoComplete="off" className="form-content">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl  className="select-category">
                            <InputLabel id="category">Select Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category-select"
                                name="category"
                                value={state.category}
                                onChange={handleChange}
                            >
                            <MenuItem value={0}>Select Category</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="product-name" label="Product Name"
                            value={state.name} 
                            className="form-input"  
                            onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="base-price" label="Base Price"  className="form-input"
                            value={state.basePrice}
                            onChange={handleChange} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">&#8377;</InputAdornment>,
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="discount" label="Discount"  className="form-input"
                            value={state.discount}
                            onChange={handleChange} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">%</InputAdornment>,
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.outOfStock}
                                onChange={checkBoxChange}
                                name="outOfStock"
                                color="primary"
                            />
                            }
                            label="Out of Stock"
                        />
                         <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.featureProduct}
                                onChange={checkBoxChange}
                                name="featureProduct"
                                color="primary"
                            />
                            }
                            label="Feature Product"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.showDiscount}
                                onChange={checkBoxChange}
                                name="showDiscount"
                                color="primary"
                            />
                            }
                            label="Show Discount"
                        />        
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                        <Typography variant="h6" component="h2">
                            Product Description
                        </Typography>
                        
                        <MuiThemeProvider theme={defaultTheme}>
                            <MUIRichTextEditor
                                controls={["title", "bold", "italic", "underline", "numberList", "bulletList"]}
                                inlineToolbar={true}
                                label="Type here.. "
                            />
                        </MuiThemeProvider> 
                    </Grid>
                    <Grid item xs={12} className="btn-container">
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<ClearIcon />}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>

                    </Grid>
                </Grid>
                
            </form>
        </FromContainer>
    )
}

export default ManageProductForm;