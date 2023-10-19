/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            screens: {
                sm: "992px"
            },
            spacing: {
                headerHeight: "3rem",

                //Margin Custom Css

                0.25: "0.25rem",
                0.5: "0.5rem",
                0.75: "0.75rem",
                1: "1rem",
                1.5: "1.5rem",
                2: "2rem",
                2.5: "2.5rem",
                3: "3rem"
            },
            colors: {
                titleColor: "hsl(0,0%,20%)",
                titleColorDark: "hsl(0,0%,0%)",
                textColor: "hsl(0,0%,46%)",
                bodyColor: "hsl(0,0%,98%)",
                containerColor: "#fff"
            },
            fontSize: {
                big: [
                    "3.5rem",
                    {
                        sm: "2.75rem"
                    }
                ],
                h1: [
                    "2.25rem",
                    {
                        sm: "1.5rem"
                    }
                ],
                h2: [
                    "1.5rem",
                    {
                        sm: "1.25rem"
                    }
                ],
                h3: [
                    "1.25rem",
                    {
                        sm: "1rem"
                    }
                ],
                normal: [
                    "1rem",
                    {
                        sm: "0.938rem"
                    }
                ],
                small: [
                    "0.875rem",
                    {
                        sm: "0.813rem"
                    }
                ],
                smaller: [
                    "0.813rem",
                    {
                        sm: "0.75rem"
                    }
                ],
                tiny: "0.625rem"
            },
            fontWeight: {
                normal: 400,
                medium: 500,
                semiBold: 600
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"]
            }
        }
    },
    plugins: []
};
