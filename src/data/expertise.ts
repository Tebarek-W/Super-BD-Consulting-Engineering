import { LucideIcon, Layers, Beaker, Activity, Truck, HardHat, FileText } from "lucide-react";

export interface ExpertiseArea {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    heroImage: string;
    cardImage: string;
    features: string[];
    gallery: string[];
    process: string[];
}

export const expertiseAreas: ExpertiseArea[] = [
    {
        slug: "soil-investigation",
        title: "Soil Investigation",
        shortDescription: "Comprehensive soil analysis for foundation design and stability assessments.",
        fullDescription: "Our soil investigation services provide critical data for safe and economical foundation design. Using advanced field and laboratory techniques, we analyze soil properties, bearing capacity, and settlement characteristics to ensure your structure is built on solid ground. Our experienced geotechnical engineers conduct thorough subsurface explorations tailored to your project's specific requirements.",
        icon: Layers,
        heroImage: "/images/Soil_Investigation.png",
        cardImage: "/images/Soil_Investigation.png",
        features: [
            "Borehole drilling and soil sampling",
            "Standard Penetration Test (SPT) and Cone Penetration Test (CPT)",
            "Bearing capacity analysis",
            "Settlement prediction and analysis",
            "Soil classification and profiling",
            "Foundation design recommendations"
        ],
        gallery: [
            "/images/expertise-soil-1.jpg",
            "/images/expertise-soil-2.jpg",
            "/images/expertise-soil-3.jpg"
        ],
        process: [
            "Site reconnaissance and planning",
            "Borehole drilling and sampling",
            "Laboratory testing of soil samples",
            "Data analysis and interpretation",
            "Report preparation with recommendations"
        ]
    },
    {
        slug: "concrete-testing",
        title: "Concrete Testing",
        shortDescription: "Quality control testing for concrete mixes, strength, and durability.",
        fullDescription: "Ensure the quality and durability of your concrete structures with our comprehensive testing services. We perform rigorous tests on fresh and hardened concrete to verify compliance with project specifications and international standards. Our state-of-the-art laboratory is equipped to handle all types of concrete testing, from basic compressive strength to advanced durability assessments.",
        icon: Beaker,
        heroImage: "/images/concrete-testing.jpg",
        cardImage: "/images/concrete-testing.jpg",
        features: [
            "Compressive strength testing",
            "Slump and workability tests",
            "Concrete mix design and optimization",
            "Core sampling and testing",
            "Durability testing (permeability, chloride content)",
            "Non-destructive testing (NDT)"
        ],
        gallery: [
            "/images/expertise-concrete-1.jpg",
            "/images/expertise-concrete-2.jpg",
            "/images/expertise-concrete-3.jpg"
        ],
        process: [
            "Fresh concrete sampling",
            "Specimen preparation and curing",
            "Testing at specified ages (7, 14, 28 days)",
            "Data analysis and quality assessment",
            "Compliance reporting and certification"
        ]
    },
    {
        slug: "geotechnical-investigation",
        title: "Geotechnical Investigation",
        shortDescription: "In-depth subsurface exploration for bridges, dams, and buildings.",
        fullDescription: "Our geotechnical investigation services provide comprehensive subsurface data essential for major infrastructure projects. We conduct detailed explorations for bridges, dams, highways, and high-rise buildings, analyzing soil and rock properties to identify potential challenges and optimize design. Our multidisciplinary team combines field expertise with advanced laboratory analysis to deliver reliable, actionable recommendations.",
        icon: Activity,
        heroImage: "/images/geotechnical-investigation.jpg",
        cardImage: "/images/geotechnical-investigation.jpg",
        features: [
            "Deep borehole drilling (up to 50m depth)",
            "Rock coring and classification",
            "In-situ testing (SPT, CPT, pressuremeter)",
            "Groundwater level monitoring",
            "Slope stability analysis",
            "Seismic site classification"
        ],
        gallery: [
            "/images/expertise-geotech-1.jpg",
            "/images/expertise-geotech-2.jpg",
            "/images/expertise-geotech-3.jpg"
        ],
        process: [
            "Preliminary desk study and site visit",
            "Geophysical surveys and trial pits",
            "Borehole drilling and sampling",
            "Laboratory testing program",
            "Engineering analysis and modeling",
            "Comprehensive reporting with design parameters"
        ]
    },
    {
        slug: "material-testing",
        title: "Material Testing",
        shortDescription: "Testing of aggregates, asphalt, and other construction materials.",
        fullDescription: "Quality construction starts with quality materials. Our material testing laboratory evaluates aggregates, asphalt, soil, and other construction materials to ensure they meet project specifications and industry standards. We provide timely, accurate test results that help contractors and developers maintain quality control throughout the construction process.",
        icon: Truck,
        heroImage: "/images/services-photo.jpg",
        cardImage: "/images/services-photo.jpg",
        features: [
            "Aggregate gradation and quality testing",
            "Asphalt binder and mix design testing",
            "Soil compaction and California Bearing Ratio (CBR)",
            "Moisture content and Atterberg limits",
            "Proctor compaction tests",
            "Material certification and compliance testing"
        ],
        gallery: [
            "/images/expertise-material-1.jpg",
            "/images/expertise-material-2.jpg",
            "/images/expertise-material-3.jpg"
        ],
        process: [
            "Material sampling (field or delivered)",
            "Sample preparation and conditioning",
            "Testing per ASTM/AASHTO standards",
            "Quality control analysis",
            "Certification and reporting"
        ]
    },
    {
        slug: "consultancy",
        title: "Consultancy",
        shortDescription: "Expert engineering advice and technical reporting for complex projects.",
        fullDescription: "Leverage our decades of engineering expertise for your most challenging projects. Our consultancy services cover all aspects of geotechnical and materials engineering, from initial feasibility studies to construction oversight. We provide independent, expert advice that helps clients make informed decisions, mitigate risks, and optimize project outcomes.",
        icon: HardHat,
        heroImage: "/images/hero-building.png",
        cardImage: "/images/hero-building.png",
        features: [
            "Geotechnical feasibility studies",
            "Foundation design review and optimization",
            "Construction method recommendations",
            "Risk assessment and mitigation strategies",
            "Value engineering analysis",
            "Expert witness services"
        ],
        gallery: [
            "/images/expertise-consult-1.jpg",
            "/images/expertise-consult-2.jpg",
            "/images/expertise-consult-3.jpg"
        ],
        process: [
            "Project scope definition and planning",
            "Site assessment and data review",
            "Engineering analysis and evaluation",
            "Recommendations and design optimization",
            "Implementation support and monitoring"
        ]
    },
    {
        slug: "reporting",
        title: "Reporting",
        shortDescription: "Detailed data interpretation and certification for regulatory compliance.",
        fullDescription: "Clear, comprehensive reporting is essential for project success and regulatory compliance. We deliver detailed technical reports that translate complex geotechnical and materials data into actionable insights. Our reports meet all regulatory requirements and are designed for easy interpretation by engineers, contractors, and regulatory authorities.",
        icon: FileText,
        heroImage: "/images/hero-bridge.png",
        cardImage: "/images/hero-bridge.png",
        features: [
            "Geotechnical investigation reports",
            "Material test certificates",
            "Foundation design recommendations",
            "Construction quality assurance reports",
            "Regulatory compliance documentation",
            "Digital report delivery and archiving"
        ],
        gallery: [
            "/images/expertise-report-1.jpg",
            "/images/expertise-report-2.jpg",
            "/images/expertise-report-3.jpg"
        ],
        process: [
            "Data compilation and verification",
            "Engineering analysis and interpretation",
            "Report drafting with recommendations",
            "Internal technical review",
            "Final report delivery and presentation"
        ]
    }
];

export function getExpertiseBySlug(slug: string): ExpertiseArea | undefined {
    return expertiseAreas.find(area => area.slug === slug);
}

export function getAllExpertiseSlugs(): string[] {
    return expertiseAreas.map(area => area.slug);
}
