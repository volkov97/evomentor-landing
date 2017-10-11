import renderer from '../lib/renderer';

import visitorReducer from '../../common/reducers/visitor';
import routes from '../../common/routes/visitor';

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
            .catch(err => {
                console.log(err);
                return res.send(500, error.message);
            });
    }

}
