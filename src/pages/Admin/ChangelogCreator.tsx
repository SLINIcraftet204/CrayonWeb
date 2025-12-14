// src/pages/Admin/ChangelogCreator.tsx

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { LogOut, PlusCircle, Loader, MessageCircle } from 'lucide-react';
import { db, auth } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { type ChangelogCategory, type ChangelogIcon } from '../../interfaces/changelog';

const categoryOptions: ChangelogCategory[] = ['Minecraft Server', 'Website', 'Discord', 'Allgemein'];
const iconOptions: ChangelogIcon[] = ['Server', 'Globe', 'MessageCircle', 'Allgemein'];

const ChangelogCreator = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categories: [] as ChangelogCategory[],
        date: new Date().toISOString().substring(0, 10),
        icon: iconOptions[0],
        details: '',
    });

    if (loading) {
        return <p className="text-white text-center p-10">Lade Benutzerdaten...</p>;
    }

    if (!user) {
        setTimeout(() => navigate('/admin/login'), 0);
        return null;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCategoryChange = (category: ChangelogCategory, isChecked: boolean) => {
        setFormData(prevData => {
            if (isChecked) {
                return { ...prevData, categories: [...prevData.categories, category] };
            } else {
                return { ...prevData, categories: prevData.categories.filter(c => c !== category) };
            }
        });
    };


    const handleLogout = () => {
        signOut(auth);
        navigate('/');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (formData.categories.length === 0) {
            alert('Bitte wählen Sie mindestens eine Kategorie aus!');
            setIsSubmitting(false);
            return;
        }

        try {
            const detailsArray = formData.details.split('\n').map(d => d.trim()).filter(d => d.length > 0);

            // Daten in Firestore speichern
            await addDoc(collection(db, "changelogs"), {
                title: formData.title,
                description: formData.description,
                // 🛑 KORREKTUR: Speichert das Array unter dem Feld 'category'
                category: formData.categories,
                date: formData.date,
                icon: formData.icon,
                details: detailsArray,
            });

            alert('Changelog erfolgreich in Firestore gespeichert und veröffentlicht!');

            // Formular zurücksetzen
            setFormData({
                title: '',
                description: '',
                categories: [] as ChangelogCategory[], // Array zurücksetzen
                date: new Date().toISOString().substring(0, 10),
                icon: iconOptions[0],
                details: '',
            });

        } catch (error) {
            console.error("Fehler beim Speichern:", error);
            alert('Fehler beim Speichern des Changelogs.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const InputStyle = "w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-[#ff0040] focus:ring focus:ring-[#ff0040] focus:ring-opacity-50 transition";
    const LabelStyle = "text-gray-300 mb-1 block font-medium";

    return (
        <section className="min-h-screen flex flex-col pt-20 pb-10 bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 w-full">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white flex items-center">
                        <PlusCircle className="w-8 h-8 mr-3 text-[#ff0040]" /> Changelog Creator
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="cta-button secondary flex items-center px-4 py-2"
                    >
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </button>
                </div>

                <div className="section-card p-8" data-aos="fade-up">
                    <p className="text-gray-400 mb-6">Logged in als: {user.email}</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className={LabelStyle}>Titel</label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={InputStyle} required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* 🛑 NEU: CHECKBOXEN FÜR KATEGORIEN */}
                            <div className="col-span-2">
                                <label className={LabelStyle}>Kategorien auswählen (mind. eine)</label>
                                <div className="flex flex-wrap gap-4 p-3 rounded bg-gray-700 border border-gray-600">
                                    {categoryOptions.filter(c => c !== 'Allgemein').map(cat => (
                                        <label key={cat} className="flex items-center text-white cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.categories.includes(cat)}
                                                onChange={(e) => handleCategoryChange(cat, e.target.checked)}
                                                className="w-4 h-4 text-[#ff0040] bg-gray-800 border-gray-600 rounded focus:ring-[#ff0040]"
                                            />
                                            <span className="ml-2">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* ICON und DATUM bleiben als Dropdown/Input */}
                            <div>
                                <label htmlFor="icon" className={LabelStyle}>Icon (für Darstellung)</label>
                                <select id="icon" name="icon" value={formData.icon} onChange={handleChange} className={InputStyle} required>
                                    {iconOptions.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="date" className={LabelStyle}>Datum</label>
                                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={InputStyle} required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className={LabelStyle}>Hauptbeschreibung</label>
                            <textarea id="description" name="description" rows={3} value={formData.description} onChange={handleChange} className={InputStyle} required />
                        </div>

                        <div>
                            <label htmlFor="details" className={LabelStyle}>Details / Bullet Points (Zeilenumbruch für neue Punkte)</label>
                            <textarea id="details" name="details" rows={5} value={formData.details} onChange={handleChange} className={InputStyle} placeholder="Punkt 1&#10;Punkt 2&#10;Punkt 3" />
                        </div>

                        <button type="submit" className="cta-button primary w-full flex items-center justify-center" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader className="w-5 h-5 mr-2 animate-spin" /> Veröffentliche...
                                </>
                            ) : (
                                <>
                                    <MessageCircle className="w-5 h-5 mr-2" /> Changelog erstellen &amp; veröffentlichen
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ChangelogCreator;