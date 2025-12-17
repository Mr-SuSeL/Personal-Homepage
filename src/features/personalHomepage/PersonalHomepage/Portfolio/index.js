import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './projectsSlice';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'; // 1. Import szkieletu
import 'react-loading-skeleton/dist/skeleton.css'; // 2. Import stylów

// Liczba elementów szkieletu do wyświetlenia podczas ładowania
const SKELETON_ITEMS_COUNT = 3; 

function Portfolio() {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    // Wywołanie akcji, którą przechwyci Redux Saga
    dispatch(fetchProjects());
  }, [dispatch]);

  // --- Warunek wyświetlania szkieletu ---
  if (loading === 'loading') {
    return (
      <div aria-label="Ładowanie listy projektów">
        <h2>
          <Skeleton width={200} /> {/* Szkielet nagłówka */}
        </h2>
        {/* Wyświetlanie listy szkieletów */}
        {Array(SKELETON_ITEMS_COUNT).fill(0).map((_, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            {/* Szkielet tytułu projektu */}
            <h3><Skeleton width={'60%'} /></h3> 
            {/* Szkielet opisu */}
            <p><Skeleton count={2} /></p> 
            <Skeleton height={1} /> {/* Separator */}
          </div>
        ))}
      </div>
    );
  }
  // ----------------------------------------

  if (loading === 'failed') {
    return <div>Wystąpił błąd podczas ładowania projektów: {error}</div>;
  }

  return (
    <div>
      <h2>Moje Projekty</h2>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;