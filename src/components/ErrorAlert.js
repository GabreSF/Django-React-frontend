// Em ErrorAlert.js
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Error — Unregistered User!</Alert>
      <Alert severity="warning">Warning — User already Registered!</Alert>
      <Alert severity="info">Alert — Incorrect Password!</Alert>
      <Alert severity="success">Success — Successful Login!</Alert>
    </Stack>
  );
}
