// sections
import Banner from '@/sections/user/Banner';
import TopBooks from '@/sections/user/TopBooks';
import TopLibraries from '@/sections/user/TopLibraries';
import TopComments from '@/sections/user/TopComments';

const UserHome = () => {
    return (
        <>
            <Banner />
            <TopLibraries />
            <TopBooks />
            <TopComments />
        </>
    );
};

export default UserHome;
