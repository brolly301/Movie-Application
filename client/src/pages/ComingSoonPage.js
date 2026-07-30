import ComingSoonList from "../components/ComingSoonPage/ComingSoonList";

export default function ComingSoonPage() {
  return (
    <main className="comingSoon-page">
      <header className="comingSoon-page-header">
        <h1>Coming soon</h1>
        <p>Discover the films arriving at Movie Dome next.</p>
      </header>
      <ComingSoonList />
    </main>
  );
}
