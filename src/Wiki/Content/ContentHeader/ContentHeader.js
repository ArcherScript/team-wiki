import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from '@material-ui/core';

const PageDescription = styled(Typography)`
    padding-top: 12px;
    padding-bottom: 12px;
`

const ContentHeader = (props) => {
    const { title, description } = props;
    return (
        <>
            <Typography variant="h2">
                {title}
            </Typography>
            <PageDescription variant="h5">
                {description}
            </PageDescription>
            <Divider />
        </>
    );
};

export default ContentHeader;