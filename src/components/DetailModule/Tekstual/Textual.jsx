import React from "react"
import ReactMarkdown from "react-markdown"
import RehypeRaw from "rehype-raw"
import RemarkGfm from 'remark-gfm'
import './style.css'

function Textual(props) {

    return(
        <ReactMarkdown className="markdown" remarkPlugins={[RemarkGfm]} rehypePlugins={[RehypeRaw]}>
            {props.isi}
        </ReactMarkdown>
    )
    
}

export default Textual;