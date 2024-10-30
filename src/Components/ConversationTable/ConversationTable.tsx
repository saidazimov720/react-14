import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ConversationsTableProps } from "./ConversationTable.types";

const ConversationsTable: React.FC<ConversationsTableProps> = ({ conversations }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Template Title</TableCell>
            <TableCell>Sent Day</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Recipients</TableCell>
            <TableCell>No of Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conversations.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.sentDate}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.recipients}</TableCell>
              <TableCell>{row.clicks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConversationsTable;
