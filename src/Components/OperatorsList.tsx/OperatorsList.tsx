import React from "react";
import { Card, CardContent, List, ListItem, ListItemText, Typography, Button } from "@mui/material";

interface Operator {
  name: string;
  role: string;
}


interface OperatorsListProps {
  operators: Operator[];
  onAddOperator: () => void; 
}

const OperatorsList: React.FC<OperatorsListProps> = ({ operators, onAddOperator }) => {
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
        <Button variant="outlined" sx={{ mt: 2 }} onClick={onAddOperator}>
          Add new Operator
        </Button>
      </CardContent>
    </Card>
  );
};

export default OperatorsList;
