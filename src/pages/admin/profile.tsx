// Chakra imports
import { Box, Grid } from '@chakra-ui/react'
import AdminLayout from 'layouts/admin'

// Custom components
import Banner from 'views/admin/profile/components/Banner'

// Assets
// import banner from 'img/auth/banner.png'
import banner from 'img/nfts/Nft2.png'
import avatar from 'img/avatars/avatar2.png'
import { useAuthContext } from 'contexts/AuthContext'

export default function ProfileOverview() {
  const authInfo = useAuthContext();

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Banner
          maxW='280px'
          banner={banner}
          avatar={avatar}
          name={authInfo.user.username}
          job={authInfo.user.role || 'Guest'}
        />
      </Box>
    </AdminLayout>
  )
}
