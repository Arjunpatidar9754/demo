import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';

import { PageTitle } from '../../layout-components';
import { Link } from 'react-router-dom';


export default function HtmlIntro() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Introduction"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div className="classes.root"  style={{fontSize: '1.25em'}}>
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
              <br />
              <h2>Hello World using HTML.</h2><br />
              <p>Just to give you a little excitement about HTML, I'm going to give you a
              small conventional HTML Hello World program, You can try it using Demo
              link.</p><br />
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
                                        } title={'Code Example'} />
              <CodeExamplesOutput value={`<!DOCTYPE html>
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h2>Applications of HTML</h2><br />
            <p>As mentioned before, HTML is one of the most widely used language over the
            web. I'm going to list few of them here:<br />
              <ul>
                  <li>
                      <b>Web pages development </b>- HTML is used to create pages which
                      are rendered over the web. Almost every page of web is having html
                      tags in it to render its details in browser.
                  </li>>

                  <li><b> Navigation</b> - HTML provides tags which are used to navigate
                      from one page to another and is heavily used in internet navigation.
                  </li>

                  <li><b>Responsive UI</b> - HTML pages now-a-days works well on all
                      platform, mobile, tabs, desktop or laptops owing to responsive
                      design strategy.</li>


                  <li><b>Offline support</b> HTML pages once loaded can be made available
                      offline on the machine without any need of internet.</li>

                  <li><b>Game development</b>- HTML5 has native support for rich
                      experience and is now useful in gaming developent arena as well.
                  </li><br />
              </ul>
            </p>

            
          </Grid>
          <Grid item xs={12} sm={6}>
          <h2>Audience</h2><br />
            <p>
              This<b> HTML tutorial</b> is designed for the aspiring Web Designers and
              Developers with a need to understand the HTML in enough detail along
              with its simple overview, and practical examples. This tutorial will
              give you enough ingredients to start with HTML from where you can
              take yourself at higher level of expertise.<br />
            </p>
          <h2>Prerequisites</h2><br />
            <p>
              Before proceeding with this <b>tutorial</b> you should have a basic working
              knowledge with Windows or Linux operating system, additionally you
              must be familiar with −<br />
            </p>
            <ul>
                <li>Experience with any text editor like notepad, notepad++, or
                    Edit plus etc.</li>
                <li>
                    How to create directories and files on your computer.</li>
                <li>
                    How to navigate through different directories.
                </li>
                <li>How to type content in a file and save them on a computer.
                </li>
                <li>Understanding about images in different formats like JPEG,
                    PNG format.</li>
            </ul>
          </Grid>
        </Grid>
        
      </div>
      <div>
          <Link>
            <span style={{padding: '7px 15px', borderRadius: '20px', backgroundColor: '#e9ebf2', color: '#6b6c6e', fontWeight: 'bold'}}>Previous</span>
          </Link> 
          <Link to='/Html_overview'>
          <span style={{margin: '2px 30vw', padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Next</span>
          </Link>
      </div>
    </Fragment>
  );
}
