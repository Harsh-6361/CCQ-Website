"use client"

import type React from "react"
import { cn } from "@/lib/utils"
// Frontend
import { FaReact, FaJs, FaHtml5, FaCss3, FaChartBar } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMui, SiPwa, SiD3Dotjs, SiChartdotjs } from "react-icons/si";
// Backend
import { FaNodeJs, FaPython, FaLock, FaKey, FaUserShield } from "react-icons/fa";
import { SiDjango, SiFastapi, SiNestjs, SiGraphql, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";
// Database
import { SiPostgresql, SiMysql, SiMongodb, SiRedis } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
// AI & Data
import { SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiHuggingface, SiOpencv, SiApacheairflow, SiApachespark, SiMlflow } from "react-icons/si";
// Cloud & DevOps
import { FaDocker, FaAws, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";
import { SiKubernetes, SiGithubactions, SiTerraform, SiPrometheus, SiGrafana } from "react-icons/si";
// Security
import { SiLetsencrypt, SiOwasp, SiVault } from "react-icons/si";
import { FaShieldAlt, FaFileContract } from "react-icons/fa";
// Testing & QA
import { SiPytest, SiJest, SiPostman, SiApachejmeter, SiK6, SiSonarqube } from "react-icons/si";
// Docs
import { SiSwagger } from "react-icons/si";
import { FaBook, FaProjectDiagram } from "react-icons/fa";

import Marquee from "react-fast-marquee";

interface Logo {
    id: string
    name: string
    icon?: React.ComponentType<{ className?: string; size?: number }>
    text?: string
}

export default function ScrollingLogos({ className }: { className?: string }) {

    const rows = [
        // Row 1: Frontend & Backend
        {
            title: "Frontend & Backend Engineering",
            speed: 40,
            direction: "left" as const,
            logos: [
                { id: "react", name: "React", icon: FaReact },
                { id: "next", name: "Next.js", icon: SiNextdotjs },
                { id: "ts", name: "TypeScript", icon: SiTypescript },
                { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss },
                { id: "mui", name: "Material UI", icon: SiMui },
                { id: "pwa", name: "PWA", icon: SiPwa },
                { id: "node", name: "Node.js", icon: FaNodeJs },
                { id: "nestjs", name: "NestJS", icon: SiNestjs },
                { id: "django", name: "Django", icon: SiDjango },
                { id: "fastapi", name: "FastAPI", icon: SiFastapi },
                { id: "graphql", name: "GraphQL", icon: SiGraphql },
                { id: "rest", name: "REST APIs", icon: TbApi },
            ]
        },
        // Row 2: AI, Data & Research
        {
            title: "AI, Data & Research",
            speed: 50,
            direction: "right" as const,
            logos: [
                { id: "python", name: "Python", icon: FaPython },
                { id: "numpy", name: "NumPy", icon: SiNumpy },
                { id: "pandas", name: "Pandas", icon: SiPandas },
                { id: "pytorch", name: "PyTorch", icon: SiPytorch },
                { id: "tensorflow", name: "TensorFlow", icon: SiTensorflow },
                { id: "huggingface", name: "HuggingFace", icon: SiHuggingface },
                { id: "opencv", name: "OpenCV", icon: SiOpencv },
                { id: "airflow", name: "Airflow", icon: SiApacheairflow },
                { id: "spark", name: "Spark", icon: SiApachespark },
                { id: "postgres", name: "PostgreSQL", icon: SiPostgresql },
                { id: "mongo", name: "MongoDB", icon: SiMongodb },
                { id: "redis", name: "Redis", icon: SiRedis },
            ]
        },
        // Row 3: Cloud, Security & QA
        {
            title: "Cloud, Security & QA",
            speed: 40,
            direction: "left" as const,
            logos: [
                { id: "docker", name: "Docker", icon: FaDocker },
                { id: "k8s", name: "Kubernetes", icon: SiKubernetes },
                { id: "aws", name: "AWS", icon: FaAws },
                { id: "gcp", name: "Google Cloud", icon: FaGoogle },
                { id: "azure", name: "Azure", icon: FaMicrosoft },
                { id: "terraform", name: "Terraform", icon: SiTerraform },
                { id: "github", name: "GitHub Actions", icon: SiGithubactions },
                { id: "https", name: "HTTPS/TLS", icon: FaLock },
                { id: "owasp", name: "OWASP", icon: SiOwasp },
                { id: "pytest", name: "PyTest", icon: SiPytest },
                { id: "jest", name: "Jest", icon: SiJest },
                { id: "postman", name: "Postman", icon: SiPostman },
                { id: "sonar", name: "SonarQube", icon: SiSonarqube },
            ]
        }
    ];

    return (
        <div className={cn("relative w-full space-y-6", className)}>
            {rows.map((row, index) => (
                <div key={index} className="space-y-2">
                    {/* Optional Row Title - Commented out for cleaner look, enables if needed via a prop */}
                    {/* <h4 className="text-center text-xs font-bold text-gray-600 uppercase tracking-widest">{row.title}</h4> */}

                    <Marquee
                        speed={row.speed}
                        direction={row.direction}
                        gradient={true}
                        gradientColor="black"
                        gradientWidth={100}
                        className="py-1 overflow-hidden"
                    >
                        <div className="flex items-center gap-8 px-6">
                            {row.logos.map((logo) => (
                                <div key={logo.id} className="flex flex-col items-center gap-2 group px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-default">
                                    {logo.icon && (
                                        <logo.icon
                                            className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
                                            size={24}
                                        />
                                    )}
                                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-wider whitespace-nowrap">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            ))}

            {/* Global Gradient Overlays (Optional, Marquee has built-in gradient but these can add extra depth) */}
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" /> */}
        </div>
    )
}
