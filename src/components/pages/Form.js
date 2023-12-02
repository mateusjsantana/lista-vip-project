import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  Select,
  MenuItem,
  InputAdornment,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Phone,
  Event,
  Check,
  CheckBoxOutlineBlankTwoTone,
} from "@mui/icons-material";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LiquorSharpIcon from "@mui/icons-material/LiquorSharp";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
// app-front\src\backend\server.js

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    console.log("Dados do formulário:", data);
    // Simula um atraso de 2 segundos para enviar os dados
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const festas = [
    { nome: 'Tardezinha Cloud', data: '01/01/2024'},
    { nome: 'Noite dos Horrores', data: '05/01/2024'},
    { nome: 'Festa do Pijama', data: '10/01/2024' },
    { nome: 'Carna Cloud', data: '20/02/2024'},

  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#fff",
        padding: 2,
        boxShadow: 1,
        borderRadius: 1,
        marginTop: 1,
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom={1}>
        <ListAltRoundedIcon /> Formulário de Cadastro na Lista VIP
      </Typography>

      <Divider sx={{ marginBottom: 3, width: "100%" }} />
      <TextField
        label="Nome"
        variant="filled"
        placeholder="Digite seu nome"
        {...register("nome", { required: "Nome é obrigatório" })}
        error={Boolean(errors.nome)}
        helperText={errors.nome?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="E-mail"
        variant="filled"
        type="email"
        {...register("email", { required: "E-mail é obrigatório" })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Telefone"
        variant="filled"
        {...register("telefone", { required: "Telefone é obrigatório" })}
        error={Boolean(errors.telefone)}
        helperText={errors.telefone?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Data de Nascimento"
        variant="filled"
        type="date"
        InputLabelProps={{ shrink: true }}
        {...register("dataNascimento", {
          required: "Data de nascimento é obrigatória",
        })}
        error={Boolean(errors.dataFesta)}
        helperText={errors.dataFesta?.message}
        sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Event />
            </InputAdornment>
          ),
        }}
      />
    <TextField
  label="CPF"
  variant="filled"
  InputLabelProps={{ shrink: true }}
  {...register("cpf", { 
    required: "CPF é obrigatório",
    pattern: {
      value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      message: "CPF deve ter o formato 444.555.555-10"
    }
  })}
  error={Boolean(errors.cpf)}
  helperText={errors.cpf?.message}
  sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LockPersonIcon />
      </InputAdornment>
    ),
  }}
/>

      <Divider sx={{ marginBottom: 3, width: "100%" }} />

      <Typography variant="h6" component="h2" gutterBottom>
        <InfoRoundedIcon /> Informações da Festa
      </Typography>

      <FormControl
        variant="filled"
        error={Boolean(errors.numeroFesta)}
        fullWidth
      >
        <InputLabel>Número da Festa</InputLabel>
        <Select
  {...register("numeroFesta", {
    required: "Número da festa é obrigatório",
  })}
  sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
  startAdornment={
    <InputAdornment position="start">
      <LiquorSharpIcon />
    </InputAdornment>
  }
>
{festas.map((festa, index) => (
  <MenuItem key={index} value={index.toString()}>
    {festa.nome}
  </MenuItem>
))}

</Select>
        {errors.numeroFesta && (
          <FormHelperText>{errors.numeroFesta.message}</FormHelperText>
        )}
      </FormControl>

  <FormControl
  variant="filled"
  error={Boolean(errors.dataFesta)}
  fullWidth
>
  <InputLabel>Data da Festa</InputLabel>
  <Select
    {...register("dataFesta", {
      required: "Data da festa é obrigatória",
    })}
    sx={{ width: "100%", "& .MuiInputBase-root": { width: "100%" } }}
    startAdornment={
      <InputAdornment position="start">
        <Event />
      </InputAdornment>
    }
  >
    {festas.map((festa, index) => (
      <MenuItem key={index} value={festa.data}>
        {festa.data}
      </MenuItem>
    ))}
  </Select>
  {errors.dataFesta && (
    <FormHelperText>{errors.dataFesta.message}</FormHelperText>
  )}
</FormControl>

      <Box
        sx={{ borderRadius: "10px", border: "1px solid grey", padding: "10px" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankTwoTone />}
              checkedIcon={<Check />}
              {...register("jaECliente")}
            />
          }
          label="Já é cliente?"
        />
      </Box>

      <Divider sx={{ marginBottom: 3, width: "100%" }} />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<LocalActivityOutlinedIcon />}
      >
        Cadastrar Reserva
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
