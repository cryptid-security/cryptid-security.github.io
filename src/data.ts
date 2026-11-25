export type Tool = { name: string; blurb: string };
export type Category = {
  title: string;
  count: string;
  about: string;
  tools: Tool[];
};

export const GH_ORG = "https://github.com/cryptid-security";
export const GH_USER = "https://github.com/njuj";

export const categories: Category[] = [
  {
    title: "Malware Analysis & Reverse Engineering",
    count: "05",
    about:
      "Pull a config from a live RAT, find code that was injected or hollowed in, unpack a dropper, judge a driver.",
    tools: [
      { name: "unmask", blurb: "Config extractor for the AsyncRAT / DcRat / VenomRAT family — decrypts and HMAC-verifies the embedded settings." },
      { name: "kira-scan", blurb: "PE triage with a pure-Python YARA engine: strings, conditions, and the pe, math, and hash modules." },
      { name: "ghost-hunter", blurb: "Live memory scanner that finds injected and hollowed code by walking thread stacks." },
      { name: "unwrap", blurb: "Unpacks .lnk, .hta, and HTML-smuggling droppers to the staged payload, without executing it." },
      { name: "driver-guard", blurb: "Analyses vulnerable drivers (BYOVD) and flags the arbitrary read, write, and process-kill primitives attackers abuse." },
    ],
  },
  {
    title: "Forensics & Threat Intelligence",
    count: "03",
    about:
      "Hunt through logs and captured traffic, and turn a written report into structured intelligence.",
    tools: [
      { name: "evtx-hunter", blurb: "Windows Event Log hunter with its own Sigma engine — correlates bursts and decodes obfuscated PowerShell." },
      { name: "panoptes", blurb: "Reads a packet capture and detects RAT and Cobalt Strike certificates, DNS-over-HTTPS, and suspicious TLS." },
      { name: "ioc-hunter", blurb: "Turns a threat report into clean, defanged indicators and a STIX 2.1 bundle, entirely in the browser." },
    ],
  },
  {
    title: "Application & Supply-Chain Security",
    count: "05",
    about:
      "Audit the headers, the email posture, the shipped bundles, and the dependencies you pull in.",
    tools: [
      { name: "headerguard", blurb: "Audits a site's HTTP security headers, grades them, and generates a Content-Security-Policy to match." },
      { name: "mailguard", blurb: "Grades a domain's SPF, DKIM, DMARC, and MTA-STS, and with --fix writes the records for you." },
      { name: "bundle-leak", blurb: "Scans a deployed site's JavaScript and source maps for leaked secrets and recoverable source." },
      { name: "slopcheck", blurb: "Scores dependency supply-chain risk using OSV advisories, typosquat detection, and secret scanning." },
      { name: "provenance", blurb: "Verifies PyPI PEP 740 attestations and checks for starjacking before a package lands on your machine." },
    ],
  },
  {
    title: "Content & AI Security",
    count: "01",
    about:
      "Reveal the text a page is hiding from you, and the instructions it is hiding from a model.",
    tools: [
      { name: "unseen", blurb: "Surfaces hidden text and prompt-injection payloads — zero-width characters, Unicode tricks, invisible PDF layers." },
    ],
  },
  {
    title: "System Hardening",
    count: "01",
    about: "Measure a machine against the controls that actually change the outcome.",
    tools: [
      { name: "harden-check", blurb: "Audits Windows security posture and, for each gap it finds, tells you exactly how to close it." },
    ],
  },
];

export const tenets: { title: string; body: string }[] = [
  { title: "Zero dependencies", body: "The standard library first. Fewer moving parts, a smaller attack surface, nothing to install on an air-gapped machine." },
  { title: "Offline by default", body: "Analysis never needs the network. What does reach out — advisory feeds, DNS — is explicit and optional." },
  { title: "Reproducible", body: "Every result can be checked by hand. No hidden model, no telemetry, nothing you cannot audit." },
  { title: "Tested", body: "Each instrument carries its own suite. A change that breaks behaviour breaks a test first." },
  { title: "One job each", body: "Small tools that compose into a workflow, never a single monolith you must adopt whole." },
  { title: "Read the source", body: "Short enough to read in a sitting. Trust is earned by legibility, not asserted in a README." },
];

// All fifteen tool names, for the drifting marquee.
export const allToolNames: string[] = categories.flatMap((c) => c.tools.map((t) => t.name));
