import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';


export default function Html_phraseTags() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Phrase Tags"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div className="classes.root">
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h2>What is <b>HTML</b>?</h2>
                <p><b>HTML</b> stands for <b>Hyper Text Markup Language</b>, which is the most widely used language on Web to develop web pages. <b>HTML</b> was created by Berners-Lee in late <b>1991</b> but <b>"HTML 2.0"</b> was the first standard <b>HTML</b> specification which was published in <b>1995</b>. <b>HTML 4.01</b> was a major version of <b>HTML</b> and it was published in late 1999. Though <b>HTML 4.01</b> version is widely used but currently we are having <b>HTML-5</b> version which is an extension to <b>HTML 4.01</b>, and this version was published in <b>2012</b>.</p>
                <br />
                <h2>Why to Learn <b>HTML</b>?</h2>
                <p>Originally, <b>HTML</b> was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.<br></br>

                <b>HTML</b> is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning HTML:</p>
                <ul>
                    <li>
                    <b>Create Web site </b>- You can create a website or customize an existing web template if you know HTML well.
                    </li>
                    <li>
                    <b>Become a web designer</b> - If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.
                    </li>
                    <li>
                    <b>Understand web</b> - If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield best results
                    </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} >
                  <CodeExamples value={`<!DOCTYPE html>
<html>
<head>
    <title>This is document title</title>
</head>	
<body>
    <h1>This is a heading</h1>
    <p>Hello World!</p>
</body>	
</html>`
                                        } />
              </Grid>
          </Grid>
        
      </div>
      <div>
          <Link to='/Html_overview'>
            <span style={{padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Previous</span>
          </Link> 
          <Link to='/Html_basicTags' >
          <span style={{margin: '2px 30vw', padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Next</span>
          </Link>
      </div>
    </Fragment>
  );
}