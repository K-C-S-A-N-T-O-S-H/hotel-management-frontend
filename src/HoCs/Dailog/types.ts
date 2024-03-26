export interface DailogProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    title: string;
}
