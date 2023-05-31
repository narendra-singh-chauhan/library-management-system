// packages
import { Box, Container, Card, CardMedia, CardContent, Typography, CardActionArea, Grid } from '@mui/material';


// _mock
const libraries = [
    {
        '_id': '64773f7b80bc94b25cc528cf',
        'location': 'Adajan Gam',
        'name': 'Central Library'
    },
    {
        '_id': '64773fb980bc94b25cc528d0',
        'location': 'Silvassa',
        'name': 'State Library'
    },
    {
        '_id': '64773fda80bc94b25cc528d1',
        'location': 'Parvat Patiya',
        'name': 'Local Library'
    },
    {
        '_id': '6477400680bc94b25cc528d2',
        'location': 'Pal RTO',
        'name': 'Global Library'
    }
];

const TopLibraries = () => {
    return (
        <Box component="section">
            <Container maxWidth="xl">
                <Box sx={{ marginBlock: 5 }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>Top Libraries</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            {libraries.map(({ _id, name, location }) => (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Card key={_id}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {location}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TopLibraries;
