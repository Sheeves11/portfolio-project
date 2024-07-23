import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  Mia Quain
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
        
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             INFO
                                            -----------
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="${config.resume_url}" target="_blank">resume.pdf</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           phone: 479.787.0038
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        email: <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>

▐▓             > M I A             ▐▓        SOCIAL 
                                            -----------
▐▓                                 ▐▓        <u><a href="instagram.com/pebbleandbraid}" target="_blank">instagram.com/pebbleandbraid}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             ART & DESIGN
                                            -----------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://www.behance.net/sheeves11" target="_blank">Behance Portfolio</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.repo}" target="_blank">this website's source code</a></u>


⠀⠀⣿⠛⢳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣔⢁⡁⡆⠀       Mia Quain
⠀⢰⣽⡆⠀⠈⠎⣡⢆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠑⡈⠃⣠⡿⡇⡇⠀     -----------
⠀⠸⣕⣿⣇⣀⡀⠉⠉⠻⠞⠜⠳⠘⡒⡒⡔⣦⡠⣄⣀⢔⠥⠅⠁⠀⣐⣿⣟⣻⡅⠀
⠀⠻⡓⣿⣻⣿⣇⢆⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⡀⠄⣮⣝⢏⡏⡃⠀      INFO
⠀⠨⢍⣬⡯⣟⢿⣿⡖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣥⣿⢻⢯⢿⠃⠅⠀     -----------
⠀⠀⢃⢕⣧⣗⡁⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⢛⢽⣿⡿⡅⠀⠀
⠀⠀⠀⢙⡷⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢸⣫⢉⠄⠀
⠀⠀⢀⡺⡇⠀⠀⣀⣂⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡀⡀⣀⠀⠀⠁⢯⡡⠅⠀
⠀⠀⡰⠇⡅⠀⠀⠈⠉⠻⠧⠗⠉⠀⠀⠀⠀⠀⠀⠛⠯⠻⠋⠁⠀⠀⠀⠐⢛⣿⠇⠀
⠐⠐⡋⠄⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⡻⡕⠂
⠠⢀⡶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣽⣄⣔⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣻⠪⡀
⠀⠀⡽⣶⡆⠅⠄⠀⠀⠀⠀⠀⠀⠀⢹⣏⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⡰⢢⢟⡿⡻⠀
⠀⠀⠀⠐⠁⢝⢄⡀⠀⠀⠀⠀⠀⠀⣠⣏⡀⠀⠀⠀⠀⠀⠀⠀⢀⠀⢀⣾⠧⠉⠀⠀
⠀⠀⠀⠂⠈⡢⠗⣿⡆⣦⢀⣀⣔⡮⠘⠑⠻⢷⣶⣆⣀⢀⢃⡤⡦⡿⡎⠚⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠁⠀⠀⠈⡷⣌⣠⡀⡀⠀⠀⠀⢀⢌⡏⢓⠫⠫⠁⠁⠄⠁⠈⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠂⠒⠂⠉⠑⠪⠣⠇⠏⠛⠉⠈⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀

`;
  }
};

export default sumfetch;
