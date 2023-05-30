import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is brookfield revenue in Q1 2023?",
        value: "What is brookfield revenue in Q1 2023?"
    },
    { text: "What is brookfied's fundraising at scale?", value: "What is brookfied's fundraising at scale?" },
    { text: "What is brookfield revenue in Q1 2022?", value: "What is brookfield revenue in Q1 2022?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
