export type ChangelogCategory = 'Minecraft Server' | 'Website' | 'Discord' | 'Allgemein';
export type ChangelogIcon = 'Server' | 'Globe' | 'MessageCircle' | 'Allgemein';

export interface ChangelogEntry {
    id: string;
    date: string;
    title: string;
    category: ChangelogCategory[];
    description: string;
    details?: string[];
    icon: ChangelogIcon;
}