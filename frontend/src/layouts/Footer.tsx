// packages
import { Box, Container, Typography, ButtonGroup, IconButton } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: 'black', color: 'white' }}>
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBlock: 2 }}>
                    <Typography sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CopyrightIcon sx={{ height: 16, width: 16 }} /> 2023 LibraSys. All rights reserved.
                    </Typography>

                    <ButtonGroup variant="text" aria-label="text button group">
                        <IconButton>
                            <FacebookIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton>
                            <MailOutlineIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </ButtonGroup>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
