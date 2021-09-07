import React from 'react';
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/monokai.css'

const CodeExamples = (props) =>{
    return(
        <>
        <div style={{fontSize: '1.25em'}}>
            <h3>{props.title}</h3>
            <Highlight language="language-html">
            { props.value }
            </Highlight>
            <br />
            
        </div>
        </>
    )
    
        
};
const CodeExamplesOutput = (props) => {
    return(
        <>
            <hr />
            <h3>OutPut</h3>
            <hr />
            <Highlight innerHTML={true} language="language-html">
                { props.value }
            </Highlight>
            <hr />
        </>
    )
}
export default CodeExamples;
export { CodeExamplesOutput };