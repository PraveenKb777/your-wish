export interface Review {
    author: string;
    content: string;
    rating: number;
    authorRole:string;
} 
 
 const CONTENT = {
    home :{
        heroSection:{
            title:"Unlock Your Potential.",
            subTitle:"Expand Your Business.",
            content:"Create Beautiful Membership Sites to Sell your Courses or any other products using the Luma Template for Framer. Utilize FramerAuth and LemonSqueezy for seamless integration & user experience.",
            actionButtonLabel:"Explore what we have"
        },
        reviewsSection :{
            allReviews :[
                {
                    author:"Praveen",
                    authorRole:"Freelance Designer",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:4.3,
                },
                {
                    author:"Roobun",
                    authorRole:"Freelance Developer",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:5,
                },
                {
                    author:"VJ naveen",
                    authorRole:"DB Designer",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:4.7,
                },
                {
                    author:"Rooba",
                    authorRole:"Freelance DA ",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:4.9,
                },
                {
                    author:"Shuba",
                    authorRole:"DA Designer",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:4,
                },
                {
                    author:"Shilpa",
                    authorRole:"Freelance QA",
                    content:"I recently used the Luma Framer Template for my course/membership site and it exceeded my expectations. The template's clean and sleek design enhanced the overall user experience, while its intuitive layout made content organization a breeze.",
                    rating:4.4,
                },
            ]  as Review[],
        },
        featuredCourse:{
            title:"Featured Courses",
            buttonLabel:"View Course",
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
                ]
                
            }
    }
}

export default CONTENT