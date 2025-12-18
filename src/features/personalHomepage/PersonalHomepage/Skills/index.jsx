import { StyleHeader, Item, List, StyledBullet, Section } from './styled';

export const Skills = ({ title, skills }) => (
    <Section>
        <StyleHeader>{title}</StyleHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <StyledBullet />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);