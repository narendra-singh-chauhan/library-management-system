// packages
import { Box, Typography } from '@mui/material';
// images
import LibraryBgImage from '@/assets/images/library-bg-image.jpg';

const Banner = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 600,
                backgroundImage: `url(${LibraryBgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontFamily: 'monospace' }}>LibraSys</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>Library Management System</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' }}>Efficient system for seamless organization and access to resources.</Typography>
            </Box>
        </Box>
    )
}

export default Banner
