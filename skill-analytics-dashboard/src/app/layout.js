import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'Skill Test Analytics Dashboard',
  description: 'A dashboard to analyze skill test performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}