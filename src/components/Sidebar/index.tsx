import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from 'next-auth/client';

import { MdPowerSettingsNew } from 'react-icons/md';
import { BiHomeAlt, BiMedal } from 'react-icons/bi';

import { Container } from './styles';

export function Sidebar() {
  const router = useRouter();

  function signOutApp() {
    signOut();
  }

  return (
    <Container>
      <header>
        <img src="logo.svg" alt="move.it" />
      </header>
      <nav>
        <ul>
          <li className={router.pathname === '/' ? 'active' : ''}>
            <Link href="/">
              <a aria-label="Home">
                <BiHomeAlt size={32} />
              </a>
            </Link>
          </li>
          <li className={router.pathname === '/leaderboard' ? 'active' : ''}>
            <Link href="/leaderboard">
              <a aria-label="Leaderboard">
                <BiMedal size={32} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <button
          className="btn-signout"
          type="button"
          onClick={signOutApp}
          title="Sign Out"
        >
          <MdPowerSettingsNew size={30} />
        </button>
      </footer>
    </Container>
  );
}
