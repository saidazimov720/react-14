import { MenuItem } from "../Components/Sidebar/Sidebar.types";
import { CardData } from "../Components/OverviewCards/OverviewCards.types";
import { Operator } from "../Components/OperatorsList.tsx/OperatorList.types";
import { Conversation } from "../Components/ConversationTable/ConversationTable.types";

export interface DashboardProps {
  menuItems: MenuItem[];
  overviewCardsData: CardData[];
  operators: Operator[];
  conversations: Conversation[];
}
