import Heading from './Heading.jsx';
import Section from './Section.jsx';

export default function App2() {
    return (
        <Section>
            <Heading level={1}>Title</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={5}>Sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    );
}
// .section {
//     padding: 10px;
//     margin: 5px;
//     border-radius: 5px;
//     border: 1px solid #aaa;
//   }
