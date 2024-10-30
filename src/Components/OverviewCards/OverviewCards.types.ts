export interface CardData {
    title: string;
    value: number;
    icon?: React.ReactNode;
  }
  
  export interface OverviewCardsProps {
    cardsData: CardData[];
  }
  
  export interface OverviewCardData {
    title: string;
    value: number;
    icon: React.ElementType; 
    color: string;
  }