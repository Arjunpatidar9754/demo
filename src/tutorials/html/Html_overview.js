import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';

import { PageTitle } from '../../layout-components';
import { Link } from 'react-router-dom';
import './html_css.css'

export default function Html_overview() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Overview"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div id='overview' style={{fontSize: '1.25em'}}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p>HTML stands for <b>H</b>ypertext <b>M</b>arkup <b>L</b>anguage, and it is the most widely used
                    language to write Web Pages.<br />
                </p>
                <ul>
                  <li> <b>Hypertext</b> refers to the way in which Web pages (HTML documents) are linked
                    together. Thus, the link available on a webpage is called Hypertext.</li>

                  <li>As its name suggests, HTML is a Markup Language which means you use HTML to
                    simply "mark-up" a text document with tags that tell a Web browser how to
                    structure it to display.</li>
                </ul>

                <p>
                  Originally, HTML was developed with the intent of defining the structure of
                  documents like headings, paragraphs, lists, and so forth to facilitate the
                  sharing of scientific information between researchers.
              
                <br />
                  Now, HTML is being widely used to format web pages with the help of
                  different tags available in HTML language.
                </p>

                <table border="1">
                  <tr>
                      <th>s.no</th>
                      <th>Tag & Description</th>


                  </tr>
                  <tr>
                      <td>1</td>
                      <td><b>&lt;!DOCTYPE...&gt;</b><br />
                          This tag defines the document type and HTML version.</td>



                  </tr>
                  <tr>

                      <td>2</td>
                      <td><b>

                      &lt;head&gt;
                          </b><br />
                          This tag represents the document's header which can keep other
                          HTML tags like title,
                          link etc.</td>


                  </tr>
                  <tr>


                      <td>3</td>
                      <td><b>
                      &lt;html&gt;
                          </b><br />
                          This tag encloses the complete HTML document and mainly
                          comprises of document header which is represented by

                          head...head and document body which is represented by

                          body.../body tags.
                      </td>

                  </tr>
                  <tr>


                      <td>4</td>
                      <td><b>
                      &lt;title&gt;
                          </b><br />
                          The title tag is used inside the

                          head tag to mention the document title.</td>
                  </tr>
                  <tr>


                      <td>5</td>
                      <td><b>
                      &lt;body&gt;
                          </b><br />
                          This tag represents the document's body which keeps other HTML
                          tags like h1, div, p etc.</td>
                  </tr>
                  <tr>


                      <td>6</td>
                      <td><b>
                      &lt;h1&gt;
                          </b><br />
                          This tag represents the heading.</td>
                  </tr>
                  <tr>


                      <td>7</td>
                      <td><b>
                      &lt;p&gt;
                          </b><br />
                          This tag represents the paragraph.</td>
                  </tr>
                </table><br /> <br />
                <p>
                To learn HTML, you will need to study various tags and understand how they behave, while formatting a textual document. Learning HTML is simple as users have to learn the usage of different tags in order to format the text or images to make a beautiful webpage.
                </p>

                <p>
                  World Wide Web Consortium (W3C) recommends to use lowercase tags starting from HTML 4.
                </p>

              </Grid>
              <Grid item xs={12} sm={6} >
              <h2> Basic HTML Document</h2>
                <p>In its simplest form, following is an example of an HTML document −<br /></p>
                  <CodeExamples value={`<!DOCTYPE html>
<html>
  <head>
    <title>This is document title</title>
  </head>	
  <body>
    <h1>This is a heading</h1>
    <p>Document content goes here.....</p>
  </body>	
</html>`
                                        } />
                  <CodeExamplesOutput value={`<!DOCTYPE html>
<html>
<head>
    <title>This is document title</title>
</head>	
<body>
    <h1>This is a heading</h1>
    <p>Document content goes here.....</p>
</body>	
</html>`
                                        } /> 
              </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <h2>The DOCTYPE Declaration</h2><br />
            <p>
              The DOCTYPE declaration tag is used by the web browser to understand the version of the HTML used in the document. Current version of HTML is 5 and it makes use of the following declaration −
            </p><br />
            <CodeExamples value={`<!DOCTYPE html>`} />
            <p>
              There are many other declaration types which can be used in HTML document depending on what version of HTML is being used. We will see more details on this while discussing !DOCTYPE...> tag along with other HTML tags.
            </p><br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>HTML Document Structure</h2>
              <p>A typical HTML document will have the following structure −</p>
              <br />
              <CodeExamples value={`<html> 
   <head>
      Document header related tags
   </head>  
   <body>
      Document body related tags
   </body>   
</html>`} />
              <p>We will study all the header and body tags in subsequent chapters, but for now let's see what is document declaration tag.</p>
            </Grid>
          </Grid>
        
      </div>
      <div>
          <Link to='/html'>
            <span style={{padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Previous</span>
          </Link> 
          <Link to='/Html_basicTags'>
            <span style={{margin: '2px 30vw', padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Next</span>
          </Link>
      </div>
    </Fragment>
  );
}