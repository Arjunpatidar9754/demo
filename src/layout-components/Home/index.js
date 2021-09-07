import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// import { PageTitle } from '../../layout-components';
import { Link } from 'react-router-dom';
import './index.css';
import home_logo1 from '../../assets/images/home_logo1.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      
      
      borderRadius: '20px',
      paddingLeft: '10px',
      paddingTop: '10px',
      paddingBottom: '40px',
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(55),
        height: theme.spacing(40),
      },
    },
    courseHeading: {
      color: '#010d3d',
      textDecoration: 'underline',
      textDecorationColor: 'red',
      paddingTop: '30px',
    },
  }));
export default function Home() {

  const classes = useStyles();

  return (
    <Fragment>
      
      <section className='home_intro'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h3>WELCOME TO</h3>
            <h1><b>LAMP</b> Learning</h1>
            <p>A perfect <b>E-Learning</b> platform<br />
            for Begginers<br />
            <b>Learn "How To Code ?"</b></p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={home_logo1} alt='group logo' />
          </Grid>
        </Grid>
        
      </section>
      <section className='courseBg'>
        <h1 align="center" className={classes.courseHeading}>Our Courses</h1>
        <div className={classes.root}>
          <Link to='/html' className={classes.root}>
            <Paper elevation={3} className="paper">
              <br />
              <h2 align='center'>&lt; HTML /&gt;</h2>
              <p>This course contains easy to read <b>Documentation</b> with proper <b>Code Examples</b></p>
              <p>We will also provide <b>Try it yourself</b> option.</p>
            </Paper>
          </Link>
          
          <Link to='/Css_intro' className={classes.root}>
            <Paper elevation={3} className="paper">
              <br />
              <h2 align='center'>* CSS *</h2>
              <p>This course contains easy to read <b>Documentation</b> with proper <b>Code Examples</b></p>
              <p>We will also provide <b>Try it yourself</b> option.</p>
            </Paper>
          </Link>
          <Link to='/Javascript_intro' className={classes.root}>
            <Paper elevation={3} className="paper">
              <br />
              <h2 align='center'>{`{ JavaScript }`}</h2>
              <p>This course contains easy to read <b>Documentation</b> with proper <b>Code Examples</b></p>
              <p>We will also provide <b>Try it yourself</b> option.</p>
            </Paper>
          </Link>
          <Link to='/C#_intro' className={classes.root}>
            <Paper elevation={3} className="paper">
              <br />
              <h2 align='center'>C#</h2>
              <p>This course contains easy to read <b>Documentation</b> with proper <b>Code Examples</b></p>
              <p>We will also provide <b>Try it yourself</b> option.</p>
            </Paper>
          </Link>
          <Link to='/C++_intro' className={classes.root}>
            <Paper elevation={3} className="paper">
              <br />
              <h2 align='center'>C++</h2>
              <p>This course contains easy to read <b>Documentation</b> with proper <b>Code Examples</b></p>
              <p>We will also provide <b>Try it yourself</b> option.</p>
            </Paper>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
