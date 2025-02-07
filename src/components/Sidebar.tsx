import Link from 'next/link';

interface ISidebarProps {
  email: string
}
export default function Sidebar(props: ISidebarProps) {
  const { email } = props
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      Hi {email}
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/product">Product</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}