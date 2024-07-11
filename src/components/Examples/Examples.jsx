import { useState } from "react";
import Section from "../layouts/section";
import Tabs from "../layouts/Tabs";
import TaButton from "../TaButton/TaButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [content, setContent] = useState();
    function handleSelect(param) {
        setContent(param)
    }

    const tabContent = content ? (<div id="tab-content">
        <h3>{EXAMPLES[content].title}</h3>
        <p>{EXAMPLES[content].description}</p>
        <pre>
            <code>
                {EXAMPLES[content].code}
            </code>
        </pre>
    </div>) : "Please select a topic";

    return (
        <Section title={'Examples'} id="examples">
            <Tabs 
            buttons={
                <>
                    <TaButton isSelected={content === 'components'} onClick={() => handleSelect('components')}>Components</TaButton>
                    <TaButton isSelected={content === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TaButton>
                    <TaButton isSelected={content === 'props'} onClick={() => handleSelect('props')}>Props</TaButton>
                    <TaButton isSelected={content === 'state'} onClick={() => handleSelect('state')}>State</TaButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}