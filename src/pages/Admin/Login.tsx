// src/pages/Admin/Login.tsx

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogIn, Key, Mail } from 'lucide-react'; // Lucide Icons

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    if (user) {
        navigate('/admin/changelog-creator');
        return null;
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/changelog-creator');
        } catch (err) {
            setError("Anmeldung fehlgeschlagen. Überprüfen Sie E-Mail und Passwort.");
            console.error(err);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="section-card p-8 w-full max-w-md" data-aos="fade-up">
                <LogIn className="w-10 h-10 mx-auto mb-6 text-[#ff0040]" />
                <h1 className="text-3xl font-bold text-white text-center mb-6">Admin Login</h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-gray-300 flex items-center mb-1">
                            <Mail className="w-4 h-4 mr-2" /> E-Mail
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-[#ff0040] focus:ring focus:ring-[#ff0040] focus:ring-opacity-50 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 flex items-center mb-1">
                            <Key className="w-4 h-4 mr-2" /> Passwort
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-[#ff0040] focus:ring focus:ring-[#ff0040] focus:ring-opacity-50 transition"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button type="submit" className="cta-button primary w-full mt-6">
                        Anmelden
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;