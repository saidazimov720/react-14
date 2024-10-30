import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OverviewCardsProps } from "./OverviewCards.types";

const OverviewCards: React.FC<OverviewCardsProps> = ({ cardsData }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {cardsData.map((card, index) => (
        <Grid item xs={6} md={3} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="h4">
                {card.value} {card.icon}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewCards;
