import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const ContentBody = (props) => {
    return (
        <Typography variant="h4">
            {props.articles[0].title}
        </Typography>
    );
};

export default ContentBody;