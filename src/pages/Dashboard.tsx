import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import OverviewCards from "../Components/OverviewCards/OverviewCards";
import ConversationsChart from "../Components/ConversationChart/ConversationChart";
import OperatorsList from "../Components/OperatorsList.tsx/OperatorsList";
import ConversationsTable from "../Components/ConversationTable/ConversationTable";
import menuItems from "../data/menuItems";
import overviewCardsData from "../data/overviewCardData";
import operatorsData from "../data/operatorsData";
import conversationsData from "../data/conversationData";

const Dashboard: React.FC = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      
      <Grid item xs={2} style={{ backgroundColor: "#2C6B56" }}>
        <Sidebar menuItems={menuItems} />
      </Grid>
      <Grid item xs={10} style={{ padding: "20px" }}>
        <Header name="User Name" phone="+1234567890" />
        <OverviewCards cardsData={overviewCardsData} />
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <ConversationsChart
              labels={["Sent", "Delivered", "Read", "Replies"]}
              data={[80, 60, 40, 20]}
            />
          </Grid>
          <Grid item xs={6}>
            <OperatorsList operators={operatorsData} />
          </Grid>
        </Grid>

        <ConversationsTable conversations={conversationsData} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
