"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartBar,FaFileAlt } from 'react-icons/fa';
import { MdStarBorder } from 'react-icons/md';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-white text-black w-64 h-screen p-4 sticky top-0">
      <nav>
        <ul className="space-y-4">
          <li
            className={`flex items-center gap-2 p-2 rounded ${
              pathname === '/'
                ? 'bg-gray-200 text-blue-500'
                : 'hover:bg-gray-200 hover:text-blue-500'
            }`}
          >
            <FaChartBar className="text-inherit" />
            <Link href="/">Dashboard</Link>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded ${
              pathname === '/skill-test'
                ? 'bg-gray-200 text-blue-500'
                : 'hover:bg-gray-200 hover:text-blue-500'
            }`}
          >
            <MdStarBorder className="text-inherit" />
            <Link href="/skill-test">Skill Test</Link>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded ${
              pathname === '/internship'
                ? 'bg-gray-200 text-blue-500'
                : 'hover:bg-gray-200 hover:text-blue-500'
            }`}
          >
            <FaFileAlt className="text-inherit" />
            <Link href="/internship">Internship</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;