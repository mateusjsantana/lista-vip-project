import React, { useState } from 'react';
import { TextField, Button, Typography, Box, InputAdornment, InputLabel, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box 
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          backgroundColor: '#fff',
          padding: 2,
          boxShadow: 1,
          borderRadius: 1,
          marginTop: 1,
          alignItems: 'flex-start',
          marginBottom: 2, 
        }}
    >
<Box>
  <Typography variant="h4" component="h1" >
   <MailOutlineIcon/> Fale Conosco
   
  </Typography>
  Para enviar sua solicitação, dúvida, sugestão ou elogios, por favor, preencha os campos abaixo:
</Box>
      <Divider sx={{ marginBottom: 3, width: '100%' }} />
      <form onSubmit={handleSubmit}>
        <TextField 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Nome</InputLabel>
                  <PersonIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <TextField 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Email</InputLabel>
                  <MailOutlineIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <TextField 
          value={mensagem} 
          onChange={(e) => setMensagem(e.target.value)} 
          variant="outlined" 
          multiline 
          rows={4} 
          fullWidth 
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <InputLabel shrink={true}>Mensagem</InputLabel>
                  <MessageIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Button type="submit" variant="contained" color="primary">
        Enviar Pedido de Contato
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Formulário Enviado com Sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contato;