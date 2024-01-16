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
    "I'm a software engineer working in the crypto industry. In my free time you can find me swimming in the San Francisco Bay, birding, or playing chess.",
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
      title: "Updating the Ethereum Yellow Paper",
      techStack: [
        "Side Project",
        "EVM",
        "Technical Writing",
      ],
      description: "Updated the Ethereum Yellow Paper for the London, Arrow Glacier, Gray Glacier, and Paris.",
      link: {
        label: "ETH Yellow Paper",
        href: "https://github.com/ethereum/yellowpaper",
      },
    },
  ],
  publications: [
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
