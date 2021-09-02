export default function hander(req, res){
    res.status(200).json(features);
}

const features = {
    admin: [
        {
            id: 0,
            title: 'Secure Dashboard',
            image: '',
            description: 'This is the password protected app where your team goes to manage the content of your website and access all the marketing and management tools of our platform.'
        },
        {
            id: 1,
            title: 'Manage Publications',
            image: '',
            description: 'This is where you create content in the form of blog posts, firm news, recent matters and more. This tool is critical as it helps grow the content of your website thus improving your visibility in search engines and provides much needed content for social media engagement.'
        },
        {
            id: 2,
            title: 'Manage Contacts',
            image: '',
            description: 'This tool helps manage your database of business contacts. Contacts can be collected from your website, manually added or imported from a spreadsheet.'
        },
        {
            id: 3,
            title: 'Marketing',
            image: '',
            description: 'This is where you can turn your publications into newsletters and send them out to your database of contacts. The tool has advance feature called ‘Journey’ that can allow you to automate the sending of a series of newsletters of predefined subset of your contacts'
        },
        // {
        //     id: 4,
        //     title: 'Manage Matters',
        //     image: '',
        //     description: 'This is the tool that helps you manage your interaction with your clients. You can create a ‘Matter’ when a client requests a service. Here you can create a checklist of things to be done, you can add various types of activities and assign them a team member and you can even record the time spent on per activity and the associated cost. This tool also provides a summary of time spent with associated total amount to be invoiced.'
        // },
        {
            id: 5,
            title: 'Manage Documents',
            image: '',
            description: 'Every law firm has a handful of legal document forms or templates that they use internally or make it available on their website. This tool helps you do that.'
        },
        {
            id: 6,
            title: 'Manage FAQs',
            image: '',
            description: 'By experience we know the type of questions that new prospects are likely to ask. This tool allows you to be proactive and kind by answering those pressing questions in advance.'
        },
        {
            id: 7,
            title: 'Manage Testimonials',
            image: '',
            description: 'Never miss the opportunity to extract a heartfelt testimonial from a happy client whenever possible. This will be added to your website and to serve as the much needed social proof that new prospects often need in order to make their decision.'
        }
    ],
    website: [
        {
            id: 0,
            title: 'About Us Page',
            image: '',
            description: 'Your company profile page'
        },
        {
            id: 1,
            title: 'Article Pages',
            image: '',
            description: 'Newsletters and blog pages to keep your clients updated on what is relevant and new in your firm'
        },
        {
            id: 2,
            title: 'Team Page',
            image: '',
            description: 'Team page with team contacts to allow your visitors to easily connect with the relevant members of your team'
        },
        {
            id: 3,
            title: 'Practice Areas Page',
            image: '',
            description: 'Highlight your areas of expertise'
        },
        {
            id: 4,
            title: 'Downloads Page',
            image: '',
            description: 'Ggive your clients and visitors free relevant downloadable pdfs to read at their own time'
        },
        {
            id: 5,
            title: 'Subscribe Form',
            image: '',
            description: 'Allow your visitors to opt into receiving updates about your business straight to their inbox'
        },
        {
            id: 6,
            title: 'Contact Page',
            image: '',
            description: 'Includes a contact form to enable your visitors to easily get in touch with you.'
        }
    ]
}