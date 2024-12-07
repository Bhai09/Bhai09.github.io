import React, { useState } from 'react';
import EventHero from '../components/events/EventHero';
import FeaturedEvent from '../components/events/FeaturedEvent';
import EventCard from '../components/events/EventCard';
import RegistrationForm from '../components/events/RegistrationForm';
import { events } from '../data/events';
import PageTurn from '../components/shared/PageTurn';

const Events = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleRegister = (eventId: string) => {
    setSelectedEventId(eventId);
    setShowRegistration(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleRegistrationSubmit = (formData: any) => {
    console.log('Registration submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const featuredEvent = events.find(event => event.isUpcoming);
  const otherEvents = events.filter(event => event !== featuredEvent);

  return (
    <div className="font-literary">
      <EventHero />

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-12 bg-amber-50">
          <FeaturedEvent
            event={featuredEvent}
            onRegister={handleRegister}
          />
        </section>
      )}

      {/* Event Grid */}
      <section className="py-12 paper-texture bg-white">
        <PageTurn>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                />
              ))}
            </div>
          </div>
        </PageTurn>
      </section>

      {/* Registration Form */}
      {showRegistration && (
        <section className="py-12 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">
              Event Registration
            </h2>
            <RegistrationForm onSubmit={handleRegistrationSubmit} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;