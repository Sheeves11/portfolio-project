// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  return `
Here are all the available commands:

INFO
- about
- resume
- manifesto

CODE
- repo
- github

SOCIAL
- linkedin
- email

SYSTEM
- whoami
- help
- ls
- cd
- date
- sudo
- echo

-------------------------------------

[tab]: trigger completion.
[ctrl+l] or clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
  
Hello! I'm Mia Quain! I'm an IT professional with an 
interest in web development, UI design, photography, and programming.

My story begins in Russellville, Arkansas as a young 
computer science student who fell in love with C++, 
command-line interfaces, and web design. I quickly put 
these skills to use in my dorm room, building and hosting 
websites for myself and my friends. 

After several years of experience in photography, web design, 
marketing, and writing, I began working at the University of Arkansas 
as a computer technician while studying graphic design with a focus on 
user experience and user interface design. During my time here I developed 
my design and technical skills; quickly becoming a full-time scientific 
research technologist for the department of computer science and electrical engineering. 

I am now seeking to put my range of skills and passions to work in a web development 
or user experience design role!

----------------------------------------------------------------------------------------

More about me:
'sumfetch' - short summary.
'manifesto' - my web design philosophy.
'resume' - my latest resume.
'readme' - my github readme.`;
};

// Manifesto
export const manifesto = async (args: string[]): Promise<string> => {
  return `

Good web design is a practice that goes deeper than pretty
graphics. To me, a good website needs to excel at the following:

--------------------------

1) Accessibility

The majority of the world's internet users don't have brand-new laptops running
fully updated versions of Google Chrome. They're using mobile phones with limited
internet access, older computers, and a wide variety of browsers. A good website
considers it's audience and the limitations of their devices. A good website should
also be machine-readable and accessable by screen-readers, translation programs,
and search engines alike.

--------------------------

2) Security

If you can't safely secure a user's personal data, you shouldn't be collecting it.
Security and safe data storage needs to be at the forefront of any design decision.

--------------------------

3) Usefulness

A website should be rich in information. The fewer clicks a user needs to access the
information they seek, the better. 

----------------------------------------------------------------------------------------

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};


// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, please send me money for server space.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `wow, do people still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ███▄ ▄███▓ ██▓ ▄▄▄           █████   █    ██  ▄▄▄       ██▓ ███▄    █ 
▓██▒▀█▀ ██▒▓██▒▒████▄       ▒██▓  ██▒ ██  ▓██▒▒████▄    ▓██▒ ██ ▀█   █ 
▓██    ▓██░▒██▒▒██  ▀█▄     ▒██▒  ██░▓██  ▒██░▒██  ▀█▄  ▒██▒▓██  ▀█ ██▒
▒██    ▒██ ░██░░██▄▄▄▄██    ░██  █▀ ░▓▓█  ░██░░██▄▄▄▄██ ░██░▓██▒  ▐▌██▒
▒██▒   ░██▒░██░ ▓█   ▓██▒   ░▒███▒█▄ ▒▒█████▓  ▓█   ▓██▒░██░▒██░   ▓██░
░ ▒░   ░  ░░▓   ▒▒   ▓▒█░   ░░ ▒▒░ ▒ ░▒▓▒ ▒ ▒  ▒▒   ▓▒█░░▓  ░ ▒░   ▒ ▒ 
░  ░      ░ ▒ ░  ▒   ▒▒ ░    ░ ▒░  ░ ░░▒░ ░ ░   ▒   ▒▒ ░ ▒ ░░ ░░   ░ ▒░
░      ░    ▒ ░  ░   ▒         ░   ░  ░░░ ░ ░   ░   ▒    ▒ ░   ░   ░ ░ 
       ░    ░        ░  ░       ░       ░           ░  ░ ░           ░ 
                                                                       

Ahoy there websurfer! I'm Mia! I'm a web-designer from Fayetteville, Arkansas
with a love for terminal-based applications, user experience design, and
those giant CRT Monitors from the 90s! 

If you're on a mobile device, please feel free to view an overview of my
projects on linkedin <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.linkedin.com/in/miaquain11/" target="_blank">here!</a></u> 

If not, feel free to explore!

Thanks for looking,
Mia Quain <3

--------------------------------------------------------

Type 'help' to see the list of available commands.
Type 'sumfetch' to display a summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to view this website's source code.

--------------------------------------------------------
`;
};
