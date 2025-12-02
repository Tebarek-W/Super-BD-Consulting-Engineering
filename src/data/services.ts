import { Layers, Beaker, Truck, HardHat, FileText, Activity, Mountain, Droplets } from "lucide-react";

export const services = [
    {
        id: "soil-investigation",
        title: "Soil Investigation",
        slug: "soil-investigation",
        icon: Layers,
        shortDescription: "Comprehensive soil analysis for foundation design and stability assessments.",
        fullDescription: "Our soil investigation services provide the critical data needed for safe and economical foundation design. We employ both field and laboratory testing methods to determine the physical and mechanical properties of soil.",
        image: "/images/soil-investigation.jpg",
        features: [
            "Standard Penetration Test (SPT)",
            "Cone Penetration Test (CPT)",
            "Plate Load Test",
            "Triaxial Shear Test",
            "Consolidation Test",
            "Atterberg Limits & Grain Size Analysis"
        ]
    },
    {
        id: "concrete-testing",
        title: "Concrete Testing",
        slug: "concrete-testing",
        icon: Beaker,
        shortDescription: "Quality control testing for concrete mixes, strength, and durability.",
        fullDescription: "We offer a full range of concrete testing services to ensure structural integrity and compliance with design specifications. From fresh concrete testing to hardened concrete analysis, we cover it all.",
        image: "/images/concrete-testing.jpg",
        features: [
            "Compressive Strength Test",
            "Flexural Strength Test",
            "Slump Test",
            "Mix Design Optimization",
            "Non-Destructive Testing (Schmidt Hammer)",
            "Core Extraction & Testing"
        ]
    },
    {
        id: "asphalt-testing",
        title: "Asphalt & Aggregate",
        slug: "asphalt-testing",
        icon: Truck,
        shortDescription: "Testing of aggregates, asphalt, and road construction materials.",
        fullDescription: "Our asphalt and aggregate testing services are essential for road construction projects. We ensure materials meet the rigorous standards required for durable pavements.",
        image: "/images/asphalt-aggregate.jpg",
        features: [
            "Marshall Stability & Flow",
            "Bitumen Content Extraction",
            "Aggregate Gradation",
            "Los Angeles Abrasion Value",
            "Aggregate Impact Value (AIV)",
            "Flakiness & Elongation Index"
        ]
    },
    {
        id: "geotechnical-investigation",
        title: "Geotechnical Investigation",
        slug: "geotechnical-investigation",
        icon: Activity,
        shortDescription: "In-depth subsurface exploration for bridges, dams, and buildings.",
        fullDescription: "We conduct detailed geotechnical investigations for major infrastructure projects. Our reports provide comprehensive recommendations for foundation types, bearing capacity, and settlement analysis.",
        image: "/images/geotechnical-investigation.jpg",
        features: [
            "Deep Drilling & Sampling",
            "Rock Coring & Quality Designation (RQD)",
            "Slope Stability Analysis",
            "Foundation Recommendations",
            "Geophysical Surveys",
            "Groundwater Monitoring"
        ]
    },
    {
        id: "environmental-testing",
        title: "Environmental Testing",
        slug: "environmental-testing",
        icon: Droplets,
        shortDescription: "Testing for environmental compliance and soil/water contamination.",
        fullDescription: "We provide environmental testing services to assess soil and water quality, ensuring compliance with environmental regulations and safety standards.",
        image: "/images/hero-bridge.png",
        features: [
            "Soil Chemical Analysis",
            "Water Quality Testing (pH, Sulfates, Chlorides)",
            "Contamination Assessment",
            "Environmental Impact Assessment Support"
        ]
    },
    {
        id: "consultancy",
        title: "Consultancy & Reporting",
        slug: "consultancy",
        icon: FileText,
        shortDescription: "Expert engineering advice, data interpretation, and technical reporting.",
        fullDescription: "Beyond testing, we offer expert consultancy services. Our senior engineers interpret complex data to provide actionable insights and cost-effective engineering solutions.",
        image: "/images/hero-building.png",
        features: [
            "Geotechnical Design Reports",
            "Material Quality Assurance Plans",
            "Pavement Design (Flexible & Rigid)",
            "Failure Investigation & Forensics",
            "Technical Training & Workshops"
        ]
    }
];
