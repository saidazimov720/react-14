import React from "react";
import { Card, CardContent, List, ListItem, ListItemText, Typography, Button } from "@mui/material";
import { OperatorsListProps } from "./OperatorList.types";

const OperatorsList: React.FC<OperatorsListProps> = ({ operators }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>List of Operators</Typography>
        <List>
          {operators.map((operator, index) => (
            <ListItem key={index}>
              <ListItemText primary={operator.name} secondary={operator.role} />
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" sx={{ mt: 2 }}>Add new Operator</Button>
      </CardContent>
    </Card>
  );
};

export default OperatorsList;
