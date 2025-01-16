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
            border-color: var(--accent-color)
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
    </style>
</head>
<body>
<div class="container">
    <div>
        <div class="section">
            <h1>SUMMARY</h1>
            <p>Junior Software Developer with over 2 years of expertise in developing robust Restful applications, specializing in micro-services architecture and cloud infrastructure. Proficient in enhancing application performance through the integration of advanced technologies. Adept in DevOps practices and skilled in establishing efficient CI/CD pipelines.</p>
        </div>
        <div class="section">
            <h1>EXPERIENCE</h1>
            <div class="item">
                <h2>Java Developer</h2>
                <h3 ><a  href="https://dotin.ir">Dotin</a></h3>
                <span>Nov 2024 – Present (2m) | Tehran, Iran</span>
                <ul>
                    <li>
                        Developing switch banking solutions
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
                        Increased performance of legacy code by 10% by optimizing duplicate SQL queries
                    </li>
                    <li>
                        Implemented the backend of shopiway.ir, laying the groundwork for user registration, product catalog, and checkout processes, resulting in a 10% faster launch
                    </li>
                    <li>
                        Extended features of zaberin.ir, improving product accuracy by 20%, and reducing API response times by using cache
                    </li>
                </ul>
            </div>
        </div>
        <div class="section">
            <h1>EDUCATION</h1>
            <div class="item">
                <h2>B.Sc. in Computer Engineering</h2>
                <h3 ><a  href="https://en.kntu.ac.ir">K.N. Toosi University of Technology</a></h3>
                <span>Sept 2021 – Present | Tehran, Iran</span>
                <p>Helped CE freshmen (and women) understand fundamentals of programming and OOP better.</p>
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
                <span class="tag">Git</span>
                <span class="tag">SQL</span>
                <span class="tag">OOP</span>
                <span class="tag">CI/CD</span>
                <span class="tag">TDD</span>
                <span class="tag">Redis</span>
                <span class="tag">MongoDB</span>
            </div>
            <div>
                <span class="tag">Problem Solving</span>
                <span class="tag">Teamwork</span>
                <span class="tag">Perseverance</span>
                <span class="tag">Organization</span>
                <span class="tag">Time Management</span>
                <span class="tag">Confidence</span>
            </div>
        </div>
        <div class="section">
            <h1>PROJECTS</h1>
            <div class="item">
                <h2><a href="https://github.com/ghobadian/golestan">Simple Grading & Course Management System</a></h2>
                <span>Open Source Contribution</span>
                <p>Developed backend for a grading and course management system for university students.</p>
            </div>
            <hr class="hr">
            <div class="item">
                <h2><a href="https://github.com/ghobadian/SimpleMessanger">Simple Chat App</a></h2>
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
