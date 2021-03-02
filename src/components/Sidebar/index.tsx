import { signOut } from 'next-auth/client';
import { MdPowerSettingsNew } from 'react-icons/md';
import { Container } from './styles';

export function Sidebar() {
  function signOutApp() {
    signOut();
  }

  return (
    <Container>
      <header>
        <img src="logo.svg" alt="move.it" />
      </header>
      <nav></nav>
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
