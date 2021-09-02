export default function hander(req, res) {
    res.status(200).json(pricing);
}

const pricing = [
    {
        id: 0,
        plan: 'Individual',
        price: 950,
        setup: 'No setup costs',
        features: {
            website: [
                'Landing page',
                'Single team member',
                'Contact Us',
                'Downloads',
                'Publications',
                'Testimonials',
            ],
            admin: [
                '1 admin access',
                'manage publications',
                'Manage contacts',
                'Manage downloads',
                'Manage testimonials'
            ]
        }
    },
    {
        id: 1,
        plan: 'Small Law Firm',
        price: 2000,
        features: {
            website: [
                'Theme setup fee - 5000 BWP',
                'All website pages',
                'Team page (max 8 members)',
                '8 single team member pages'
            ],
            admin: [
                'All backoffice features',
                '5 normal user logins',
                '1 Admin User logins',
            ]
        }
    },
    {
        id: 2,
        plan: 'Large Law Firm',
        price: 5000,
        features: {
            website: [
                'Theme setup fee - 5000 BWP or',
                'Customization - fee on request',
                'Team page (unlimited)',
                'Unlimited single team member pages'
            ],
            admin: [
                'All backoffice features',
                '10 normal user logins',
                '3 Admin User logins'
            ]
        }
    }
];