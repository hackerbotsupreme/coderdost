import { Remarkable } from 'remarkable';

const md = new Remarkable();

export default function MarkdownPreview({ markdown }) {
    const renderedHTML = md.render(markdown);
    return <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />;
}
