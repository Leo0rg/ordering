import Layout from '../components/layout/Layout';
import BookingForm from '../components/booking/BookingForm';

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams;
  const preselectedService = typeof params.service === 'string' ? params.service : undefined;
  const preselectedSpecialist = typeof params.specialist === 'string' ? params.specialist : undefined;

  return (
    <Layout>
      <div className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Бронирование</h1>
          <p className="text-lg opacity-80">
            Заполните форму для бронирования услуги
          </p>
        </div>
      </div>
      
      <BookingForm 
        preselectedService={preselectedService}
        preselectedSpecialist={preselectedSpecialist}
      />
    </Layout>
  );
} 