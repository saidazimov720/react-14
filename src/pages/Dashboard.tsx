import React, { useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import OverviewCards from "../Components/OverviewCards/OverviewCards";
import ConversationsChart from "../Components/ConversationChart/ConversationChart";
import OperatorsList from "../Components/OperatorsList.tsx/OperatorsList";
import ConversationsTable from "../Components/ConversationTable/ConversationTable";
import AddOperatorModal from "../Components/addOperator/AddOperatorModal";
import menuItems from "../data/menuItems";
import overviewCardsData from "../data/overviewCardData";
import initialOperatorsData from "../data/operatorsData";
import conversationsData from "../data/conversationData";

const Dashboard: React.FC = () => {
  const [operators, setOperators] = useState(initialOperatorsData); 
  const [isModalOpen, setModalOpen] = useState(false);

  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

 
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  
  const handleAddOperatorSubmit = (newOperator: { name: string; email: string; phoneNumber: string; role: string }) => {
    setOperators((prevOperators) => [...prevOperators, newOperator]); 
    handleCloseModal(); 
  };

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
            <OperatorsList operators={operators} onAddOperator={handleOpenModal} />
          </Grid>
        </Grid>

        <ConversationsTable conversations={conversationsData} />

        
        <AddOperatorModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddOperatorSubmit} 
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
