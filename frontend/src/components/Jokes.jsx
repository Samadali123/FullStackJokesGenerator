import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/jokes')
      .then((response) => {
        if (response.status === 200 && response.data) {
          setJokes(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch jokes. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 py-10 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">😂 Full Stack Setup - Jokes App</h1>
        <p className="text-center text-gray-600 mb-8">
          {jokes.length > 0 ? `We have ${jokes.length} hilarious jokes for you!` : "No jokes found."}
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6 text-center shadow">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            <p className="ml-4 text-gray-600 text-lg">Loading jokes...</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jokes.map((joke) => (
              <div
                key={joke.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{joke.title}</h3>
                <p className="text-gray-700">{joke.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jokes;



