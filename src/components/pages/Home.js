import * as React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Home() {
  const festas = [
    { nome: 'Tardezinha Cloud', local: 'Av. Deus', horario: '15:00', data: '01/01/2024' },
    { nome: 'Noite dos Horrores', local: 'Av. Deus', horario: '22:00', data: '05/01/2024' },
    { nome: 'Festa do Pijama', local: 'Club Cloud, Avenida Imoral 2002', horario: '20:00', data: '10/01/2024' },
    { nome: 'Noite das Patras', local: 'Club Cloud, Avenida Imoral 2002', horario: '22:00', data: '15/01/2024' },
    { nome: 'Carna Cloud', local: 'Club Cloud, Avenida Imoral 2002', horario: '15:00', data: '20/02/2024' },

  ];

  return (
    <Container
      sx={{
        marginTop: 2,
        backgroundColor: '#fff',
        padding: 2,
        boxShadow: 1,
        borderRadius: 1,
        alignItems: 'flex-start'

      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
      <CelebrationIcon/> Lista de Festas:
      </Typography>
      <Divider sx={{ marginBottom: 3, width: '100%' }} />
      {festas.map((festa, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {festa.nome}
            </Typography>
            <Typography color="text.secondary">
              Local: {festa.local}
            </Typography>
            <Typography color="text.secondary">
              Horário: {festa.horario}
            </Typography>
            <Typography color="text.secondary">
              Data: {festa.data}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to ="/form">Entrar na Lista VIP</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default Home;