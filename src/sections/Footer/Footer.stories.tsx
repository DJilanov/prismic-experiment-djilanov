import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const logoSrc = '/logo.png';
const whatsappSrc = '/whatsapp.png';

const getLink = (linkObj: { de: string; en: string }) => linkObj.de;

// Mock translation function
const mockTranslation = (key: string) => {
    const translations: Record<string, string> = {
        'footer.ForAWorld': 'For a world where everyone can make it.',
        'footer.LookingForWork': 'Looking for Work?',
        'footer.LookForJobs': 'Check out our jobs',
        'footer.CreateOwnImpact': 'Create Your Own Impact',
        'footer.HireAsACompany': 'Hire as a Company',
        'footer.Donate': 'Donate',
        'footer.Careers': 'Careers',
        'footer.OurWork': 'Our Work',
        'footer.AboutUs': 'About Us',
        'footer.Press': 'Press',
        'footer.DiversityManagement': 'Impact Center',
        'footer.FollowUs': 'Follow Us',
        'footer.Imprint': 'Imprint',
        'footer.DataPrivacy': 'Data Privacy',
        'footer.Whistleblowing': 'Whistleblowing',
    };
    return translations[key] || key;
};

const meta = {
    title: 'components/Footer',
    component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
    args: {
        t: mockTranslation,
        getLink: getLink,
        logoSrc: logoSrc,
        whatsappSrc: whatsappSrc,
    },
};
