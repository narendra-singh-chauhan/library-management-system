// packages
import { Box, Container, Card, CardMedia, CardContent, Typography, CardActionArea, Grid, Avatar } from '@mui/material';


// _mock
const comments = [
    {
        _id: '1234567890',
        comment: 'This book is a must-read! The storyline is captivating and the characters are well-developed. I couldn\'t put it down!',
        commentedDate: '2 days ago',
        commenterName: 'John Doe',
    },
    {
        _id: '9876543210',
        comment: 'I found this book to be quite informative and thought-provoking. The author provides valuable insights on the subject matter.',
        commentedDate: '5 days ago',
        commenterName: 'Jane Smith',
    },
    {
        _id: '2468135790',
        comment: 'The plot twists in this book kept me on the edge of my seat. I highly recommend it to anyone who enjoys a good mystery.',
        commentedDate: '1 week ago',
        commenterName: 'David Johnson',
    },
    {
        _id: '1357924680',
        comment: 'The writing style of the author is beautiful and poetic. This book has touched my heart in so many ways.',
        commentedDate: '3 weeks ago',
        commenterName: 'Emily Brown',
    },
    {
        _id: '0246813579',
        comment: 'I thoroughly enjoyed reading this book. It\'s a perfect blend of humor, drama, and romance.',
        commentedDate: '1 month ago',
        commenterName: 'Michael Wilson',
    },
];

const TopComments = () => {
    return (
        <Box component="section">
            <Container maxWidth="xl">
                <Box sx={{ marginBlock: 5 }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }} gutterBottom>Top Comments</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} md={8} lg={6}>
                            {comments.map(({ _id, comment, commentedDate, commenterName }) => (
                                <Box key={_id} sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                    <Avatar sx={{ width: 40, height: 40 }} src="kkkk" alt="Narendra Singh" />
                                    <Box>
                                        <Box sx={{ display: 'flex', gap: 2, marginBottom: 1 }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>{commenterName}</Typography>
                                            <Typography sx={{ fontSize: 12 }}>{commentedDate}</Typography>
                                        </Box>
                                        <Typography sx={{ fontFamily: 'monospace' }}>{comment}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} lg={6}></Grid>
                    </Grid>
                    {/* <Box sx={{ maxWidth: '50%', width: '100%' }}>
                        {comments.map(({ _id, comment, commentedDate, commenterName }) => (
                            <Box key={_id} sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                <Avatar sx={{ width: 40, height: 40 }} src="kkkk" alt="Narendra Singh" />
                                <Box>
                                    <Box sx={{ display: 'flex', gap: 2, marginBottom: 1 }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>{commenterName}</Typography>
                                        <Typography sx={{ fontSize: 12 }}>{commentedDate}</Typography>
                                    </Box>
                                    <Typography sx={{ fontFamily: 'monospace' }}>{comment}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box> */}
                </Box>
            </Container>
        </Box>
    );
};

export default TopComments;
