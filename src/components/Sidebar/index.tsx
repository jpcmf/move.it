import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from 'next-auth/client';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { MdPowerSettingsNew, MdWbSunny } from 'react-icons/md';
import { BiHomeAlt, BiMedal } from 'react-icons/bi';

import { Container } from './styles';

export function Sidebar({ toggleTheme }): JSX.Element {
  const router = useRouter();
  const { colors, title } = useContext(ThemeContext);

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
        <div className="switch-wrapper">
          <i>
            {title === 'dark' ? (
              <MdWbSunny color={'var(--blue)'} />
            ) : (
              <MdWbSunny />
            )}
          </i>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={12}
            width={36}
            handleDiameter={18}
            offHandleColor={colors.text}
            onHandleColor={colors.textHighlight}
            offColor={colors.grayLine}
            onColor={colors.text}
          />
        </div>
        <div className="btn-wrapper">
          <button
            className="btn-signout"
            type="button"
            onClick={signOutApp}
            title="Sign Out"
          >
            <MdPowerSettingsNew size={30} />
          </button>
        </div>
      </footer>
    </Container>
  );
}
