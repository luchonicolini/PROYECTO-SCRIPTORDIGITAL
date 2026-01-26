import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MapBlock = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current=temperature_2m,weather_code&timezone=auto');
                const data = await response.json();
                setWeather({
                    temp: Math.round(data.current.temperature_2m),
                    code: data.current.weather_code
                });
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        fetchWeather();
    }, []);

    const getWeatherIcon = (code) => {
        if (code === 0) return '☀️';
        if (code >= 1 && code <= 3) return '⛅';
        if (code >= 45 && code <= 48) return '🌫️';
        if (code >= 51 && code <= 67) return '🌧️';
        if (code >= 71) return '❄️';
        return '🌤️';
    };

    return (
        <motion.div
            className="grid-item map-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <img src="/assets/location_map.png" alt="Ubicación Buenos Aires" className="map-img" onError={(e) => e.target.style.display = 'none'} />

            {/* Weather Pill */}
            {weather && (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#1D1D1F',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    <span>{getWeatherIcon(weather.code)}</span>
                    <span>{weather.temp}°</span>
                </div>
            )}

            <div className="location-tag">
                <span style={{ marginRight: '6px' }}>📍</span> Buenos Aires, AR
            </div>
        </motion.div>
    );
};

export default MapBlock;
