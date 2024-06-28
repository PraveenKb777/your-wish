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
    }
}

export default CONTENT