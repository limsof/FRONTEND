import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet para evitar los cuadros ajedrez

export const CemeteryLocation = () => {
  const cemeteryLocation = [-16.5006, -68.1504]; // Coordenadas de La Paz, Bolivia

  return (
    <div className="bg-gradient-to-br from-red-600 to-black text-white p-8 rounded-lg shadow-lg w-4/5 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Ubicación del Cementerio ANGELES</h2>
      <div style={{ height: '400px', width: '100%' }}> {/* Ajuste de altura y ancho */}
        <MapContainer center={cemeteryLocation} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={cemeteryLocation}>
            <Popup>
              Cementerio ANGELES <br /> La Paz, Bolivia
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
