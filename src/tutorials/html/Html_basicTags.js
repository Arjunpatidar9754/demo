import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';


export default function Html_basicTags() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Basic Tags"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div className="classes.root" style={{fontSize: '1.25em'}}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h2> Heading Tags</h2>
                <p>
                  Any document starts with a heading. You can use different sizes for your
                  headings. HTML also has six levels of headings, which use the elements h1,
                  h2, h3, h4, h5, and h6. While displaying any heading, browser adds one line
                  before and one line after that heading.<br /><br />
                </p>
                <h3>Example-<br /></h3> 
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Heading Example</title>
   </head>	
   <body>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>
   </body>	
</html>`} />
                <p>This will produce the following result −<br /></p>
                <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Heading Example</title>
   </head>
	
   <body>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6} >
                <h2> Paragraph Tag</h2>
                <p>
                  The p tag offers a way to structure your text into different paragraphs.
                  Each paragraph of text should go in between an opening p and a closing /p
                  tag as shown below in the example −<br /><br />
                </p>
                <h3>Example-</h3>
                  <br />
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Paragraph Example</title>
   </head>	
   <body>
      <p>Here is a first paragraph of text.</p>
      <p>Here is a second paragraph of text.</p>
      <p>Here is a third paragraph of text.</p>
   </body>	
</html>`} />
                <p>This will produce the following result −<br /></p>
                <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Paragraph Example</title>
   </head>
	
   <body>
      <p>Here is a first paragraph of text.</p>
      <p>Here is a second paragraph of text.</p>
      <p>Here is a third paragraph of text.</p>
   </body>	
</html>`} />
              </Grid>
          </Grid><hr/>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2>Line Break Tag</h2>
              <p>
                Whenever you use the <b>&lt;br /&gt;</b> element, anything following it starts from the next line. This tag is an example of an empty element, where you do not need opening and closing tags, as there is nothing to go in between them.
              </p>
              <p>
                The &lt;br /&gt; tag has a space between the characters <b>br</b> and the forward slash. If you omit this space, older browsers will have trouble rendering the line break, while if you miss the forward slash character and just use &lt;br&gt; it is not valid in XHTML.
              </p>
              <h3>Example-</h3>
              <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Line Break  Example</title>
   </head>	
   <body>
      <p>Hello<br />
         You delivered your assignment ontime.<br />
         Thanks<br />
         Mahnaz</p>
   </body>	
</html>`} />  
              <p>This will produce the following result −<br /></p>  
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>
   <head>
      <title>Line Break  Example</title>
   </head>	
   <body>
      <p>Hello<br />
         You delivered your assignment ontime.<br />
         Thanks<br />
         Mahnaz</p>
   </body>	
</html>`} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Centering Content</h2>
              <p>You can use &lt;center&gt; tag to put any content in the center of the page or any table cell.</p>
              <h3>Example-</h3>
              <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Centring Content Example</title>
   </head>
   <body>
      <p>This text is not in the center.</p>    
      <center>
         <p>This text is in the center.</p>
      </center>
   </body>	
</html>`} />
              <p>This will produce the following result −<br /></p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>
   <head>
      <title>Centring Content Example</title>
   </head>	
   <body>
      <p>This text is not in the center.</p>     
      <center>
         <p>This text is in the center.</p>
      </center>
   </body>	
</html>`} />
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
              <h2>Horizontal Lines</h2>
              <p>
                Horizontal lines are used to visually break-up sections of a document. The <b>&lt;hr&gt;</b> tag creates a line from the current position in the document to the right margin and breaks the line accordingly.
              </p>
              <p>
              For example, you may want to give a line between two paragraphs as in the given example below −
              </p>
              <h3>Example-</h3>
              <CodeExamples value={`<!DOCTYPE html>
<html>

   <head>
      <title>Horizontal Line Example</title>
   </head>
	
   <body>
      <p>This is paragraph one and should be on top</p>
      <hr />
      <p>This is paragraph two and should be at bottom</p>
   </body>
	
</html>`} />
              <p>This will produce the following result −</p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Horizontal Line Example</title>
   </head>
	
   <body>
      <p>This is paragraph one and should be on top</p>
      <hr />
      <p>This is paragraph two and should be at bottom</p>
   </body>
	
</html>`} />
              <p>Again &lt;hr /&gt; tag is an example of the <b> empty </b> element, where you do not need opening and closing tags, as there is nothing to go in between them.</p>
              <p>
              The <b>&lt;hr /&gt;</b> element has a space between the characters <b>hr</b> and the forward slash. If you omit this space, older browsers will have trouble rendering the horizontal line, while if you miss the forward slash character and just use &lt;hr&gt; it is not valid in XHTML
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Preserve Formatting</h2>
              <p>
              Sometimes, you want your text to follow the exact format of how it is written in the HTML document. In these cases, you can use the preformatted tag <b>&lt;pre&gt;</b>.
              </p>
              <p>
              Any text between the opening <b>&lt;pre&gt;</b> tag and the closing <b>&lt;/pre&gt;</b> tag will preserve the formatting of the source document.
              </p>
              <h3>Example-</h3>
              <CodeExamples value={`<!DOCTYPE html>
<html>

   <head>
      <title>Preserve Formatting Example</title>
   </head>
	
   <body>
      <pre>
         function testFunction( strText ){
            alert (strText)
         }
      </pre>
   </body>
	
</html>`} />
              <p>This will produce the following result −</p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Preserve Formatting Example</title>
   </head>
	
   <body>
      <pre>
         function testFunction( strText ){
            alert (strText)
         }
      </pre>
   </body>
	
</html>`} />
               <p>Try using the same code without keeping it inside &lt;pre&gt;...&lt;/pre&gt; tags</p>
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={3}>
             <Grid item xs={12} sm={6}>
               <h2>Nonbreaking Spaces</h2>
               <p>Suppose you want to use the phrase "12 Angry Men." Here, you would not want a browser to split the "12, Angry" and "Men" across two lines −</p>
               <p style={{backgroundColor: 'grey', padding: '10px 10px', borderRadius: '5px'}}>An example of this technique appears in the movie "12 Angry Men."</p>
               <p>In cases, where you do not want the client browser to break text, you should use a nonbreaking space entity <b>&amp;nbsp;</b> instead of a normal space. For example, when coding the "12 Angry Men" in a paragraph, you should use something similar to the following code −</p>
               <h3>Example</h3>
               <CodeExamples value={`<!DOCTYPE html>
<html>

   <head>
      <title>Nonbreaking Spaces Example</title>
   </head>
	
   <body>
      <p>An example of this technique appears in the movie "12&nbsp;Angry&nbsp;Men."</p>
   </body>
	
</html>`} />
               <p>This will produce the following result −</p>
               <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Nonbreaking Spaces Example</title>
   </head>
	
   <body>
      <p>An example of this technique appears in the movie "12&nbsp;Angry&nbsp;Men."</p>
   </body>
	
</html>`} />
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