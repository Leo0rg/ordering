import Layout from '../components/layout/Layout';
import SpecialistsList from '../components/catalog/SpecialistsList';

export default function SpecialistsPage() {
  return (
    <Layout>
      <div className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Специалисты</h1>
          <p className="text-lg opacity-80">
            Выберите специалиста из нашего каталога
          </p>
        </div>
      </div>
      
      <SpecialistsList />
    </Layout>
  );
} 