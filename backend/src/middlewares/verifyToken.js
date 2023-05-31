// packages
import jwt from 'jsonwebtoken';
import createError from 'http-errors';


const verifyToken = (req, _res, next) => {
    try {
        // get the token from the request headers or query parameters
        const authorizationHeader = req.headers.authentication || req.headers.Authentication || req.query.token;

        if (!authorizationHeader) {
            throw createError.Unauthorized('Access token not provided');
        }

        // extract the token from the "Bearer" format
        const token = authorizationHeader.split(' ')[1];

        if (!token) {
            throw createError.Unauthorized('Access token not provided');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = {
            accessToken: decoded,
        };
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return next(createError.Unauthorized('Access token expired'));
        }
        console.log('Error while verifying the token: ', error);
        next(error);
    }
};

export default verifyToken;