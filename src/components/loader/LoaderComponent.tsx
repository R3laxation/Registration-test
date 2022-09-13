import React from 'react';
import {Stack, CircularProgress} from '@mui/material';

export const LoaderComponent = () => {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="primary" />
        </Stack>
    );
};

