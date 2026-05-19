import Link from 'next/link';

const links = [
  { href: '/play', label: 'Start playing', primary: true },
  { href: '/login?mode=signup', label: 'Sign up' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/free-culture', label: 'Free Culture' },
];

export function LandingMenu() {
  return (
    <nav className="site-menu landing-menu" aria-label="Landing links">
      <input className="site-menu-state" id="site-menu-state" type="checkbox" aria-hidden="true" />
      <label className="site-menu-toggle" id="site-menu-toggle" htmlFor="site-menu-state" aria-controls="site-menu-panel" aria-label="Open menu" role="button">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <label className="site-menu-backdrop" htmlFor="site-menu-state" aria-hidden="true"></label>
      <div className="site-menu-panel" id="site-menu-panel">
        <div className="site-menu-account">
          <span className="account-kicker">Japanese Memory Game</span>
          <strong>Start with one round</strong>
          <p>Learn how it works, then jump into Explore or Play mode.</p>
        </div>
        <div className="account-actions">
          {links.map((link) => (
            <Link className={link.primary ? 'account-primary' : 'account-secondary'} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
