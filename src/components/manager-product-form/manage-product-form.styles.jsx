import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const FromContainer = styled(Paper)`
    padding: 2rem;

    .form-content{
        margin-top: 2rem;
    }

    .text-area-description{
        margin-top: 1rem;
    }

    .select-category, .form-input{
        min-width: 50%;
    }
    
    .btn-container{
        display: flex;
        justify-content: space-between;
    }

`