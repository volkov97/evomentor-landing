import renderer from '../lib/renderer';

import visitorReducer from '../../common/reducers/index';
import routes from '../../common/routes/index';

module.exports = {

    index(req, res, next) {
        renderer({
            routes,
            location: req.originalUrl,
            reducer: visitorReducer
        })
            .then(options => {
                if (options.redirect) {
                    return res.redirect(301, options.redirect);
                }

                return res.render('visitor', options);
            })
            .catch(err => res.send(500, err.message));
    }

}
