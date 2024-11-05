import {
  PhantomLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alex Kroeger",
  initials: "AK",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/SanFrancisco",
  about:
    "Backend Engineer",
  summary:
    "I'm a software engineer working at Circle. In my free time you can find me swimming in the San Francisco Bay, birding, or playing chess.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13876978?v=4",
  personalWebsiteUrl: "https://alexkroeger.com",
  contact: {
    email: "me@alexkroeger.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alexkroeger",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexkroeger/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/alex_kroeger",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Notre Dame",
      degree: "Bachelor's Degree in Finance and Economics",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Circle",
      link: "https://www.circle.com/",
      badges: [],
      title: "Senior Software Engineer",
      start: "Feb 2024",
      end: "Present",
      description:
        "Software engineer on the special projects team.",
    },
    {
      company: "Phantom",
      link: "https://phantom.app",
      badges: [],
      logo: PhantomLogo,
      title: "Senior Backend Engineer",
      start: "Feb 2022",
      end: "May 2023",
      description:
        "Built the first backend services for Phantom to improve app performance and unlock new features.",
    },
    {
      company: "a16z",
      link: "https://a16z.com/",
      badges: [],
      title: "Protocol Specialist",
      start: "Aug 2021",
      end: "Nov 2021",
      description:
        "Engaged with governance for crypto protocols in a16z’s portfolio, including Uniswap and Compound.",
    },
    {
      company: "0x",
      link: "https://0x.org/",
      badges: [],
      title: "Software Engineer, Data Scientist",
      start: "May 2019",
      end: "Aug 2021",
      description:
        "Built tools for professional market makers to provide liquidity to 0x API users.",
    },
    {
      company: "Coinbase",
      link: "https://www.coinbase.com",
      badges: [],
      title: "Data Scientist",
      start: "Feb 2018",
      end: "Apr 2019",
      description:
        "Supported Coinbase Pro (the exchange product) by informing product decisions with data.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "Solidity",
    "Terraform",
  ],
  projects: [
    {
      title: "Birds of SF",
      techStack: [
        "Side Project",
        "Node.js",
      ],
      description: "An automated Twitter feed of rare bird sightings in SF.",
      link: {
        label: "birds of SF",
        href: "https://x.com/birdsofSF",
      },
    },
    {
      title: "Updating the Ethereum Yellow Paper",
      techStack: [
        "Side Project",
        "EVM",
        "Technical Writing",
      ],
      description: "Updated the Ethereum Yellow Paper for the London, Arrow Glacier, Gray Glacier, and Paris upgrades.",
      link: {
        label: "ETH Yellow Paper",
        href: "https://github.com/ethereum/yellowpaper",
      },
    },
  ],
  swimming: [
    {
      name: "Dolphin Club Alcatraz Swim",
      date: "October 26, 2024",
      time: "35:51"
    },
    {
      name: "Dolphin Club Golden Gate Swim",
      date: "September 21, 2024",
      time: "25:39",
    },
    {
      name: "Pier 15 to Dolphin Club",
      date: "June 29, 2024",
      time: "37:44 (self-timed)",
    },
    {
      name: "Sharkfest Alcatraz Swim",
      date: "August 26, 2023",
      time: "42:24",
    },
    {
      name: "Central Oregon Masters Eel Lake 1500m",
      date: "August 12, 2023",
      time: "26:05.8",
    },
  ],
  publications: [
    {
      title: "TXT2TXN: Using AI (LLMs) for Intent-Based Applications",
      publication: "Circle Research",
      date: "August 8, 2024",
      techStack: [],
      link: {
        label: "Article",
        href: "https://www.circle.com/blog/txt2txn-using-ai-llms-for-internet-based-applications",
      },
    },
    {
      title: "A New Era of Content Publishing and Licensing on the Blockchain",
      publication: "Bitcoin Magazine",
      date: "August 4, 2017",
      techStack: [],
      link: {
        label: "Article",
        href: "https://bitcoinmagazine.com/business/new-era-content-publishing-and-licensing-blockchain",
      },
    },
    {
      title: "Counterpary has Reached its Millionth Transaction",
      publication: "Bitcoin Magazine",
      date: "July 17, 2017",
      techStack: [],
      link: {
        label: "Article",
        href: "https://bitcoinmagazine.com/business/counterparty-has-reached-its-millionth-transaction",
      },
    },
    {
      title: "The Moonbeam Scaling Network: A 'semi-decentralized' scaling solution",
      publication: "Bitcoin Magazine",
      date: "June 16, 2017",
      techStack: [],
      link: {
        label: "Article",
        href: "https://bitcoinmagazine.com/technical/moonbeam-scaling-network-semi-decentralized-scaling-solution",
      },
    },
    {
      title: "The Pre-Crisis Monetary Policy Implementation Framework",
      publication: "Federal Reserve Bank of New York Staff Report",
      date: "March 2017",
      techStack: [],
      link: {
        label: "Article",
        href: "https://www.newyorkfed.org/research/staff_reports/sr809",
      },
    },
    {
      title: "Monetary Policy Transmission before and after the Crisis",
      publication: "Liberty Street Economics Blog",
      date: "June 29, 2016",
      techStack: [],
      link: {
        label: "Article",
        href: "https://libertystreeteconomics.newyorkfed.org/2016/06/monetary-policy-transmission-before-and-after-the-crisis/",
      },
    },
    {
      title: "Is Bitcoin Really Frictionless?",
      publication: "Liberty Street Economics Blog",
      date: "March 23, 2016",
      techStack: [],
      link: {
        label: "Article",
        href: "https://libertystreeteconomics.newyorkfed.org/2016/03/is-bitcoin-really-frictionless/",
      },
    },
    {
      title: "The payment system benefits of high reserve balances",
      publication: "Journal of Payments Strategy and Systems",
      date: "Spring 2016",
      techStack: [],
      link: {
        label: "Article",
        href: "https://www.ingentaconnect.com/content/hsp/jpss/2016/00000010/00000001/art00008",
      },
    },
  ],
} as const;
