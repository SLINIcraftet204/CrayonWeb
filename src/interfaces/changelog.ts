export type ChangelogCategory = 'Minecraft Server' | 'Website' | 'Discord' | 'Generally';
export type ChangelogIcon = 'Server' | 'Globe' | 'MessageCircle' | 'Generally';

export interface ChangelogEntry {
    id: string;
    date: string;
    title: string;
    category: ChangelogCategory[];
    description: string;
    details?: string[];
    icon: ChangelogIcon;
}