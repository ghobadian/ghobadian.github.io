<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 20px;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h1 {
            margin-bottom: 10px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        .tag {
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 5px 5px 0 0;
        }
        .item a {
            text-decoration: none;
        }
        .tag:hover {
            color: var(--accent-color);
            border-color: var(--accent-color);
        }
        .item {
            margin-bottom: 15px;
        }
        .item h2 {
            margin: 5px 0;
        }
        .item h3 {
            margin: 2px 0;
        }
        .item span {
            font-size: 18px;
            color: gray;
        }
        .item ul {
            padding-left: 15px;
        }
        .hr {
            border: none; 
            border-top: 2px dashed gray;
            margin: 0;
        }
        @media (max-width: 768px) {
            .container {
                grid-template-columns: 1fr;
            }
            .section h1 {
                font-size: 1.2rem;
            }
            .item span {
                font-size: 16px;
            }
            .tag {
                font-size: 14px;
                padding: 3px 8px;
            }
        }
        @media (max-width: 480px) {
            .section h1 {
                font-size: 1rem;
            }
            .item span {
                font-size: 14px;
            }
            .tag {
                font-size: 12px;
                padding: 2px 6px;
            }
            .container {
                padding: 10px;
            }
            .item h2 {
                font-size: 1rem;
            }
            .item h3 {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div>
        <div class="section">
            <h1>SUMMARY</h1>
            <p>Mid Software Developer with over <b>2 years</b> of expertise in developing robust enterprise applications, specializing in <b>microservices</b> architecture and <b>CaaS</b> infrastructure. Proﬁcient in enhancing application quality and development speed through integration of <b>TDD</b> and <b>Design Patterns</b> in timely manner by following <b>agile</b> methodologies. Adept in <b>Dev/Ops</b> practices and skilled in establishing <b>CI/CD</b> pipelines.</p>
        </div>
        <div class="section">
            <h1>EXPERIENCE</h1>
            <div class="item">
                <h2>Mid Java Developer</h2>
                <h3 ><a href="https://dotin.ir">Dotin</a></h3>
                <span>Nov 2024 – Present (5m) | Tehran, Iran</span>
                <ul>
                    <li>
                        • Developed banking switch solutions handling transactions coming from all banks connected to SHETAB
                    </li>
                    <li>
                        • Dockerised 6 interconnected switching apps in colaboration with Dev/Ops Team
                    </li>
                    <li>
                        • Gave 2 Presentations to familiarize other teams with FIRST principle and containerization concept
                    </li>
                </ul>
            </div>
            <hr class="hr">
            <div class="item">
                <h2>Java Developer</h2>
                <h3><a href="https://sobhan.tech/">Sobhan Tech</a></h3>
                <span>July 2022 – Oct 2023 (1y 4m) | Isfahan, Iran</span>
                <ul>
                    <li>
                        • Increased performance of legacy code by 10% by optimizing duplicate SQL queries
                    </li>
                    <li>
                        • Implemented the backend of shopiway.ir, laying the groundwork for user registration, product catalog, and checkout processes, resulting in a 10% faster launch
                    </li>
                    <li>
                        • Extended features of zaberin.ir, improving product accuracy by 20%, and reducing API response times by using cache
                    </li>
                </ul>
            </div>
        </div>
        <div class="section">
            <h1>EDUCATION</h1>
            <div class="item">
                <h2>B.Sc. in Computer Engineering</h2>
                <h3 ><a href="https://en.kntu.ac.ir">K.N. Toosi University of Technology</a></h3>
                <span>Sept 2021 – Present | Tehran, Iran</span>
                <p>Mentored CE freshmen (and women) in courses:</p>
                <ul><li>• Advanced Programming (Java)</li><li>• Fundamentals of Programming (C)</li></ul>
            </div>
        </div>
    </div>
    <div>
        <!-- Skills Section -->
        <div class="section">
            <h1>SKILLS</h1>
            <div style="margin-bottom: 10px;">
                <span class="tag">Java</span>
                <span class="tag">Spring</span>
                <span class="tag">Micro-services</span>
                <span class="tag">Dev/Ops</span>
                <span class="tag">Design Patterns</span>
                <span class="tag">OOP</span>
                <span class="tag">TDD</span>
                <span class="tag">SQL</span>
            </div>
            <div>
                <span class="tag">Perseverance</span>
                <span class="tag">Teamwork</span>
                <span class="tag">Problem Solving</span>
                <span class="tag">Organization</span>
                <span class="tag">Time Management</span>
                <span class="tag">Confidence</span>
            </div>
        </div>
        <div class="section">
            <h1>PROJECTS</h1>
            <div class="item">
                <h2><a href="https://github.com/ghobadian/golestan">Grading & Course Management App</a></h2>
                <span>Open Source Contribution</span>
                <p>Developed a grading and course management system for university students with help of Spring Boot.</p>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://github.com/ghobadian/SimpleMessanger">CLI Chat App</a></h2>
                <span>Open Source Contribution</span>
                <p>Coded an online chatting app using socket programming and client-server architecture.</p>
            </div>
        </div>
        <div class="section">
            <h1>CERTIFICATES</h1>
            <div class="item">
                <h2><a href="https://quera.org/certificate/mqSpYJIY/">Advanced Algorithmic Thinking And Data Structure</a></h2>
                <h3>Quera</h3>
                <span>Dec 2024</span>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://www.coursera.org/account/accomplishments/verify/16C32QLBKURP">Building Scalable Java Microservices with Spring Boot and Spring Cloud</a></h2>
                <h3>Google Cloud</h3>
                <span>Aug 2024</span>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://university.redis.com/certificates/a6d6561bb5844056911f177966a74d3b">Redis for Java Developers</a></h2>
                <h3>Redis University</h3>
                <span>Sept 2024</span>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://maktabkhooneh.org/certificates/MK-9826SE/">Network Principles</a></h2>
                <h3>Maktabkhooneh</h3>
                <span>Aug 2024</span>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://www.hackerrank.com/certificates/21a5a3247803">SQL Intermediate</a></h2>
                <h3>HackerRank</h3>
                <span>Aug 2024</span>
            </div>
        </div>
    </div>
</div>
<br>
</body>
</html>
