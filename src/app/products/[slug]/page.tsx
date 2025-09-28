'use client'

import { useParams, useRouter } from 'next/navigation';
import { FoodPe } from '../../../components/pages/FoodPe';
import { KiranaPe } from '../../../components/pages/KiranaPe';
import { ShopPe } from '../../../components/pages/ShopPe';
import { RepairPe } from '../../../components/pages/RepairPe';
import { SnapPe } from '../../../components/pages/SnapPe';
import { RidePe } from '../../../components/pages/RidePe';
import { TicketPe } from '../../../components/pages/TicketPe';
import { EventPe } from '../../../components/pages/EventPe';
import { DocPe } from '../../../components/pages/DocPe';
import { LearnPe } from '../../../components/pages/LearnPe';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const handleBackToHome = () => {
    router.push('/');
  };

  // Render the appropriate product page based on the slug
  switch (slug) {
    case 'foodpe':
      return <FoodPe onBack={handleBackToHome} />;
    case 'kiranape':
      return <KiranaPe onBack={handleBackToHome} />;
    case 'shoppe':
      return <ShopPe onBack={handleBackToHome} />;
    case 'repairpe':
      return <RepairPe onBack={handleBackToHome} />;
    case 'snappe':
      return <SnapPe onBack={handleBackToHome} />;
    case 'ridepe':
      return <RidePe onBack={handleBackToHome} />;
    case 'ticketpe':
      return <TicketPe onBack={handleBackToHome} />;
    case 'eventpe':
      return <EventPe onBack={handleBackToHome} />;
    case 'docpe':
      return <DocPe onBack={handleBackToHome} />;
    case 'learnpe':
      return <LearnPe onBack={handleBackToHome} />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-4">The product you&apos;re looking for doesn&apos;t exist.</p>
            <button 
              onClick={handleBackToHome}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
  }
}