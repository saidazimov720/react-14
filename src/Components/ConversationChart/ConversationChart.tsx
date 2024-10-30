import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { ConversationsChartProps } from "./ConversationChart.types";

const ConversationsChart: React.FC<ConversationsChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Messages",
        data,
        backgroundColor: ["#4CAF50", "#FFC107", "#3F51B5", "#FF5722"],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Conversations</Typography>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );
};

export default ConversationsChart;
