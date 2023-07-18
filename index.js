import vorpal from 'vorpal';

import commandLine from './src/commands/commandLine.js';

const vorpalApp = vorpal();

commandLine.setup(vorpalApp);


vorpalApp
    .delimiter('> ')
    .show();