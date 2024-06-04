import { getAssetPath } from '@/core/helpers/assets'

interface ICustomer {
  id: number
  name: string
  email: string
  Role: string
  lastLogin: string
  date: string
  image: string
}

const customers: Array<ICustomer> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Emma Smith',
    email: 'e.smith@kpmg.com.au',
    Role: 'admin',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Melody Macy',
    email: 'melody@altbox.com',
    Role: 'Google',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Max Smith',
    email: 'max@kt.com',
    Role: 'Bistro Union',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Sean Bean',
    email: 'sean@dellito.com',
    Role: 'Astro Limited',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Brian Cox',
    email: 'brian@exchange.com',
    Role: 'admin',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Mikaela Collins',
    email: 'mikaela@pexcom.com',
    Role: 'Keenthemes',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Francis Mitcham',
    email: 'f.mitcham@kpmg.com.au',
    Role: 'Paypal',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Olivia Wild',
    email: 'olivia@corpmail.com',
    Role: 'admin',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Neil Owen',
    email: 'owen.neil@gmail.com',
    Role: 'Paramount',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Dan Wilson',
    email: 'dam@consilting.com',
    Role: 'Trinity Studio',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Emma Bold',
    email: 'emma@intenso.com',
    Role: 'B&T Legal Services',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Ana Crown',
    email: 'ana.cf@limtel.com',
    Role: 'Paysafe Security',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: 'Emma Smith',
    email: 'e.smith@kpmg.com.au',
    Role: 'admin',
    lastLogin: 'Yesterday',
    date: '10 Nov 2024',
    image: getAssetPath('media/avatars/300-14.jpg'),
  },
]

export type { ICustomer }

export default customers
