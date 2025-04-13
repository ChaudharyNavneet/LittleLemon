import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { BookingForm } from './components/BookingForm';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { Hero } from './components/Hero';
import { Specials } from './components/Specials';
import { Testimonials } from './components/Testimonials';
import { Description } from './components/Description';
import { Footer } from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Description />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/reservations" element={<BookingForm />} />
        <Route path="/menu" element={<PlaceholderPage title="Menu" />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/order" element={<PlaceholderPage title="Order Online" />} />
        <Route path="/login" element={<PlaceholderPage title="Login" />} />
      </Routes>
    </>
  );
}
