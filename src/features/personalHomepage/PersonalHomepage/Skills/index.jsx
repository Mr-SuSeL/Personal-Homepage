import { StyleHeader, Item, List, Bullet, Section} from './styled';

export const Skills = ({ title, skills }) => (
    <Section>
        <StyleHeader>{title}</StyleHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Bullet />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);