"use client";
import { useState } from 'react';
import Modal from './Modal';

interface Actor {
  name: string;
  photo: string;
}

interface Movie {
  id: number;
  title: string;
  year: number;
  image: string;
  synopsis: string;
  director: string;
  rating: number;
  actors?: Actor[];
}

const moviesData: Movie[] = [
  {
    id: 1, title: 'Pulp Fiction', year: 1994, image: 'https://www.themoviedb.org/t/p/w600_and_h900_face/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg', synopsis: 'La vida de dos sicarios, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención.', director: 'Quentin Tarantino', rating: 8.9,
    actors: [
      { name: 'John Travolta', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ap8eEYfBKTLixmVVpRlq4NslDD5.jpg' },
      { name: 'Samuel L. Jackson', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/qdfRtvPCj51C9Uy5VEgjgj69JyV.jpg' },
      { name: 'Uma Thurman', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/hlYG0MC6im0MHNq1xixxVilfwyR.jpg' }
    ]
  },
  {
    id: 2, title: 'Scarface', year: 1983, image: 'https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', synopsis: 'En 1980, un refugiado cubano llega a Miami con nada y asciende en el mundo criminal para convertirse en el poderoso y sanguinario capo de un cartel de drogas.', director: 'Brian De Palma', rating: 8.3,
    actors: [
      { name: 'Al Pacino', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/m8HAAjq1T75JypKk0v1FFQn4ysZ.jpg' },
      { name: 'Michelle Pfeiffer', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/8qwNMFzmM3BxGKIj1iIqiHHBpx3.jpg' }
    ]
  },
  {
    id: 3, title: 'Perros de reserva (Reservoir Dogs)', year: 1992, image: 'https://www.themoviedb.org/t/p/w600_and_h900_face/hxmJqXFFnXLlvPIdCW2k3UGLCgZ.jpg', synopsis: 'Después de que un robo de joyas planeado milimétricamente sale terriblemente mal, los criminales sobrevivientes comienzan a sospechar que uno de ellos es un informante.', director: 'Quentin Tarantino', rating: 8.3,
    actors: [
      { name: 'Harvey Keitel', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/7P30hza1neYWW3r7rSQOC736K2Z.jpg' },
      { name: 'Tim Roth', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/qSizF2i9gz6c6DbAC5RoIq8sVqX.jpg' }
    ]
  },
  {
    id: 4, title: 'Harry el sucio (Dirty Harry)', year: 1971, image: 'https://www.themoviedb.org/t/p/w600_and_h900_face/gJ3VDY75PGksnba8aTOueb5Gtm4.jpg', synopsis: 'Cuando un psicópata al que llaman el Asesino Scorpio aterroriza a San Francisco, el rudo y poco ortodoxo inspector de policía "Dirty" Harry Callahan se encarga de detenerlo.', director: 'Don Siegel', rating: 7.7,
    actors: [
      { name: 'Clint Eastwood', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/8TwdCfeOZH7ucRlfLZ6wObxa7cO.jpg' },
      { name: 'Andrew Robinson', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/zHlqGUhVgvs4Cx16YALEqX799Oq.jpg' }
    ]
  },
  {
    id: 5, title: 'Snatch (Cerdos y diamantes)', year: 2000, image: 'https://www.themoviedb.org/t/p/w600_and_h900_face/ziWecvSRGjqeNKPx3kMqlYwssDo.jpg', synopsis: 'Promotores de boxeo sin escrúpulos, corredores de apuestas, un gángster ruso, ladrones y joyeros se enfrentan por el paradero de un valioso diamante robado.', director: 'Guy Ritchie', rating: 8.3,
    actors: [
      { name: 'Jason Statham', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/pXGSq2UpcDE2NMF8LR56QZf5U1q.jpg' },
      { name: 'Brad Pitt', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/m09Y1YfPPeNYYUSHnnVqahkrC1o.jpg' }
    ]
  },
  {
    id: 6, title: 'Duel (El diablo sobre ruedas)', year: 1971, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K4-HbzucENWUnhcug8Mj4I9TY5ep9d3DCEO1q-VT8ZqGoFh_W0Gtax9U&s=10', synopsis: 'Un tranquilo hombre de negocios que viaja por una remota carretera desértica es aterrorizado y perseguido implacablemente por el conductor de un enorme camión cisterna.', director: 'Steven Spielberg', rating: 7.6,
    actors: [
      { name: 'Dennis Weaver', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ed8NnlU9Kxtmwxb4Io4VlWSIY71.jpg' },
      { name: 'Jacqueline Scott', photo: 'https://media.themoviedb.org/t/p/w300_and_h450_face/4XTAShFoipPwblFD8AMPTCdAhDn.jpg' }
    ]
  }
];

export default function MoviesGallery() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div>
      {/* Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
        {moviesData.map(movie => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            style={{
              background: '#fff', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,63,127,0.08)', transition: 'transform 0.2s', border: '1px solid #e2e8f0',
              display: 'flex', flexDirection: 'column'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '1.05rem', color: '#001f3f' }}>{movie.title}</h3>
              <p style={{ margin: 0, color: '#5a6a7e', fontSize: '0.9rem', fontWeight: 600 }}>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
        title={selectedMovie?.title || ''}
      >
        {selectedMovie && (
          <div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                style={{ width: '120px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#1a2332', marginBottom: '12px', marginTop: 0 }}>
                  <strong>Sinopsis:</strong> <br />{selectedMovie.synopsis}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#5a6a7e', marginBottom: '6px' }}>
                  <strong>Director:</strong> {selectedMovie.director}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#5a6a7e', marginBottom: '0' }}>
                  <strong>Calificación:</strong> ⭐ {selectedMovie.rating}/10
                </p>
              </div>
            </div>

            {/* Actores */}
            {selectedMovie.actors && selectedMovie.actors.length > 0 && (
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                <h4 style={{ margin: '0 0 12px', color: '#001f3f', fontSize: '0.95rem' }}>Actores Principales</h4>
                <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                  {selectedMovie.actors.map((actor, idx) => (
                    <div key={idx} style={{ textAlign: 'center', minWidth: '70px' }}>
                      <img
                        src={actor.photo}
                        alt={actor.name}
                        style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' }}
                      />
                      <p style={{ margin: '6px 0 0', fontSize: '0.75rem', color: '#1a2332', lineHeight: 1.2 }}>{actor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
