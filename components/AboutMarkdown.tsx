import React from 'react'
import Markdown from 'react-markdown'

export default async function AboutMarkdown() {
  const res = await fetch('https://raw.githubusercontent.com/jowhe/jowhe/main/README.md');
  const markdown = await res.text()
  return <Markdown className="about-div">{markdown}</Markdown>
}
