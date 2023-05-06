import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Container } from '@react-email/container';

interface IEmailProps {
  name: string;
  contact: string;
  message: string;
}

export default function EmailTemplate({ name, contact, message }: IEmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Nowy e-mail od: {name}!</Text>
          <Text style={paragraph}>Dane kontaktowe: {contact}</Text>
          <Text style={paragraph}>Wiadomość:</Text>
          <Text style={paragraph}>{message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: '#ffffff'
};

const container = {
  padding: '20px 0 48px',
  width: '580px'
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848'
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848'
};
