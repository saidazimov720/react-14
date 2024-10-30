export interface Conversation {
    title: string;
    sentDate: string;
    category: string;
    recipients: string;
    clicks: string;
  }
  
  export interface ConversationsTableProps {
    conversations: Conversation[];
  }
  