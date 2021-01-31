import * as React from 'react';

import { I18n } from 'react-redux-i18n';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

import ContentPaper from './ContentPaper';

export default function AnalyticsStartPage(props: {
    primaryButtonClick: () => void;
}): JSX.Element {
    const classes = useStyles();
    return (
        <ContentPaper>
            <Container maxWidth="sm" className={classes.heroContent}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom={true}
                >
                    Lumi Analytics
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph={true}
                >
                    {I18n.t('analytics.startPage.welcomeMessage')}{' '}
                    <a
                        href="https://lumieducation.gitbook.io/lumi/v/en/analytics/what-is-lumi-analytics"
                        target="_blank"
                        rel="noreferrer"
                    >
                        learn more
                    </a>
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container={true} spacing={2} justify="center">
                        <Grid item={true}>
                            <Button
                                id="editor-startpage-primaryButton"
                                onClick={() => {
                                    props.primaryButtonClick();
                                }}
                                variant="contained"
                                color="primary"
                                startIcon={<InsertDriveFileOutlinedIcon />}
                            >
                                {I18n.t('analytics.startPage.open')}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ContentPaper>
    );
}

const useStyles = makeStyles((theme: Theme) => {
    return {
        card: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        cardContent: {
            flexGrow: 1
        },
        cardGrid: {
            paddingBottom: theme.spacing(8),
            paddingTop: theme.spacing(8)
        },
        cardMedia: {
            paddingTop: '56.25%' // 16:9
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6)
        },
        heroButtons: {
            marginTop: theme.spacing(4)
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6)
        },
        icon: {
            marginRight: theme.spacing(2)
        }
    };
});
