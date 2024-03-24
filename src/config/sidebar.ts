export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Introduction',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
      {
        title: 'Getting Started',
        slug: '/get-started',
      },
      {
        title: 'Connecting wallets',
        slug: '/connect-guide',
      },
      {
        title: 'Content  Management',
        slug: '/content-management',
      },
      {
        title: 'Blockchain and Smart Contracts',
        slug: '/blockchain-guide',
      },
      {
        title: 'Payment and Royalties',
        slug: '/payments-and-royalties',
      },
      {
        title: 'Access Control and Licensing',
        slug: '/access-control-and-licensing',
      },
      {
        title: 'User Wallets and Transactions',
        slug: '/wallets-and-transactions',
      },
      {
        title: 'Community Guidelines',
        slug: '/guidelines',
      },
      {
        title: 'Troubleshooting and Support',
        slug: '/troubleshooting',
      },
      {
        title: 'Legal and Compliance',
        slug: '/legal-guide',
      },
      {
        title: 'Updates and Release Notes',
        slug: '/updates',
      },
      // {
      //   title: 'Guide to connect a Wallet',
      //   slug: '/connect-guide',
      // },
    ],
  },
];
