import React, { Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';

const ArticleTitle = styled(Typography)`
    padding-top: 24px;
    padding-bottom: 12px;
`

const ArticleDescription = styled(Typography)`
    padding-bottom: 12px;
`

const ContentBody = (props) => {
    return (
        <div>
            {props.articles.map((article, index) => {
                return (
                    <Fragment key={article.id}>
                        <ArticleTitle variant="h4">
                            {article.title}
                        </ArticleTitle>
                        <ArticleDescription variant="body1">
                            {article.description}
                        </ArticleDescription>
                        {(index + 1) !== props.articles.length && <Divider />}
                    </Fragment>
                );
            })
            }
        </div>
    );
};

export default ContentBody;