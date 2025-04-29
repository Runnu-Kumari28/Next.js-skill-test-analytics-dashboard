import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'Skill Test Analytics Dashboard',
  description: 'A dashboard to analyze skill test performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}