// packages
import { Box, Container, Card, CardMedia, CardContent, Typography, CardActionArea, Grid } from '@mui/material';


// _mock
const books = [
    {
        _id: '1234567890',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publication: 'Scribner',
    },
    {
        _id: '9876543210',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publication: 'J. B. Lippincott & Co.',
    },
    {
        _id: '2468135790',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publication: 'T. Egerton, Whitehall',
    },
    {
        _id: '1357924680',
        title: '1984',
        author: 'George Orwell',
        publication: 'Secker & Warburg',
    },
];

const TopBooks = () => {
    return (
        <Box component="section">
            <Container maxWidth="xl">
                <Box sx={{ marginBlock: 5 }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>Top Books</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            {books.map(({ _id, title, author, publication }) => (
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
                                                    {title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {author}
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

export default TopBooks;
