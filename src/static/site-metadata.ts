interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: '', 
  logo: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAKAKWicqivY7QGThNVTwnkwah0UQR5SAALSGAACSijoVCm0ksmThALBNgQ.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    /*{
      name: 'Blog',
      url: '',
    },
    {
      name: 'About',
      url: '',
    },*/
  ],
};

export default data;
