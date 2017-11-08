import * as Express from 'express';
import { create as ExpressHandlebars } from 'express-handlebars';
import * as path from 'path';

import routes from './routes';

const server = Express();
server.engine('html', ExpressHandlebars({ extname: '.html' }).engine);
server.set('view engine', 'html');
server.set('views', path.join(__dirname, '..', 'views'));

server.use(routes);

server.listen(3000, (err: object) => {
    console.log('Server is listening on http://localhost:3000'); // tslint:disable-line no-console
});
