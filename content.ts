export interface Review {
    author: string;
    content: string;
    rating: number;
    authorRole: string;
}

const CONTENT = {
    home: {
        heroSection: {
            title: "Unlock Your Potential.",
            subTitle: "Expand Your Business.",
            content: "Create Beautiful Membership Sites to Sell your Courses or any other products using the Luma Template for Framer. Utilize FramerAuth and LemonSqueezy for seamless integration & user experience.",
            actionButtonLabel: "Explore what we have"
        },
        reviewsSection: {
            allReviews: [
                {
                    author: "Praveen",
                    authorRole: "Freelance Designer",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 4.3,
                },
                {
                    author: "Roobun",
                    authorRole: "Freelance Developer",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 5,
                },
                {
                    author: "VJ naveen",
                    authorRole: "DB Designer",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 4.7,
                },
                {
                    author: "Rooba",
                    authorRole: "Freelance DA ",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 4.9,
                },
                {
                    author: "Shuba",
                    authorRole: "DA Designer",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 4,
                },
                {
                    author: "Shilpa",
                    authorRole: "Freelance QA",
                    content: "I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating: 4.4,
                },
            ] as Review[],
        },
        featuredCourse: {
            title: "Featured Courses",
            buttonLabel: "View Course",
            cardContent:
                [
                    {
                        "title": "Introduction to Python",
                        "name": "John Doe",
                        "description": "A comprehensive course that introduces the basics of Python programming. Learn syntax, data structures, and basic algorithms."
                    },
                    {
                        "title": "Advanced JavaScript",
                        "name": "Jane Smith",
                        "description": "An in-depth look into advanced JavaScript concepts including ES6, asynchronous programming, and JavaScript frameworks."
                    },
                    {
                        "title": "Data Science with R",
                        "name": "Alice Johnson",
                        "description": "Explore data analysis, statistical models, and visualization techniques using R programming. Ideal for aspiring data scientists."
                    },

                ]

        },
        teamDetails: {
            buttonLabel: "About",
            cardContent: [
                {
                    "firstName": "John",
                    "lastName": "Doe",
                    "role": "Software Developer",
                    "description": "John Doe is an experienced software developer with a passion for building applications",
                    "briefDescription": "John Doe is an experienced software developer with a strong background in building robust applications using Python and JavaScript. He has over 5 years of hands-on experience in backend development, API integrations, and database management. John is known for his expertise in designing scalable architectures and optimizing code efficiency. His technical skills include proficiency in frameworks like Django and Flask, as well as modern frontend technologies such as React and Vue.js. John is committed to delivering high-quality solutions that meet both client requirements and industry standards."
                },
                {
                    "firstName": "Jane",
                    "lastName": "Smith",
                    "role": "Senior Frontend Engineer",
                    "description": "Jane Smith is a senior frontend engineer with a strong background in modern JavaScript and responsive web design.",
                    "briefDescription": "Jane Smith is a senior frontend engineer specializing in building responsive and user-friendly web applications using modern JavaScript frameworks. With extensive experience in frontend development, Jane has led and contributed to numerous successful projects, focusing on optimizing performance and enhancing user experience. Her technical skills include proficiency in frameworks like React, Angular, and Vue.js, as well as expertise in CSS preprocessors like Sass and LESS. Jane is passionate about creating intuitive interfaces and ensuring seamless interactions between users and applications."
                },
                {
                    "firstName": "Alice",
                    "lastName": "Johnson",
                    "role": "Data Scientist",
                    "description": "Alice Johnson is a data scientist with a PhD in Statistics and extensive experience in analyzing complex datasets.",
                    "briefDescription": "Alice Johnson is a highly skilled data scientist specializing in analyzing complex datasets and deriving actionable insights. With a PhD in Statistics and hands-on experience in machine learning algorithms, predictive modeling, and data visualization, Alice has a proven track record of delivering impactful solutions. She is proficient in programming languages like R and Python, with expertise in statistical analysis, regression models, and clustering techniques. Alice is dedicated to leveraging data-driven approaches to solve real-world problems and drive business success through informed decision-making."
                }
            ]
        }
    },
    contactUS: {
        FAQ: [
            {
                "question": "What services do you offer?",
                "answer": "We offer a comprehensive range of IT services including website development, mobile application development, UI/UX design, and more."
            },
            {
                "question": "Do you provide website development services?",
                "answer": "Yes, we specialize in custom website development tailored to meet your business needs."
            },
            {
                "question": "Can you build mobile applications?",
                "answer": "Absolutely! We develop native and cross-platform mobile applications for various operating systems."
            },
            {
                "question": "How do you approach UI/UX design for projects?",
                "answer": "Our approach to UI/UX design focuses on creating intuitive and visually appealing interfaces that enhance user experience."
            },
            {
                "question": "What technologies do you specialize in?",
                "answer": "We specialize in a wide array of technologies including but not limited to React, Angular, Node.js, Python, and more."
            },
            {
                "question": "Do you offer support after project completion?",
                "answer": "Yes, we provide ongoing maintenance and support services to ensure your project runs smoothly post-launch."
            },
            {
                "question": "Can you integrate third-party APIs into projects?",
                "answer": "Certainly! We have extensive experience in integrating various third-party APIs to enhance the functionality of your applications."
            },
            {
                "question": "What is your typical project timeline?",
                "answer": "Project timelines vary depending on the scope and complexity, but we strive to deliver projects within agreed-upon timelines."
            },
            {
                "question": "How do you ensure the security of client data?",
                "answer": "We follow industry best practices for data security, including encryption, access controls, and regular security audits."
            },
            {
                "question": "Do you provide hosting solutions also?",
                "answer": "Yes, we offer reliable hosting solutions tailored to meet the specific requirements of your websites and applications."
            }
        ]
    }
}

export default CONTENT