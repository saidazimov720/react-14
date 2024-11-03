import React, { useState } from "react";
import { Modal, Box, TextField, Button, Select, MenuItem } from "@mui/material";

interface AddOperatorModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (operator: { name: string; email: string; phoneNumber: string; role: string }) => void;
}

const AddOperatorModal: React.FC<AddOperatorModalProps> = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const handleFormSubmit = () => {
    onSubmit({ name, email, phoneNumber, role });
    setName("");
    setEmail("");
    setPhoneNumber("");
    setRole("");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, backgroundColor: "white", margin: "auto", width: 400 }}>
        <h2>Add New Operator</h2>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          margin="normal"
        />
        <Select
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
          displayEmpty
          margin="dense"
        >
          <MenuItem value="" disabled>Select role</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Operator">Operator</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleFormSubmit} sx={{ mt: 2 }}>
          Add Operator
        </Button>
      </Box>
    </Modal>
  );
};

export default AddOperatorModal;
