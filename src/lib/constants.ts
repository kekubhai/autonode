import { BookTemplate, Home, Logs } from "lucide-react";
import { Connection } from "./types.ts";
import { Workflow ,Settings, Cat,PartyPopper} from "lucide-react";

export const clients = [
  { href: '/slack.png' },
  { href: '/notion.png' },
  { href: '/discord.png' },
  { href: '/googleDrive.png' },
  { href: '/logo.png' }
]
  
  export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  export const menuOptions = [
    { name: 'Dashboard', Component: Home, href: '/dashboard' },
    { name: 'Workflows', Component: Workflow, href: '/workflows' },
    { name: 'Settings', Component: Settings, href: '/settings' },
    { name: 'Connections', Component: Cat, href: '/connections' },
    { name: 'Billing', Component: PartyPopper, href: '/billing' },
    { name: 'Templates', Component: BookTemplate, href: '/templates' },
    { name: 'Logs', Component: Logs, href: '/logs' },
  ]

  export const EditorCanvasDefaultCardTypes = {
    Email: { description: 'Send and email to a user', type: 'Action' },
    Condition: {
      description: 'Boolean operator that creates different conditions lanes.',
      type: 'Action',
    },
    AI: {
      description:
        'Use the power of AI to summarize, respond, create and much more.',
      type: 'Action',
    },
    Slack: { description: 'Send a notification to slack', type: 'Action' },
    'Google Drive': {
      description:
        'Connect with Google drive to trigger actions or to create files and folders.',
      type: 'Trigger',
    },
    Notion: { description: 'Create entries directly in notion.', type: 'Action' },
    'Custom Webhook': {
      description:
        'Connect any app that has an API key and send data to your applicaiton.',
      type: 'Action',
    },
    Discord: {
      description: 'Post messages to your discord server',
      type: 'Action',
    },
    'Google Calendar': {
      description: 'Create a calendar invite.',
      type: 'Action',
    },
    Trigger: {
      description: 'An event that starts the workflow.',
      type: 'Trigger',
    },
    Action: {
      description: 'An event that happens after the workflow begins',
      type: 'Action',
    },
    Wait: {
      description: 'Delay the next action step by using the wait timer.',
      type: 'Action',
    },
  }
  

  export const CONNECTIONS: Connection[] = [
    {
      title: 'Google Drive',
      description: 'Connect your google drive to listen to folder changes',
      image: '/googleDrive.png',
      connectionKey: 'googleNode',
      alwaysTrue: true,
    },
    {
      title: 'Discord',
      description: 'Connect your discord to send notification and messages',
      image: '/discord.png',
      connectionKey: 'discordNode',
      accessTokenKey: 'webhookURL',
    },
    {
      title: 'Notion',
      description: 'Create entries in your notion dashboard and automate tasks.',
      image: '/notion.png',
      connectionKey: 'notionNode',
      accessTokenKey: 'accessToken',
    },
    {
      title: 'Slack',
      description:
        'Use slack to send notifications to team members through your own custom bot.',
      image: '/slack.png',
      connectionKey: 'slackNode',
      accessTokenKey: 'slackAccessToken',
      slackSpecial: true,
    },
  ]