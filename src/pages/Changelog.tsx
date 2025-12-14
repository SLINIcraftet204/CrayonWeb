// src/pages/Changelog.tsx

import React, { useState, useEffect, useMemo } from "react";
import { List, Server, Globe, MessageCircle, GitBranch, Loader } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { type ChangelogEntry, type ChangelogCategory, type ChangelogIcon } from '../interfaces/changelog';

const IconMap: Record<ChangelogIcon, React.ElementType> = {
    'Server': Server,
    'Globe': Globe,
    'MessageCircle': MessageCircle,
    'Allgemein': GitBranch,
};

const filterCategories: ChangelogCategory[] = ['Allgemein', 'Minecraft Server', 'Website', 'Discord'];

const Changelog = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            disable: "mobile",
        });
    }, []);

    const [activeCategory, setActiveCategory] = useState<ChangelogCategory>('Allgemein');
    const [changelogs, setChangelogs] = useState<ChangelogEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChangelogs = async () => {
            setLoading(true);
            try {
                const q = query(collection(db, "changelogs"), orderBy("date", "desc"));
                const querySnapshot = await getDocs(q);

                const fetchedLogs: ChangelogEntry[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    fetchedLogs.push({
                        id: doc.id,
                        date: data.date,
                        title: data.title,
                        category: data.category as ChangelogCategory[],
                        description: data.description,
                        details: data.details,
                        icon: data.icon as ChangelogIcon,
                    });
                });
                setChangelogs(fetchedLogs);
            } catch (error) {
                console.error("Fehler beim Laden des Changelogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchChangelogs();
    }, []);

    const filteredChangelogs = useMemo(() => {
        if (activeCategory === 'Allgemein') {
            return changelogs;
        }
        return changelogs.filter(log => log.category.includes(activeCategory));
    }, [changelogs, activeCategory]);

    const handleCategoryChange = (category: ChangelogCategory) => {
        setActiveCategory(category);
    };

    const CategoryBadges: React.FC<{ categories: ChangelogCategory[] }> = ({ categories }) => {
        const colorMap: Record<ChangelogCategory, string> = {
            'Minecraft Server': 'bg-green-600',
            'Website': 'bg-blue-600',
            'Discord': 'bg-purple-600',
            'Allgemein': 'bg-yellow-600',
        };
        const baseStyle = "px-3 py-1 text-xs font-semibold rounded-full text-white whitespace-nowrap";

        return (
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <span key={category} className={`${baseStyle} ${colorMap[category]}`}>
                        {category}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <>
            <main className="container mx-auto px-4 mt-8 mb-16">
                <div className="max-w-5xl mx-auto">

                    {/* Filter Buttons */}
                    <section className="section-card mb-12 p-6" data-aos="fade-up">
                        <h2 className="text-xl font-bold mb-4 text-white border-b border-[var(--border-color)] pb-3">Filter nach Kategorie:</h2>
                        <div className="flex flex-wrap gap-3">
                            {filterCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`
                                        cta-button text-sm font-medium transition-all duration-300
                                        ${activeCategory === category ? 'primary' : 'secondary'}
                                    `}
                                    style={activeCategory === category ? {} : {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        color: 'var(--text-light)',
                                        border: '1px solid var(--border-color)'
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section data-aos="fade-up">
                        {loading ? (
                            <div className="text-center p-12 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
                                <Loader className="w-12 h-12 mx-auto mb-4 text-[#ff0040] animate-spin" />
                                <p className="text-lg text-gray-400">Lade Changelog-Einträge...</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {filteredChangelogs.map((entry) => {
                                    const EntryIcon = IconMap[entry.icon as keyof typeof IconMap] || List;
                                    return (
                                        <div
                                            key={entry.id}
                                            className="changelog-entry p-6 bg-[var(--bg-card)] rounded-xl border-l-4 border-[#ff0040] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-l-8"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-2xl font-bold text-white leading-snug">
                                                    <EntryIcon className="w-6 h-6 inline-block mr-3 text-[#ff0040]" />
                                                    {entry.title}
                                                </h3>
                                                <CategoryBadges categories={entry.category} />
                                            </div>
                                            <p className="text-sm text-gray-400 mb-4">
                                                Veröffentlicht am: {entry.date}
                                            </p>
                                            <p className="text-gray-300 mb-4">{entry.description}</p>

                                            {entry.details && entry.details.length > 0 && (
                                                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 border-t border-[var(--border-color)] pt-3 mt-3">
                                                    {entry.details.map((detail, index) => (
                                                        <li key={index} className="text-sm">
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                })}

                            </div>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Changelog;